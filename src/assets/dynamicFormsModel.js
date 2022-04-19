(function (window) {
    var controlsConfig;
    var SERVER_JSON_DATA;
    var selectedCategory;
    var selectedControlKeys;
    var masterCategory;

    var back_Button_key;
    var backButtonPostionIndex = 0;

    function dynamicFormsEvent(param, configparam, SERVER_DATA) {
        controlsConfig = configparam.controlsConfig;
        selectedCategory = param;
        SERVER_JSON_DATA = SERVER_DATA;
        console.log(SERVER_JSON_DATA);
        selectedControlKeys = Object.keys(controlsConfig); 

        prepareModel();
        // helpGuide(selectedCategory);
    }

    function setMasterCategory(value){ 
        masterCategory = "_" + value + "_";
    }

    function getParentCategory() {
        selectedControlKeys.forEach(key => {
            if (controlsConfig[key].config.controlName == controlsConfig[selectedCategory].config.parent) {
                if (controlsConfig[key].config.valueControl) {
                    selectedCategory = controlsConfig[key].config.name;
                    // helpGuide(selectedCategory);
                }
                if (controlsConfig[key].config.controlType == "title") {
                    if (controlsConfig[key].config.name.split(masterCategory).length > 1 || controlsConfig[key].config.tier == 1) {
                        controlsConfig[key].hide = false;
                    }
                }
            }
        });
    }

    function prepareModel() {
        console.log(controlsConfig, selectedCategory);
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
                controlsConfig[key].config.enabled != false &&
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
            catChildrenList.forEach(result => {
                if(result.repeatable){
                    enableAddControl(result.repeatable != result.maxLimit ? 'add' : 'edit');
                }
            });

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
        console.log(backButtonPostionIndex);
        if (controlsConfig[selectedCategory].config.tier >= 2) {
            controlsConfig[back_Button_key].hide = false;
        } else {
            controlsConfig[back_Button_key].hide = true;
        }
    }

    function backButtonEvent(BackControlName) { 
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

    function enableAddControl(logicImpl){
        selectedControlKeys.forEach(key => {
            if(controlsConfig[key].config.controlType == "addbutton" && logicImpl == 'add'){
                controlsConfig[key].hide = false;
            }
            if(controlsConfig[key].config.controlType == "editbutton"){
                var replacedControl = controlsConfig[key].config.name.replace("_edit_btn", "_btn");
                selectedControlKeys.forEach(keyControl => {
                    if (controlsConfig[keyControl].config.name == replacedControl && controlsConfig[keyControl].config.enabled == true) {
                        controlsConfig[keyControl.replace("_btn", "_edit_btn")].hide = false;
                    }
                })
            }
        });
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

    function helpGuide(control){
        const btnname = controlsConfig[control].config.name;
        const controlName = controlsConfig[control].config.controlName;
        const parentName = controlsConfig[control].config.parent;
        const tier = controlsConfig[control].config.tier;
        var event = new CustomEvent('onhelpGuideClick', {
            detail: {
                control: btnname,
                child: controlName,
                parent: parentName,
                tier: tier
            }
        });
        window.dispatchEvent(event);
    }
 
    window.dynamicFormsEvent = dynamicFormsEvent;
    window.backButtonEvent = backButtonEvent;
    window.setMasterCategory = setMasterCategory;
    window.getParentCategory = getParentCategory; 
})(window);