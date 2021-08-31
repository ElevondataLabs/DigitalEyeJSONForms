(function (window) {

    var controlsConfig;

    function formtest(param, varb) {
        controlsConfig = varb[0].dynamicFormBuildConfig[0].controlsConfig;
        switch(param){
            case 'plumbing_bathroom_btn': plumbing_bathroom();
                                          break;
            case 'plumbing_bathroomsink_btn': plumbing_bathroomsink(); 
                                              break;
        }
    }

    function plumbing_bathroom(){

        console.log(controlsConfig)
        plumbing_reset();

        controlsConfig.plumbing_back_btn.tier = 2;
        controlsConfig.plumbing_back_btn.hide = false;

        controlsConfig.plumbing_bathroom_title.hide = false;
        controlsConfig.plumbing_bathroomsink_btn.hide = false;
        controlsConfig.plumbing_bathtub_btn.hide = false;
        controlsConfig.plumbing_supplyline_btn.hide = false;
    }

    function plumbing_reset() {
        controlsConfig.plumbing_back_btn.hide = true;

        controlsConfig.plumbing_title.hide = true;
        controlsConfig.plumbing_kitchen_title.hide = true;
        controlsConfig.plumbing_bathroom_title.hide = true;
        controlsConfig.plumbing_heater_title.hide = true;
        controlsConfig.plumbing_dishwasher_title.hide = true;
        controlsConfig.plumbing_activeleaks_title.hide = true;
        controlsConfig.plumbing_priorleaks_title.hide = true;
        controlsConfig.plumbing_kitchen_sink_title.hide = true;
        controlsConfig.plumbing_bathroom_sink_title.hide = true;
        controlsConfig.plumbing_bathroom_bathtub_title.hide = true;
        controlsConfig.plumbing_bathroom_supplyline_title.hide = true;
        controlsConfig.plumbing_wmhose_title.hide = true;

        controlsConfig.plumbing_control_add_btn.hide = true;

        controlsConfig.plumbing_kitchen_btn.hide = true;
        controlsConfig.plumbing_kitchensink_btn.hide = true;
        controlsConfig.plumbing_kitchensink_add_btn.hide = true;

        controlsConfig.plumbing_kitchen2_btn.hide = true;
        controlsConfig.plumbing_kitchen2_edit_btn.hide = true;
        controlsConfig.plumbing_kitchensink2_btn.hide = true;
        controlsConfig.plumbing_kitchensink2_add_btn.hide = true;

        controlsConfig.plumbing_kitchen3_btn.hide = true;
        controlsConfig.plumbing_kitchen3_edit_btn.hide = true;
        controlsConfig.plumbing_kitchensink3_btn.hide = true;
        controlsConfig.plumbing_kitchensink3_add_btn.hide = true;

        controlsConfig.plumbing_kitchen4_btn.hide = true;
        controlsConfig.plumbing_kitchen4_edit_btn.hide = true;
        controlsConfig.plumbing_kitchensink4_btn.hide = true;
        controlsConfig.plumbing_kitchensink4_add_btn.hide = true;

        controlsConfig.plumbing_kitchen5_btn.hide = true;
        controlsConfig.plumbing_kitchen5_edit_btn.hide = true;
        controlsConfig.plumbing_kitchensink5_btn.hide = true;
        controlsConfig.plumbing_kitchensink5_add_btn.hide = true;

        controlsConfig.plumbing_bathroom_btn.hide = true;
        controlsConfig.plumbing_bathroomsink_btn.hide = true;
        controlsConfig.plumbing_bathroomsink_add_btn.hide = true;
        controlsConfig.plumbing_bathtub_btn.hide = true;
        controlsConfig.plumbing_bathtub_add_btn.hide = true;
        controlsConfig.plumbing_supplyline_btn.hide = true;
        controlsConfig.plumbing_supplyline_add_btn.hide = true;

        controlsConfig.plumbing_bathroom2_btn.hide = true;
        controlsConfig.plumbing_bathroom2_edit_btn.hide = true;
        controlsConfig.plumbing_bathroomsink2_btn.hide = true;
        controlsConfig.plumbing_bathroomsink2_add_btn.hide = true;
        controlsConfig.plumbing_bathtub2_btn.hide = true;
        controlsConfig.plumbing_bathtub2_add_btn.hide = true;
        controlsConfig.plumbing_supplyline2_btn.hide = true;
        controlsConfig.plumbing_supplyline2_add_btn.hide = true;

        controlsConfig.plumbing_bathroom3_btn.hide = true;
        controlsConfig.plumbing_bathroom3_edit_btn.hide = true;
        controlsConfig.plumbing_bathroomsink3_btn.hide = true;
        controlsConfig.plumbing_bathroomsink3_add_btn.hide = true;
        controlsConfig.plumbing_bathtub3_btn.hide = true;
        controlsConfig.plumbing_bathtub3_add_btn.hide = true;
        controlsConfig.plumbing_supplyline3_btn.hide = true;
        controlsConfig.plumbing_supplyline3_add_btn.hide = true;

        controlsConfig.plumbing_bathroom4_btn.hide = true;
        controlsConfig.plumbing_bathroom4_edit_btn.hide = true;
        controlsConfig.plumbing_bathroomsink4_btn.hide = true;
        controlsConfig.plumbing_bathroomsink4_add_btn.hide = true;
        controlsConfig.plumbing_bathtub4_btn.hide = true;
        controlsConfig.plumbing_bathtub4_add_btn.hide = true;
        controlsConfig.plumbing_supplyline4_btn.hide = true;
        controlsConfig.plumbing_supplyline4_add_btn.hide = true;

        controlsConfig.plumbing_bathroom5_btn.hide = true;
        controlsConfig.plumbing_bathroom5_edit_btn.hide = true;
        controlsConfig.plumbing_bathroomsink5_btn.hide = true;
        controlsConfig.plumbing_bathroomsink5_add_btn.hide = true;
        controlsConfig.plumbing_bathtub5_btn.hide = true;
        controlsConfig.plumbing_bathtub5_add_btn.hide = true;
        controlsConfig.plumbing_supplyline5_btn.hide = true;
        controlsConfig.plumbing_supplyline5_add_btn.hide = true;

        controlsConfig.plumbing_heater_btn.hide = true;
        controlsConfig.plumbing_heater_add_btn.hide = true;

        controlsConfig.plumbing_dishwasher_btn.hide = true;
        controlsConfig.plumbing_dishwasher_add_btn.hide = true;
        controlsConfig.plumbing_dishwasher_comments_btn.hide = true;

        controlsConfig.plumbing_activeleaks_btn.hide = true;
        controlsConfig.plumbing_activeleaks_add_btn.hide = true;
        controlsConfig.plumbing_activeleaks_comments_btn.hide = true;

        controlsConfig.plumbing_priorleaks_btn.hide = true;
        controlsConfig.plumbing_priorleaks_add_btn.hide = true;
        controlsConfig.plumbing_priorleaks_comments_btn.hide = true;

        controlsConfig.plumbing_wmhose_btn.hide = true;
        controlsConfig.plumbing_wmhose_add_btn.hide = true;
        controlsConfig.plumbing_addComments_btn.hide = true;
    }

    function plumbing_bathroomsink(){
        // controlsConfig.plumbing_bathroomsink_btn.value = 'Test';
        if (controlsConfig.plumbing_bathroomsink_btn.value === '' ||
            controlsConfig.plumbing_bathroomsink_btn.value === undefined) {
            btnClick(controlsConfig.plumbing_bathroomsink_btn.config.name);
        }
        else {
            plumbing_reset();

            controlsConfig.plumbing_back_btn.tier = 3;
            controlsConfig.plumbing_back_btn.hide = false;

            controlsConfig.plumbing_bathroom_sink_title.hide = false;
            controlsConfig.plumbing_bathroomsink_add_btn.hide = false;

            gallerybtnClick(controlsConfig.plumbing_bathroomsink_btn.config.name);

            component.backButtonEnableOrDisable(true);

        }
    }

    function btnClick(control) {
        const btnname = controlsConfig[control].config.name;
        const controlName = controlsConfig[control].config.controlName;
        const parentName = controlsConfig[control].config.parent;
        const metatags = controlsConfig[control].config.metatags;
        const cameraTip = controlsConfig[control].config.tip;
        const controlTier = controlsConfig[control].config.tier;

        var event = new CustomEvent('onCameraClick', {
            detail: {
                control: btnname,
                child : controlName,
                parent : parentName,
                metatags : metatags, 
                tip : cameraTip, 
                tier : controlTier
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
                child : controlName,
                parent : parentName
            }
        });
        window.dispatchEvent(event);
    }


    window.formtest = formtest;

})(window);