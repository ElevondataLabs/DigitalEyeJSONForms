(function (window) {

    var controlsConfig;
    var SERVER_JSON_DATA;
    var selectedCategory;
    var selectedControlKeys;
    var masterCategory;

    var back_Button_key;
    var backButtonPostionIndex = 0;
    function dynamicFormsEvent(param, varb, SERVER_DATA) {
        controlsConfig = varb[0].dynamicFormBuildConfig[0].controlsConfig;
        selectedCategory = param;
        SERVER_JSON_DATA = SERVER_DATA;
        console.log(SERVER_JSON_DATA);
        selectedControlKeys = Object.keys(controlsConfig);

        prepareModel();
    }

    function getParentCategory(){
        
        selectedControlKeys.forEach(key => {
            if (controlsConfig[key].config.controlName == controlsConfig[selectedCategory].config.parent) {
                console.log(controlsConfig[key], controlsConfig[selectedCategory].config.tier)
                if (controlsConfig[key].config.valueControl) {
                    selectedCategory = controlsConfig[key].config.name;
                }
                if (controlsConfig[key].config.controlType == "title" && 
                    controlsConfig[key].config.name.split(masterCategory).length > 1) {
                    controlsConfig[key].hide = false;
                }   
            }

            if(
                (controlsConfig[key].config.controlType == "addbutton" || controlsConfig[key].config.controlType == "editbutton") &&
                controlsConfig[selectedCategory].config.tier == 2){
                controlsConfig[key].hide = false;
            }
        });
    }

    function prepareModel() {
        console.log(controlsConfig[selectedCategory].config);
        if (controlsConfig[selectedCategory].config.controlType == "photo") {
            if (!controlsConfig[selectedCategory].config.valueControl) {
                getParentCategory();
                CameraBtnClick(selectedCategory);
                return false;
            } else {
                if (!controlsConfig[selectedCategory].config.value && (controlsConfig[selectedCategory].config.isParent == false || controlsConfig[selectedCategory].config.isParent == undefined)) {
                    CameraBtnClick(selectedCategory);
                    getParentCategory();
                    return false;
                }

                if (controlsConfig[selectedCategory].config.value) {
                    gallerybtnClick(selectedCategory);
                }
            }
        }

        var catChildrenList = [];
        if(controlsConfig[selectedCategory].config.tier == 2){
            masterCategory = "_" + controlsConfig[selectedCategory].config.controlName.toLowerCase() + "_";
        }
        console.log("masterCategory", masterCategory);
        selectedControlKeys.forEach(key => {
            controlsConfig[key].hide = true;
            var isBackButton = controlsConfig[key].config.controlType == "backbutton";
            if (controlsConfig[key].config.controlType == "title" && 
               (controlsConfig[selectedCategory].config.controlName == controlsConfig[key].config.controlName) &&
               (controlsConfig[selectedCategory].config.parent == controlsConfig[key].config.parent)) {
                controlsConfig[key].hide = false;
            }
            if (!controlsConfig[key].config.value && 
                controlsConfig[key].config.parent == controlsConfig[selectedCategory].config.controlName &&
                (controlsConfig[key].config.controlType == "photo" || controlsConfig[key].config.controlType == "comments")) {
                    if(controlsConfig[key].config.name.split(masterCategory).length > 1)
                    {
                        catChildrenList.push(controlsConfig[key].config);
                        controlsConfig[key].hide = false;
                    }
            } else if (controlsConfig[key].config.value && 
                      controlsConfig[key].config.parent == controlsConfig[selectedCategory].config.controlName) {
                        if(controlsConfig[key].config.name.split(masterCategory).length > 1)
                        {
                            catChildrenList.push(controlsConfig[key].config);
                            controlsConfig[key].hide = false;
                        }
            }

            if (isBackButton) {
                back_Button_key = key;
            }
        });
        console.log(catChildrenList);
        console.log(controlsConfig);
        console.log((selectedCategory));
        reBindbackButton();
    }

    function reBindbackButton() {
        backButtonPostionIndex = controlsConfig[selectedCategory].config.tier;
        if (controlsConfig[selectedCategory].config.tier >= 2) {
            controlsConfig[back_Button_key].hide = false;
        } else {
            controlsConfig[back_Button_key].hide = true;
        }
    }

    function backButtonEvent(BackControlName) {
        console.log("backButtonEvent", BackControlName);
        console.log(selectedCategory);
        selectedControlKeys.forEach(key => {
            controlsConfig[key].hide = true;
            if ((controlsConfig[key].config.tier == backButtonPostionIndex) && 
                 controlsConfig[key].config.controlType != "title" && 
                 controlsConfig[key].config.enabled != false &&
                 controlsConfig[key].config.parent == controlsConfig[selectedCategory].config.parent) {
                controlsConfig[key].hide = false;
            }
        });
        getParentCategory();
        reBindbackButton();
    }

    function CameraBtnClick(control) {
        const btnname = controlsConfig[control].config.name;
        const controlName = controlsConfig[control].config.controlName;
        const parentName = controlsConfig[control].config.parent;
        const metatags = controlsConfig[control].config.metatags;
        const cameraTip = controlsConfig[control].config.tip;
        const controlTier = controlsConfig[control].config.tier;

        var event = new CustomEvent('onCameraClick', {
            detail: {
                control: btnname,
                child: controlName,
                parent: parentName,
                metatags: metatags,
                tip: cameraTip,
                tier: controlTier
            }
        });
        window.dispatchEvent(event);
    }

    function gallerybtnClick(control) {
        const btnname = controlsConfig[control].config.name;
        const controlName = controlsConfig[control].config.controlName;
        const parentName = controlsConfig[control].config.parent;

        var event = new CustomEvent('onGalleryClick', {
            detail: {
                control: btnname,
                child: controlName,
                parent: parentName
            }
        });
        window.dispatchEvent(event);
    }


    window.dynamicFormsEvent = dynamicFormsEvent;
    window.backButtonEvent = backButtonEvent;
})(window);