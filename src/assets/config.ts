// @ts-nocheck
import { FormControlConfig } from '@rxweb/reactive-dynamic-forms';

export class UserModel extends FormControlConfig {
    constructor(fieldConfig: { [key: string]: any },
        public controlsConfig: { [key: string]: FormControlConfig },
        notificationId: number,
        private component: ComponentClickEvent) {
        super(fieldConfig, controlsConfig, notificationId);
    }

    hooks: Hooks = {
        postValue: () => {

        }
    };

    homeexterior_back(){
        this.component.galleryReset();
        if (this.controlsConfig.homeexterior_back_btn.tier == 2) {
            this.homeexterior_reset();
            this.homeexterior_tier1();
        }
        else if (this.controlsConfig.homeexterior_back_btn.tier == 3) {
            this.controlsConfig.homeexterior_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'HomeExterior'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['homeexterior_' + element.parent.toLowerCase()]();
                }
            });
        }   
    }

    homeexterior_reset(){

        this.controlsConfig.homeexterior_back_btn.hide = true;

        this.controlsConfig.homeexterior_title.hide = true;
        this.controlsConfig.homeexterior_front_title.hide = true;
        this.controlsConfig.homeexterior_backview_title.hide = true;
        this.controlsConfig.homeexterior_additionalphotos_title.hide = true;
        this.controlsConfig.homeexterior_front_btn.hide = true;
        this.controlsConfig.homeexterior_front_add_btn.hide = true;
        this.controlsConfig.homeexterior_backview_btn.hide = true;
        this.controlsConfig.homeexterior_backview_add_btn.hide = true;
        this.controlsConfig.homeexterior_additionalphotos_btn.hide = true;
        this.controlsConfig.homeexterior_additionalphotos_add_btn.hide = true;
        
        this.component.backButtonEnableOrDisable(false);
    }

    homeexterior_tier1(){
        this.controlsConfig.homeexterior_title.hide = false;

        this.controlsConfig.homeexterior_front_btn.hide = false;
        this.controlsConfig.homeexterior_backview_btn.hide = false;
        this.controlsConfig.homeexterior_additionalphotos_btn.hide = false; 
    }

    homeexterior_front(): void {
        if (this.controlsConfig.homeexterior_front_btn.value == '' || this.controlsConfig.homeexterior_front_btn.value == undefined) {
            this.btnClick(this.controlsConfig.homeexterior_front_btn.config.name);
        }
        else {
            this.homeexterior_reset();
            this.controlsConfig.homeexterior_back_btn.tier = 2;
            this.controlsConfig.homeexterior_back_btn.hide = false;
            this.controlsConfig.homeexterior_front_title.hide = false;

            this.controlsConfig.homeexterior_front_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.homeexterior_front_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    homeexterior_front_add(): void {
        this.btnClick(this.controlsConfig.homeexterior_front_btn.config.name);
    }

    homeexterior_backview(): void {
        if (this.controlsConfig.homeexterior_backview_btn.value == '' || this.controlsConfig.homeexterior_backview_btn.value == undefined) {
            this.btnClick(this.controlsConfig.homeexterior_backview_btn.config.name);
        }
        else {
            this.homeexterior_reset();
            this.controlsConfig.homeexterior_back_btn.tier = 2;
            this.controlsConfig.homeexterior_back_btn.hide = false;
            this.controlsConfig.homeexterior_backview_title.hide = false;

            this.controlsConfig.homeexterior_backview_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.homeexterior_backview_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    homeexterior_backview_add(): void {
        this.btnClick(this.controlsConfig.homeexterior_backview_btn.config.name);
    }

    homeexterior_additionalphotos(): void {
        if (this.controlsConfig.homeexterior_additionalphotos_btn.value == '' || this.controlsConfig.homeexterior_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.homeexterior_additionalphotos_btn.config.name);
        }
        else {
            this.homeexterior_reset();
            this.controlsConfig.homeexterior_back_btn.tier = 2;
            this.controlsConfig.homeexterior_back_btn.hide = false;
            this.controlsConfig.homeexterior_additionalphotos_title.hide = false;

            this.controlsConfig.homeexterior_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.homeexterior_additionalphotos_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    homeexterior_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.homeexterior_additionalphotos_btn.config.name);
    }


    furniturefixtures_back(){
        this.component.galleryReset();
        if (this.controlsConfig.furniturefixtures_back_btn.tier == 2) {
            this.furniturefixtures_reset();
            this.furniturefixtures_tier1();
        }
        else if (this.controlsConfig.furniturefixtures_back_btn.tier == 3) {
            this.controlsConfig.furniturefixtures_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'FurnitureFixtures'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['furniturefixtures_' + element.parent.toLowerCase()]();
                }
            });
        }   
    }

    furniturefixtures_reset(){

        this.controlsConfig.furniturefixtures_back_btn.hide = true;

        this.controlsConfig.furniturefixtures_title.hide = true;
        this.controlsConfig.furniturefixtures_fireplace_title.hide = true;
        this.controlsConfig.furniturefixtures_additionalphotos_title.hide = true;
        this.controlsConfig.furniturefixtures_fireplace_btn.hide = true;
        this.controlsConfig.furniturefixtures_additionalphotos_btn.hide = true;
        this.controlsConfig.furniturefixtures_fireplace_add_btn.hide = true;
        this.controlsConfig.furniturefixtures_additionalphotos_add_btn.hide = true;
        
        this.component.backButtonEnableOrDisable(false);
    }

    furniturefixtures_tier1(){
        this.controlsConfig.furniturefixtures_title.hide = false;

        this.controlsConfig.furniturefixtures_fireplace_btn.hide = false;
        this.controlsConfig.furniturefixtures_additionalphotos_btn.hide = false;
    }

    furniturefixtures_fireplace(): void {
        if (this.controlsConfig.furniturefixtures_fireplace_btn.value == '' || this.controlsConfig.furniturefixtures_fireplace_btn.value == undefined) {
            this.btnClick(this.controlsConfig.furniturefixtures_fireplace_btn.config.name);
        }
        else {
            this.furniturefixtures_reset();
            this.controlsConfig.furniturefixtures_back_btn.tier = 2;
            this.controlsConfig.furniturefixtures_back_btn.hide = false;
            this.controlsConfig.furniturefixtures_fireplace_title.hide = false;

            this.controlsConfig.furniturefixtures_fireplace_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.furniturefixtures_fireplace_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    furniturefixtures_fireplace_add(): void {
        this.btnClick(this.controlsConfig.furniturefixtures_fireplace_btn.config.name);
    }

    furniturefixtures_additionalphotos(): void {
        if (this.controlsConfig.furniturefixtures_additionalphotos_btn.value == '' || this.controlsConfig.furniturefixtures_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.furniturefixtures_additionalphotos_btn.config.name);
        }
        else {
            this.furniturefixtures_reset();
            this.controlsConfig.furniturefixtures_back_btn.tier = 2;
            this.controlsConfig.furniturefixtures_back_btn.hide = false;
            this.controlsConfig.furniturefixtures_additionalphotos_title.hide = false;

            this.controlsConfig.furniturefixtures_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.furniturefixtures_additionalphotos_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    furniturefixtures_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.furniturefixtures_additionalphotos_btn.config.name);
    }


    additionalpictures_back(){
        this.component.galleryReset();
        if (this.controlsConfig.additionalpictures_back_btn.tier == 2) {
            this.additionalpictures_reset();
            this.additionalpictures_tier1();
        }
        else if (this.controlsConfig.additionalpictures_back_btn.tier == 3) {
            this.controlsConfig.additionalpictures_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'AdditionalPictures'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['additionalpictures_' + element.parent.toLowerCase()]();
                }
            });
        }   
    }

    additionalpictures_reset(){

        this.controlsConfig.additionalpictures_back_btn.hide = true;

        this.controlsConfig.additionalpictures_title.hide = true;
        this.controlsConfig.additionalpictures_theatreroom_title.hide = true;
        this.controlsConfig.additionalpictures_laundaryroom_title.hide = true;
        this.controlsConfig.additionalpictures_powderroom_title.hide = true;
        this.controlsConfig.additionalpictures_additionalphotos_title.hide = true;
        this.controlsConfig.additionalpictures_theatreroom_btn.hide = true;
        this.controlsConfig.additionalpictures_laundaryroom_btn.hide = true;
        this.controlsConfig.additionalpictures_powderroom_btn.hide = true;
        this.controlsConfig.additionalpictures_additionalphotos_btn.hide = true;
        this.controlsConfig.additionalpictures_theatreroom_add_btn.hide = true;
        this.controlsConfig.additionalpictures_laundaryroom_add_btn.hide = true;
        this.controlsConfig.additionalpictures_powderroom_add_btn.hide = true;
        this.controlsConfig.additionalpictures_additionalphotos_add_btn.hide = true;
        
        this.component.backButtonEnableOrDisable(false);
    }

    additionalpictures_tier1(){
        this.controlsConfig.additionalpictures_title.hide = false;

        this.controlsConfig.additionalpictures_theatreroom_btn.hide = false;
        this.controlsConfig.additionalpictures_laundaryroom_btn.hide = false;
        this.controlsConfig.additionalpictures_powderroom_btn.hide = false;
        this.controlsConfig.additionalpictures_additionalphotos_btn.hide = false;
    }

    additionalpictures_theatreroom(): void {
        if (this.controlsConfig.additionalpictures_theatreroom_btn.value == '' || this.controlsConfig.additionalpictures_theatreroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.additionalpictures_theatreroom_btn.config.name);
        }
        else {
            this.additionalpictures_reset();
            this.controlsConfig.additionalpictures_back_btn.tier = 2;
            this.controlsConfig.additionalpictures_back_btn.hide = false;
            this.controlsConfig.additionalpictures_theatreroom_title.hide = false;

            this.controlsConfig.additionalpictures_theatreroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.additionalpictures_theatreroom_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    additionalpictures_theatreroom_add(): void {
        this.btnClick(this.controlsConfig.additionalpictures_theatreroom_btn.config.name);
    }

    additionalpictures_laundaryroom(): void {
        if (this.controlsConfig.additionalpictures_laundaryroom_btn.value == '' || this.controlsConfig.additionalpictures_laundaryroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.additionalpictures_laundaryroom_btn.config.name);
        }
        else {
            this.additionalpictures_reset();
            this.controlsConfig.additionalpictures_back_btn.tier = 2;
            this.controlsConfig.additionalpictures_back_btn.hide = false;
            this.controlsConfig.additionalpictures_laundaryroom_title.hide = false;

            this.controlsConfig.additionalpictures_laundaryroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.additionalpictures_laundaryroom_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    additionalpictures_laundaryroom_add(): void {
        this.btnClick(this.controlsConfig.additionalpictures_laundaryroom_btn.config.name);
    }

    additionalpictures_powderroom(): void {
        if (this.controlsConfig.additionalpictures_powderroom_btn.value == '' || this.controlsConfig.additionalpictures_powderroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.additionalpictures_powderroom_btn.config.name);
        }
        else {
            this.additionalpictures_reset();
            this.controlsConfig.additionalpictures_back_btn.tier = 2;
            this.controlsConfig.additionalpictures_back_btn.hide = false;
            this.controlsConfig.additionalpictures_powderroom_title.hide = false;

            this.controlsConfig.additionalpictures_powderroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.additionalpictures_powderroom_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    additionalpictures_powderroom_add(): void {
        this.btnClick(this.controlsConfig.additionalpictures_powderroom_btn.config.name);
    }

    additionalpictures_additionalphotos(): void {
        if (this.controlsConfig.additionalpictures_additionalphotos_btn.value == '' || this.controlsConfig.additionalpictures_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.additionalpictures_additionalphotos_btn.config.name);
        }
        else {
            this.additionalpictures_reset();
            this.controlsConfig.additionalpictures_back_btn.tier = 2;
            this.controlsConfig.additionalpictures_back_btn.hide = false;
            this.controlsConfig.additionalpictures_additionalphotos_title.hide = false;

            this.controlsConfig.additionalpictures_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.additionalpictures_additionalphotos_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    additionalpictures_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.additionalpictures_additionalphotos_btn.config.name);
    }

    rooms_back(){
        this.component.galleryReset();
        if (this.controlsConfig.rooms_back_btn.tier == 2) {
            this.rooms_reset();
            this.rooms_tier1();
        }
        else if (this.controlsConfig.rooms_back_btn.tier == 3) {
            this.controlsConfig.rooms_back_btn.tier = 2 ;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'Rooms'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                        var resultant = element.name.split('_' + element.parent.toLowerCase())[0];
                        console.log(resultant, element.parent.toLowerCase());
                        this[resultant]();
                }
            });
        }   
    }

    rooms_control_add(): void {
        this.component.addControlopen(this.controlsConfig.rooms_control_add_btn.config.name);
    }

    rooms_reset(){

        this.controlsConfig.rooms_back_btn.hide = true;
        this.controlsConfig.rooms_control_add_btn.hide = true;

        this.controlsConfig.rooms_title.hide = true;
        this.controlsConfig.rooms_masterbedroom_title.hide = true;
        this.controlsConfig.rooms_bedroom_title.hide = true;
        this.controlsConfig.rooms_bedroom2_title.hide = true;
        this.controlsConfig.rooms_bedroom3_title.hide = true;
        this.controlsConfig.rooms_bedroom4_title.hide = true;
        this.controlsConfig.rooms_bedroom5_title.hide = true;
        this.controlsConfig.rooms_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_masterbedroom_bathroom_title.hide = true;
        this.controlsConfig.rooms_masterbedroom_dresser_title.hide = true;
        this.controlsConfig.rooms_masterbedroom_roomphotos_title.hide = true;
        this.controlsConfig.rooms_masterbedroom_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom_bathroom_title.hide = true;
        this.controlsConfig.rooms_bedroom_dresser_title.hide = true;
        this.controlsConfig.rooms_bedroom_roomphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom2_bathroom_title.hide = true;
        this.controlsConfig.rooms_bedroom2_dresser_title.hide = true;
        this.controlsConfig.rooms_bedroom2_roomphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom2_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom3_bathroom_title.hide = true;
        this.controlsConfig.rooms_bedroom3_dresser_title.hide = true;
        this.controlsConfig.rooms_bedroom3_roomphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom3_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom4_bathroom_title.hide = true;
        this.controlsConfig.rooms_bedroom4_dresser_title.hide = true;
        this.controlsConfig.rooms_bedroom4_roomphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom4_additionalphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom5_bathroom_title.hide = true;
        this.controlsConfig.rooms_bedroom5_dresser_title.hide = true;
        this.controlsConfig.rooms_bedroom5_roomphotos_title.hide = true;
        this.controlsConfig.rooms_bedroom5_additionalphotos_title.hide = true;
        
        this.controlsConfig.rooms_masterbedroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_btn.hide = true;
        this.controlsConfig.rooms_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_masterbedroom_bathroom_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_dresser_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_masterbedroom_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_masterbedroom_additionalphotos_add_btn.hide = true;

        this.controlsConfig.rooms_bedroom_bathroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom_dresser_btn.hide = true;
        this.controlsConfig.rooms_bedroom_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_bedroom_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_bedroom2_bathroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_dresser_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_bedroom3_bathroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_dresser_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_bedroom4_bathroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_dresser_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_bedroom5_bathroom_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_dresser_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_roomphotos_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_additionalphotos_btn.hide = true;

        this.controlsConfig.rooms_bedroom_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom_additionalphotos_add_btn.hide = true;
        
        this.controlsConfig.rooms_bedroom2_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom2_additionalphotos_add_btn.hide = true;
        
        this.controlsConfig.rooms_bedroom3_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom3_additionalphotos_add_btn.hide = true;

        this.controlsConfig.rooms_bedroom4_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom4_additionalphotos_add_btn.hide = true;
        
        this.controlsConfig.rooms_bedroom5_bathroom_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_dresser_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_roomphotos_add_btn.hide = true;
        this.controlsConfig.rooms_bedroom5_additionalphotos_add_btn.hide = true;
        
        this.controlsConfig.rooms_additionalphotos_add_btn.hide = true;

        this.component.backButtonEnableOrDisable(false);
    }

    rooms_tier1(){
        this.controlsConfig.rooms_control_add_btn.hide = false;
        this.controlsConfig.rooms_title.hide = false;

        this.controlsConfig.rooms_masterbedroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom_btn.hide = false;
        this.controlsConfig.rooms_additionalphotos_btn.hide = false;

        if (this.controlsConfig.rooms_bedroom2_btn.config.enabled == true) {
            this.controlsConfig.rooms_bedroom2_btn.hide = false;
        }
        if (this.controlsConfig.rooms_bedroom3_btn.config.enabled == true) {
            this.controlsConfig.rooms_bedroom3_btn.hide = false;
        }
        if (this.controlsConfig.rooms_bedroom4_btn.config.enabled == true) {
            this.controlsConfig.rooms_bedroom4_btn.hide = false;
        }
        if (this.controlsConfig.rooms_bedroom5_btn.config.enabled == true) {
            this.controlsConfig.rooms_bedroom5_btn.hide = false;
        }
    }

    rooms_masterbedroom(): void {
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_masterbedroom_title.hide = false;

        this.controlsConfig.rooms_masterbedroom_bathroom_btn.hide = false;
        this.controlsConfig.rooms_masterbedroom_dresser_btn.hide = false;
        this.controlsConfig.rooms_masterbedroom_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_bedroom(): void{
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_bedroom_title.hide = false;

        this.controlsConfig.rooms_bedroom_bathroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom_dresser_btn.hide = false;
        this.controlsConfig.rooms_bedroom_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_bedroom_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_bedroom2(): void{
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_bedroom2_title.hide = false;

        this.controlsConfig.rooms_bedroom2_bathroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom2_dresser_btn.hide = false;
        this.controlsConfig.rooms_bedroom2_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_bedroom2_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_bedroom3(): void{
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_bedroom3_title.hide = false;

        this.controlsConfig.rooms_bedroom3_bathroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom3_dresser_btn.hide = false;
        this.controlsConfig.rooms_bedroom3_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_bedroom3_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_bedroom4(): void{
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_bedroom4_title.hide = false;

        this.controlsConfig.rooms_bedroom4_bathroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom4_dresser_btn.hide = false;
        this.controlsConfig.rooms_bedroom4_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_bedroom4_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_bedroom5(): void{
        this.rooms_reset();
        this.controlsConfig.rooms_back_btn.tier = 2;
        this.controlsConfig.rooms_back_btn.hide = false;
        this.controlsConfig.rooms_bedroom5_title.hide = false;

        this.controlsConfig.rooms_bedroom5_bathroom_btn.hide = false;
        this.controlsConfig.rooms_bedroom5_dresser_btn.hide = false;
        this.controlsConfig.rooms_bedroom5_roomphotos_btn.hide = false;
        this.controlsConfig.rooms_bedroom5_additionalphotos_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    rooms_masterbedroom_bathroom(): void {
        if (this.controlsConfig.rooms_masterbedroom_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_masterbedroom_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_masterbedroom_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_masterbedroom_bathroom_title.hide = false;
            this.controlsConfig.rooms_masterbedroom_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_masterbedroom_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_masterbedroom_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_masterbedroom_bathroom_btn.config.name);
    }

    rooms_masterbedroom_dresser(): void {
        if (this.controlsConfig.rooms_masterbedroom_dresser_btn.value == '' ||
            this.controlsConfig.rooms_masterbedroom_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_masterbedroom_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_masterbedroom_dresser_title.hide = false;
            this.controlsConfig.rooms_masterbedroom_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_masterbedroom_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_masterbedroom_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_masterbedroom_dresser_btn.config.name);
    }

    rooms_masterbedroom_roomphotos(): void {
        if (this.controlsConfig.rooms_masterbedroom_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_masterbedroom_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_masterbedroom_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_masterbedroom_roomphotos_title.hide = false;
            this.controlsConfig.rooms_masterbedroom_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_masterbedroom_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_masterbedroom_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_masterbedroom_roomphotos_btn.config.name);
    }

    rooms_masterbedroom_additionalphotos(): void {
        if (this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_masterbedroom_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_masterbedroom_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_masterbedroom_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_masterbedroom_additionalphotos_btn.config.name);
    }

    rooms_bedroom_bathroom(): void {
        if (this.controlsConfig.rooms_bedroom_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_bedroom_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom_bathroom_title.hide = false;
            this.controlsConfig.rooms_bedroom_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom_bathroom_btn.config.name);
    }

    rooms_bedroom_dresser(): void {
        if (this.controlsConfig.rooms_bedroom_dresser_btn.value == '' ||
            this.controlsConfig.rooms_bedroom_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom_dresser_title.hide = false;
            this.controlsConfig.rooms_bedroom_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom_dresser_btn.config.name);
    }

    rooms_bedroom_roomphotos(): void {
        if (this.controlsConfig.rooms_bedroom_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom_roomphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom_roomphotos_btn.config.name);
    }

    rooms_bedroom_additionalphotos(): void {
        if (this.controlsConfig.rooms_bedroom_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom_additionalphotos_btn.config.name);
    }

    rooms_bedroom2_bathroom(): void {
        if (this.controlsConfig.rooms_bedroom2_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_bedroom2_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom2_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom2_bathroom_title.hide = false;
            this.controlsConfig.rooms_bedroom2_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom2_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom2_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom2_bathroom_btn.config.name);
    }

    rooms_bedroom2_dresser(): void {
        if (this.controlsConfig.rooms_bedroom2_dresser_btn.value == '' ||
            this.controlsConfig.rooms_bedroom2_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom2_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom2_dresser_title.hide = false;
            this.controlsConfig.rooms_bedroom2_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom2_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom2_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom2_dresser_btn.config.name);
    }

    rooms_bedroom2_roomphotos(): void {
        if (this.controlsConfig.rooms_bedroom2_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom2_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom2_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom2_roomphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom2_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom2_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom2_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom2_roomphotos_btn.config.name);
    }

    rooms_bedroom2_additionalphotos(): void {
        if (this.controlsConfig.rooms_bedroom2_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom2_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom2_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom2_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom2_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom2_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom2_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom2_additionalphotos_btn.config.name);
    }

    rooms_bedroom3_bathroom(): void {
        if (this.controlsConfig.rooms_bedroom3_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_bedroom3_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom3_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom3_bathroom_title.hide = false;
            this.controlsConfig.rooms_bedroom3_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom3_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom3_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom3_bathroom_btn.config.name);
    }

    rooms_bedroom3_dresser(): void {
        if (this.controlsConfig.rooms_bedroom3_dresser_btn.value == '' ||
            this.controlsConfig.rooms_bedroom3_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom3_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom3_dresser_title.hide = false;
            this.controlsConfig.rooms_bedroom3_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom3_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom3_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom3_dresser_btn.config.name);
    }

    rooms_bedroom3_roomphotos(): void {
        if (this.controlsConfig.rooms_bedroom3_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom3_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom3_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom3_roomphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom3_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom3_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom3_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom3_roomphotos_btn.config.name);
    }

    rooms_bedroom3_additionalphotos(): void {
        if (this.controlsConfig.rooms_bedroom3_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom3_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom3_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom3_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom3_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom3_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom3_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom3_additionalphotos_btn.config.name);
    }

    rooms_bedroom4_bathroom(): void {
        if (this.controlsConfig.rooms_bedroom4_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_bedroom4_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom4_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom4_bathroom_title.hide = false;
            this.controlsConfig.rooms_bedroom4_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom4_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom4_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom4_bathroom_btn.config.name);
    }

    rooms_bedroom4_dresser(): void {
        if (this.controlsConfig.rooms_bedroom4_dresser_btn.value == '' ||
            this.controlsConfig.rooms_bedroom4_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom4_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom4_dresser_title.hide = false;
            this.controlsConfig.rooms_bedroom4_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom4_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom4_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom4_dresser_btn.config.name);
    }

    rooms_bedroom4_roomphotos(): void {
        if (this.controlsConfig.rooms_bedroom4_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom4_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom4_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom4_roomphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom4_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom4_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom4_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom4_roomphotos_btn.config.name);
    }

    rooms_bedroom4_additionalphotos(): void {
        if (this.controlsConfig.rooms_bedroom4_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom4_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom4_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom4_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom4_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom4_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom4_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom4_additionalphotos_btn.config.name);
    }

    rooms_bedroom5_bathroom(): void {
        if (this.controlsConfig.rooms_bedroom5_bathroom_btn.value == '' ||
            this.controlsConfig.rooms_bedroom5_bathroom_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom5_bathroom_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom5_bathroom_title.hide = false;
            this.controlsConfig.rooms_bedroom5_bathroom_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom5_bathroom_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom5_bathroom_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom5_bathroom_btn.config.name);
    }

    rooms_bedroom5_dresser(): void {
        if (this.controlsConfig.rooms_bedroom5_dresser_btn.value == '' ||
            this.controlsConfig.rooms_bedroom5_dresser_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom5_dresser_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom5_dresser_title.hide = false;
            this.controlsConfig.rooms_bedroom5_dresser_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom5_dresser_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom5_dresser_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom5_dresser_btn.config.name);
    }

    rooms_bedroom5_roomphotos(): void {
        if (this.controlsConfig.rooms_bedroom5_roomphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom5_roomphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom5_roomphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom5_roomphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom5_roomphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom5_roomphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom5_roomphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom5_roomphotos_btn.config.name);
    }

    rooms_bedroom5_additionalphotos(): void {
        if (this.controlsConfig.rooms_bedroom5_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_bedroom5_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_bedroom5_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 3;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_bedroom5_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_bedroom5_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_bedroom5_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_bedroom5_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_bedroom5_additionalphotos_btn.config.name);
    }

    rooms_additionalphotos(): void {
        if (this.controlsConfig.rooms_additionalphotos_btn.value == '' ||
            this.controlsConfig.rooms_additionalphotos_btn.value == undefined) {
            this.btnClick(this.controlsConfig.rooms_additionalphotos_btn.config.name);
        }
        else {
            this.rooms_reset();
            this.controlsConfig.rooms_back_btn.tier = 2;
            this.controlsConfig.rooms_back_btn.hide = false;
            this.controlsConfig.rooms_additionalphotos_title.hide = false;
            this.controlsConfig.rooms_additionalphotos_add_btn.hide = false;
            this.gallerybtnClick(this.controlsConfig.rooms_additionalphotos_btn.config.name);

            this.component.backButtonEnableOrDisable(true);
        }
    }

    rooms_additionalphotos_add(): void {
        this.btnClick(this.controlsConfig.rooms_additionalphotos_btn.config.name);
    }

    base_back(): void {
        this.component.galleryReset();
        if (this.controlsConfig.base_back_btn.tier == 2) {
            this.base_reset();
            this.base_tier1();
        }

        else if (this.controlsConfig.base_back_btn.tier == 3) {
            this.controlsConfig.base_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'BaseInspection'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['base_' + element.parent.toLowerCase()]();
                }
            });
        }        
    }

    base_tier1(): void {
        this.controlsConfig.base_title.hide = false;

        this.controlsConfig.base_dwelling_btn.hide = false;
        this.controlsConfig.base_propspec_btn.hide = false;
        this.controlsConfig.base_roofline_btn.hide = false;
    }

    base_roofline_tier2(): void {
        this.controlsConfig.base_back_btn.tier = 2;
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_roofline_title.hide = false;

        this.controlsConfig.base_roofline_add_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    base_dwelling_tier2(): void {
        this.controlsConfig.base_back_btn.tier = 2;
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_dwelling_title.hide = false;

        this.controlsConfig.base_dwelling_frontview_btn.hide = false;
        this.controlsConfig.base_dwelling_backview_btn.hide = false;
        this.controlsConfig.base_dwelling_rightview_btn.hide = false;
        this.controlsConfig.base_dwelling_leftview_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    base_hazard_tier2(): void {
        this.controlsConfig.base_back_btn.tier = 2;
        this.controlsConfig.base_back_btn.hide = false;
        this.controlsConfig.base_propspec_title.hide = false;

        this.controlsConfig.base_propspec_add_btn.hide = false;
        this.controlsConfig.base_propspec_add_details.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    base_reset(): void {

        this.controlsConfig.base_back_btn.hide = true;

        this.controlsConfig.base_title.hide = true;
        this.controlsConfig.base_roofline_title.hide = true;
        this.controlsConfig.base_dwelling_title.hide = true;
        this.controlsConfig.base_propspec_title.hide = true;
        this.controlsConfig.base_dwelling_frontview_title.hide = true;
        this.controlsConfig.base_dwelling_backview_title.hide = true;
        this.controlsConfig.base_dwelling_rightview_title.hide = true;
        this.controlsConfig.base_dwelling_leftview_title.hide = true;

        this.controlsConfig.base_roofline_btn.hide = true;
        this.controlsConfig.base_dwelling_btn.hide = true;
        this.controlsConfig.base_propspec_btn.hide = true;

        this.controlsConfig.base_roofline_add_btn.hide = true;

        this.controlsConfig.base_dwelling_frontview_btn.hide = true;
        this.controlsConfig.base_dwelling_backview_btn.hide = true;
        this.controlsConfig.base_dwelling_rightview_btn.hide = true;
        this.controlsConfig.base_dwelling_leftview_btn.hide = true;

        this.controlsConfig.base_dwelling_frontview_add_btn.hide = true;
        this.controlsConfig.base_dwelling_backview_add_btn.hide = true;
        this.controlsConfig.base_dwelling_rightview_add_btn.hide = true;
        this.controlsConfig.base_dwelling_leftview_add_btn.hide = true;

        this.controlsConfig.base_propspec_add_btn.hide = true;
        this.controlsConfig.base_propspec_add_details.hide = true;

        this.component.backButtonEnableOrDisable(false);
    }

    base_roofline(): void {
        if (this.controlsConfig.base_roofline_btn.value == '' || this.controlsConfig.base_roofline_btn.value == undefined) {
            this.btnClick(this.controlsConfig.base_roofline_btn.config.name);
        }
        else {
            this.base_reset();
            this.base_roofline_tier2();
            this.gallerybtnClick(this.controlsConfig.base_roofline_btn.config.name);
        }
    }

    base_dwelling_frontview(): void {
        if (this.controlsConfig.base_dwelling_frontview_btn.value == '' || this.controlsConfig.base_dwelling_frontview_btn.value == undefined) {
            this.btnClick(this.controlsConfig.base_dwelling_frontview_btn.config.name);
        }
        else {
            this.base_reset();
            this.controlsConfig.base_back_btn.tier = 3;
            this.controlsConfig.base_back_btn.hide = false;
            this.controlsConfig.base_dwelling_frontview_title.hide = false;
        
            this.controlsConfig.base_dwelling_frontview_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.base_dwelling_frontview_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }        
    }

    base_dwelling_backview(): void {
        if (this.controlsConfig.base_dwelling_backview_btn.value == '' || this.controlsConfig.base_dwelling_backview_btn.value == undefined) {
            this.btnClick(this.controlsConfig.base_dwelling_backview_btn.config.name);
        }
        else {
            this.base_reset();
            this.controlsConfig.base_back_btn.tier = 3;
            this.controlsConfig.base_back_btn.hide = false;
            this.controlsConfig.base_dwelling_backview_title.hide = false;
        
            this.controlsConfig.base_dwelling_backview_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.base_dwelling_backview_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }        
    }

    base_dwelling_rightview(): void {
        this.controlsConfig.base_dwelling_rightview_btn.value = "Test";
        if (this.controlsConfig.base_dwelling_rightview_btn.value == '' || this.controlsConfig.base_dwelling_rightview_btn.value == undefined) {
            this.btnClick(this.controlsConfig.base_dwelling_rightview_btn.config.name);
        }
        else {
            this.base_reset();
            this.controlsConfig.base_back_btn.tier = 3;
            this.controlsConfig.base_back_btn.hide = false;
            this.controlsConfig.base_dwelling_rightview_title.hide = false;

            this.controlsConfig.base_dwelling_rightview_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.base_dwelling_rightview_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }        
    }

    base_dwelling_leftview(): void {
        if (this.controlsConfig.base_dwelling_leftview_btn.value == '' || this.controlsConfig.base_dwelling_leftview_btn.value == undefined) {
            this.btnClick(this.controlsConfig.base_dwelling_leftview_btn.config.name);
        }
        else {
            this.base_reset();
            this.controlsConfig.base_back_btn.tier = 3;
            this.controlsConfig.base_back_btn.hide = false;
            this.controlsConfig.base_dwelling_leftview_title.hide = false;

            this.controlsConfig.base_dwelling_leftview_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.base_dwelling_leftview_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }        
    }

    base_dwelling(): void {
        this.base_reset();
        this.base_dwelling_tier2();
    }

    base_propspec(): void {
        this.base_reset();
        this.base_hazard_tier2();
        if (this.controlsConfig.base_propspec_add_btn.value !== '' ||
            this.controlsConfig.base_propspec_add_btn.value !== undefined) {
            this.gallerybtnClick(this.controlsConfig.base_propspec_add_btn.config.name);
        }

        if (this.controlsConfig.base_propspec_add_details.value == '' ||
            this.controlsConfig.base_propspec_add_details.value == undefined) {
            this.controlsConfig.base_propspec_add_details.description = 'Add Comments';
        }
        else {
            this.controlsConfig.base_propspec_add_details.description = 'Edit Comments';
        }
    }

    base_propspec_add(): void {
        this.btnClick(this.controlsConfig.base_propspec_add_btn.config.name);
    }

    base_propspec_add_details(): void {
        this.component.openCommentDialog(this.controlsConfig.base_propspec_add_details.config.name);
    }

    base_roofline_add(): void {
        this.btnClick(this.controlsConfig.base_roofline_btn.config.name);
    }

    base_dwelling_frontview_add(): void {
        this.btnClick(this.controlsConfig.base_dwelling_frontview_btn.config.name);
    }

    base_dwelling_backview_add(): void {
        this.btnClick(this.controlsConfig.base_dwelling_backview_btn.config.name);
    }

    base_dwelling_rightview_add(): void {
        this.btnClick(this.controlsConfig.base_dwelling_rightview_btn.config.name);
    }

    base_dwelling_leftview_add(): void {
        this.btnClick(this.controlsConfig.base_dwelling_leftview_btn.config.name);
    }
	
	othstructures_back(): void{
		this.component.galleryReset();
        if (this.controlsConfig.othstructures_back_btn.tier == 2) {
            this.othstructures_reset();
            this.othstructures_tier1();
        }

        else if (this.controlsConfig.othstructures_back_btn.tier == 3) {
            this.controlsConfig.othstructures_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'OtherStructures'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['othstructures_' + element.parent.toLowerCase()]();
                }
            });
        }
	}
	
	othstructures_reset(): void {
		this.controlsConfig.othstructures_back_btn.hide = true;
		
		this.controlsConfig.othstructures_title.hide = true;
		this.controlsConfig.othstructures_detachedgarage_title.hide = true;
		this.controlsConfig.othstructures_barn_title.hide = true;
		this.controlsConfig.othstructures_guesthouse_title.hide = true;
		this.controlsConfig.othstructures_gazebo_title.hide = true;
		this.controlsConfig.othstructures_dock_title.hide = true;
		this.controlsConfig.othstructures_cabin_title.hide = true;
		this.controlsConfig.othstructures_fence_title.hide = true;
		this.controlsConfig.othstructures_dining_title.hide = true;
		this.controlsConfig.othstructures_other_title.hide = true;
		
		this.controlsConfig.othstructures_detachedgarage_btn.hide = true;
		this.controlsConfig.othstructures_barn_btn.hide = true;
		this.controlsConfig.othstructures_guesthouse_btn.hide = true;
		this.controlsConfig.othstructures_gazebo_btn.hide = true;
		this.controlsConfig.othstructures_dock_btn.hide = true;
		this.controlsConfig.othstructures_cabin_btn.hide = true;
		this.controlsConfig.othstructures_fence_btn.hide = true;
		this.controlsConfig.othstructures_dining_btn.hide = true;
		this.controlsConfig.othstructures_other_btn.hide = true;
		
		this.controlsConfig.othstructures_detachedgarage_add_btn.hide = true;
		this.controlsConfig.othstructures_barn_add_btn.hide = true;
		this.controlsConfig.othstructures_guesthouse_add_btn.hide = true;
		this.controlsConfig.othstructures_gazebo_add_btn.hide = true;
		this.controlsConfig.othstructures_dock_add_btn.hide = true;
		this.controlsConfig.othstructures_cabin_add_btn.hide = true;
		this.controlsConfig.othstructures_fence_add_btn.hide = true;
		this.controlsConfig.othstructures_dining_add_btn.hide = true;
		this.controlsConfig.othstructures_other_add_btn.hide = true;
	}
	
	othstructures_tier1(): void{
		this.controlsConfig.othstructures_title.hide = false;
		
		this.controlsConfig.othstructures_detachedgarage_btn.hide = false;
		this.controlsConfig.othstructures_barn_btn.hide = false;
		this.controlsConfig.othstructures_guesthouse_btn.hide = false;
		this.controlsConfig.othstructures_gazebo_btn.hide = false;
		this.controlsConfig.othstructures_dock_btn.hide = false;
		this.controlsConfig.othstructures_cabin_btn.hide = false;
		this.controlsConfig.othstructures_fence_btn.hide = false;
		this.controlsConfig.othstructures_dining_btn.hide = false;
		this.controlsConfig.othstructures_other_btn.hide = false;
	}
	
	othstructures_detachedgarage(): void {
        if (this.controlsConfig.othstructures_detachedgarage_btn.value == '' || 
			this.controlsConfig.othstructures_detachedgarage_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_detachedgarage_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_detachedgarage_title.hide = false;
			this.controlsConfig.othstructures_detachedgarage_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_detachedgarage_btn.config.name);
        }
    }

    othstructures_detachedgarage_add(): void {
        this.btnClick(this.controlsConfig.othstructures_detachedgarage_btn.config.name);
    }
	
	othstructures_barn(): void {
        if (this.controlsConfig.othstructures_barn_btn.value == '' || 
			this.controlsConfig.othstructures_barn_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_barn_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_barn_title.hide = false;
			this.controlsConfig.othstructures_barn_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_barn_btn.config.name);
        }
    }

    othstructures_barn_add(): void {
        this.btnClick(this.controlsConfig.othstructures_barn_btn.config.name);
    }
	
	
	othstructures_guesthouse(): void {
        if (this.controlsConfig.othstructures_guesthouse_btn.value == '' || 
			this.controlsConfig.othstructures_guesthouse_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_guesthouse_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_guesthouse_title.hide = false;
			this.controlsConfig.othstructures_guesthouse_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_guesthouse_btn.config.name);
        }
    }

    othstructures_guesthouse_add(): void {
        this.btnClick(this.controlsConfig.othstructures_guesthouse_btn.config.name);
    }
	
	othstructures_gazebo(): void {
        if (this.controlsConfig.othstructures_gazebo_btn.value == '' || 
			this.controlsConfig.othstructures_gazebo_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_gazebo_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_gazebo_title.hide = false;
			this.controlsConfig.othstructures_gazebo_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_gazebo_btn.config.name);
        }
    }

    othstructures_gazebo_add(): void {
        this.btnClick(this.controlsConfig.othstructures_gazebo_btn.config.name);
    }
	
	othstructures_dock(): void {
        if (this.controlsConfig.othstructures_dock_btn.value == '' || 
			this.controlsConfig.othstructures_dock_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_dock_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_dock_title.hide = false;
			this.controlsConfig.othstructures_dock_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_dock_btn.config.name);
        }
    }

    othstructures_dock_add(): void {
        this.btnClick(this.controlsConfig.othstructures_dock_btn.config.name);
    }
	
	othstructures_cabin(): void {
        if (this.controlsConfig.othstructures_cabin_btn.value == '' || 
			this.controlsConfig.othstructures_cabin_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_cabin_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_cabin_title.hide = false;
			this.controlsConfig.othstructures_cabin_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_cabin_btn.config.name);
        }
    }

    othstructures_cabin_add(): void {
        this.btnClick(this.controlsConfig.othstructures_cabin_btn.config.name);
    }
	
	othstructures_fence(): void {
        if (this.controlsConfig.othstructures_fence_btn.value == '' || 
			this.controlsConfig.othstructures_fence_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_fence_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_fence_title.hide = false;
			this.controlsConfig.othstructures_fence_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_fence_btn.config.name);
        }
    }

    othstructures_fence_add(): void {
        this.btnClick(this.controlsConfig.othstructures_fence_btn.config.name);
    }

	othstructures_dining(): void {
        if (this.controlsConfig.othstructures_dining_btn.value == '' || 
			this.controlsConfig.othstructures_dining_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_dining_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_dining_title.hide = false;
			this.controlsConfig.othstructures_dining_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_dining_btn.config.name);
        }
    }

    othstructures_dining_add(): void {
        this.btnClick(this.controlsConfig.othstructures_dining_btn.config.name);
    }
	
	othstructures_other(): void {
        if (this.controlsConfig.othstructures_other_btn.value == '' || 
			this.controlsConfig.othstructures_other_btn.value == undefined) {
            this.btnClick(this.controlsConfig.othstructures_other_btn.config.name);
        }
        else {
            this.othstructures_reset();
		
            this.controlsConfig.othstructures_back_btn.tier = 2;
			this.controlsConfig.othstructures_back_btn.hide = false;
			this.controlsConfig.othstructures_other_title.hide = false;
			this.controlsConfig.othstructures_other_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.othstructures_other_btn.config.name);
        }
    }

    othstructures_other_add(): void {
        this.btnClick(this.controlsConfig.othstructures_other_btn.config.name);
    }
	
	detexterior_back(): void {
        this.component.galleryReset();
        if (this.controlsConfig.detexterior_back_btn.tier == 2) {
            this.detexterior_reset();
            this.detexterior_tier1();
        }

        else if (this.controlsConfig.detexterior_back_btn.tier == 3) {
            this.controlsConfig.detexterior_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'DetailedExterior'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['detexterior_' + element.parent.toLowerCase()]();
                }
            });
        }        
    }
	
	detexterior_reset(): void {
		this.controlsConfig.detexterior_back_btn.hide = true;
		
		this.controlsConfig.detexterior_title.hide = true;
		this.controlsConfig.detexterior_driveway_title.hide = true;
		this.controlsConfig.detexterior_foundation_title.hide = true;
		this.controlsConfig.detexterior_sidewalks_title.hide = true;
		this.controlsConfig.detexterior_porches_title.hide = true;
		this.controlsConfig.detexterior_stairs_title.hide = true;
		this.controlsConfig.detexterior_trees_title.hide = true;
		this.controlsConfig.detexterior_chimney_title.hide = true;
		this.controlsConfig.detexterior_fence_title.hide = true;
		this.controlsConfig.detexterior_siding_title.hide = true;
		this.controlsConfig.detexterior_gutters_title.hide = true;
		this.controlsConfig.detexterior_yard_title.hide = true;
		
		this.controlsConfig.detexterior_driveway_btn.hide = true;
		this.controlsConfig.detexterior_foundation_btn.hide = true;
		this.controlsConfig.detexterior_sidewalks_btn.hide = true;
		this.controlsConfig.detexterior_porches_btn.hide = true;
		this.controlsConfig.detexterior_stairs_btn.hide = true;
		this.controlsConfig.detexterior_trees_btn.hide = true;
		this.controlsConfig.detexterior_chimney_btn.hide = true;
		this.controlsConfig.detexterior_fence_btn.hide = true;
		this.controlsConfig.detexterior_siding_btn.hide = true;
		this.controlsConfig.detexterior_gutters_btn.hide = true;
		this.controlsConfig.detexterior_yard_btn.hide = true;
		
		this.controlsConfig.detexterior_driveway_add_btn.hide = true;
		this.controlsConfig.detexterior_foundation_add_btn.hide = true;
		this.controlsConfig.detexterior_sidewalks_add_btn.hide = true;
		this.controlsConfig.detexterior_porches_add_btn.hide = true;
		this.controlsConfig.detexterior_stairs_add_btn.hide = true;
		this.controlsConfig.detexterior_trees_add_btn.hide = true;
		this.controlsConfig.detexterior_chimney_add_btn.hide = true;
		this.controlsConfig.detexterior_fence_add_btn.hide = true;
		this.controlsConfig.detexterior_siding_add_btn.hide = true;
		this.controlsConfig.detexterior_gutters_add_btn.hide = true;
		this.controlsConfig.detexterior_yard_add_btn.hide = true;
	}
	
	detexterior_tier1(): void {
		this.controlsConfig.detexterior_title.hide = false;
		this.controlsConfig.detexterior_driveway_btn.hide = false;
		this.controlsConfig.detexterior_foundation_btn.hide = false;
		this.controlsConfig.detexterior_sidewalks_btn.hide = false;
		this.controlsConfig.detexterior_porches_btn.hide = false;
		this.controlsConfig.detexterior_stairs_btn.hide = false;
		this.controlsConfig.detexterior_trees_btn.hide = false;
		this.controlsConfig.detexterior_chimney_btn.hide = false;
		this.controlsConfig.detexterior_fence_btn.hide = false;
		this.controlsConfig.detexterior_siding_btn.hide = false;
		this.controlsConfig.detexterior_gutters_btn.hide = false;
		this.controlsConfig.detexterior_yard_btn.hide = false;
	}
	
	detexterior_driveway(): void {
        if (this.controlsConfig.detexterior_driveway_btn.value == '' || 
			this.controlsConfig.detexterior_driveway_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_driveway_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_driveway_title.hide = false;
			this.controlsConfig.detexterior_driveway_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_driveway_btn.config.name);
        }
    }

    detexterior_driveway_add(): void {
        this.btnClick(this.controlsConfig.detexterior_driveway_btn.config.name);
    }
	
	detexterior_foundation(): void {
        if (this.controlsConfig.detexterior_foundation_btn.value == '' || 
			this.controlsConfig.detexterior_foundation_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_foundation_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_foundation_title.hide = false;
			this.controlsConfig.detexterior_foundation_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_foundation_btn.config.name);
        }
    }

    detexterior_foundation_add(): void {
        this.btnClick(this.controlsConfig.detexterior_foundation_btn.config.name);
    }
	
	detexterior_sidewalks(): void {
        if (this.controlsConfig.detexterior_sidewalks_btn.value == '' || 
			this.controlsConfig.detexterior_sidewalks_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_sidewalks_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_sidewalks_title.hide = false;
			this.controlsConfig.detexterior_sidewalks_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_sidewalks_btn.config.name);
        }
    }

    detexterior_sidewalks_add(): void {
        this.btnClick(this.controlsConfig.detexterior_sidewalks_btn.config.name);
    }
	
	detexterior_porches(): void {
        if (this.controlsConfig.detexterior_porches_btn.value == '' || 
			this.controlsConfig.detexterior_porches_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_porches_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_porches_title.hide = false;
			this.controlsConfig.detexterior_porches_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_porches_btn.config.name);
        }
    }

    detexterior_porches_add(): void {
        this.btnClick(this.controlsConfig.detexterior_porches_btn.config.name);
    }
	
	detexterior_stairs(): void {
        if (this.controlsConfig.detexterior_stairs_btn.value == '' || 
			this.controlsConfig.detexterior_stairs_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_stairs_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_stairs_title.hide = false;
			this.controlsConfig.detexterior_stairs_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_stairs_btn.config.name);
        }
    }

    detexterior_stairs_add(): void {
        this.btnClick(this.controlsConfig.detexterior_stairs_btn.config.name);
    }
	
	detexterior_trees(): void {
        if (this.controlsConfig.detexterior_trees_btn.value == '' || 
			this.controlsConfig.detexterior_trees_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_trees_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_trees_title.hide = false;
			this.controlsConfig.detexterior_trees_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_trees_btn.config.name);
        }
    }

    detexterior_trees_add(): void {
        this.btnClick(this.controlsConfig.detexterior_trees_btn.config.name);
    }
	
	detexterior_chimney(): void {
        if (this.controlsConfig.detexterior_chimney_btn.value == '' || 
			this.controlsConfig.detexterior_chimney_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_chimney_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_chimney_title.hide = false;
			this.controlsConfig.detexterior_chimney_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_chimney_btn.config.name);
        }
    }

    detexterior_chimney_add(): void {
        this.btnClick(this.controlsConfig.detexterior_chimney_btn.config.name);
    }
	
	detexterior_fence(): void {
        if (this.controlsConfig.detexterior_fence_btn.value == '' || 
			this.controlsConfig.detexterior_fence_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_fence_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_fence_title.hide = false;
			this.controlsConfig.detexterior_fence_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_fence_btn.config.name);
        }
    }

    detexterior_fence_add(): void {
        this.btnClick(this.controlsConfig.detexterior_fence_btn.config.name);
    }
	
	detexterior_siding(): void {
        if (this.controlsConfig.detexterior_siding_btn.value == '' || 
			this.controlsConfig.detexterior_siding_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_siding_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_siding_title.hide = false;
			this.controlsConfig.detexterior_siding_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_siding_btn.config.name);
        }
    }

    detexterior_siding_add(): void {
        this.btnClick(this.controlsConfig.detexterior_siding_btn.config.name);
    }
	
	detexterior_gutters(): void {
        if (this.controlsConfig.detexterior_gutters_btn.value == '' || 
			this.controlsConfig.detexterior_gutters_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_gutters_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_gutters_title.hide = false;
			this.controlsConfig.detexterior_gutters_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_gutters_btn.config.name);
        }
    }

    detexterior_gutters_add(): void {
        this.btnClick(this.controlsConfig.detexterior_gutters_btn.config.name);
    }
	
	detexterior_yard(): void {
        if (this.controlsConfig.detexterior_yard_btn.value == '' || 
			this.controlsConfig.detexterior_yard_btn.value == undefined) {
            this.btnClick(this.controlsConfig.detexterior_yard_btn.config.name);
        }
        else {
            this.detexterior_reset();
		
            this.controlsConfig.detexterior_back_btn.tier = 2;
			this.controlsConfig.detexterior_back_btn.hide = false;
			this.controlsConfig.detexterior_yard_title.hide = false;
			this.controlsConfig.detexterior_yard_add_btn.hide = false;
	
			this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.detexterior_yard_btn.config.name);
        }
    }

    detexterior_yard_add(): void {
        this.btnClick(this.controlsConfig.detexterior_yard_btn.config.name);
    }
	
	
    plumbing_back(): void {
        this.component.galleryReset();
        if (this.controlsConfig.plumbing_back_btn.tier == 2) {
            this.controlsConfig.plumbing_back_btn.tier = 1;
            this.plumbing_reset();
            this.plumbing_tier1();
        }
        else if (this.controlsConfig.plumbing_back_btn.tier == 3) {
            this.controlsConfig.plumbing_back_btn.tier = 2;

            const zoneIndex = this.component._tempDynamicFormConfig.serverDataKeys.findIndex(elemn => this.component._tempDynamicFormConfig.serverData[elemn][0].data.some((ele) => ele.controlName == 'Plumbing'));
            // this.component.serverData.findIndex((ele1) => ele1.data.some((ele) => ele.controlName == 'Plumbing'));

            this.component._tempDynamicFormConfig.serverData[this.component._tempDynamicFormConfig.serverDataKeys[zoneIndex]][0].data.forEach(element => {
                if (this.controlsConfig[element.name].hide == false &&
                    this.controlsConfig[element.name].config.parent !== '' &&
                    this.controlsConfig[element.name].config.type == 'button') {
                    this['plumbing_' + element.parent.toLowerCase()]();
                }
            });
        }
    }

    plumbing_tier1(): void {
        this.controlsConfig.plumbing_title.hide = false;
        this.controlsConfig.plumbing_control_add_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_btn.hide = false;
        if (this.controlsConfig.plumbing_kitchen2_btn.config.enabled == true) {
            this.controlsConfig.plumbing_kitchen2_btn.hide = false;
            // this.controlsConfig.plumbing_kitchen2_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen3_btn.config.enabled == true) {
            this.controlsConfig.plumbing_kitchen3_btn.hide = false;
            // this.controlsConfig.plumbing_kitchen3_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen4_btn.config.enabled == true) {
            this.controlsConfig.plumbing_kitchen4_btn.hide = false;
            // this.controlsConfig.plumbing_kitchen4_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_kitchen5_btn.config.enabled == true) {
            this.controlsConfig.plumbing_kitchen5_btn.hide = false;
            // this.controlsConfig.plumbing_kitchen5_edit_btn.hide = false;
        }

        this.controlsConfig.plumbing_bathroom_btn.hide = false;
        if (this.controlsConfig.plumbing_bathroom2_btn.config.enabled == true) {
            this.controlsConfig.plumbing_bathroom2_btn.hide = false;
            // this.controlsConfig.plumbing_bathroom2_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom3_btn.config.enabled == true) {
            this.controlsConfig.plumbing_bathroom3_btn.hide = false;
            // this.controlsConfig.plumbing_bathroom3_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom4_btn.config.enabled == true) {
            this.controlsConfig.plumbing_bathroom4_btn.hide = false;
            // this.controlsConfig.plumbing_bathroom4_edit_btn.hide = false;
        }
        if (this.controlsConfig.plumbing_bathroom5_btn.config.enabled == true) {
            this.controlsConfig.plumbing_bathroom5_btn.hide = false;
            // this.controlsConfig.plumbing_bathroom5_edit_btn.hide = false;
        }

        this.controlsConfig.plumbing_wmhose_btn.hide = false;
        this.controlsConfig.plumbing_heater_btn.hide = false;
        this.controlsConfig.plumbing_activeleaks_btn.hide = false;
        this.controlsConfig.plumbing_priorleaks_btn.hide = false;
        this.controlsConfig.plumbing_dishwasher_btn.hide = false;
        this.controlsConfig.plumbing_addComments_btn.hide = false;
    }

    plumbing_reset(): void {
        this.controlsConfig.plumbing_back_btn.hide = true;

        this.controlsConfig.plumbing_title.hide = true;
        this.controlsConfig.plumbing_kitchen_title.hide = true;
        this.controlsConfig.plumbing_bathroom_title.hide = true;
        this.controlsConfig.plumbing_heater_title.hide = true;
        this.controlsConfig.plumbing_dishwasher_title.hide = true;
        this.controlsConfig.plumbing_activeleaks_title.hide = true;
        this.controlsConfig.plumbing_priorleaks_title.hide = true;
        this.controlsConfig.plumbing_kitchen_sink_title.hide = true;
        this.controlsConfig.plumbing_bathroom_sink_title.hide = true;
        this.controlsConfig.plumbing_bathroom_bathtub_title.hide = true;
        this.controlsConfig.plumbing_bathroom_supplyline_title.hide = true;
        this.controlsConfig.plumbing_wmhose_title.hide = true;

        this.controlsConfig.plumbing_control_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen2_btn.hide = true;
        this.controlsConfig.plumbing_kitchen2_edit_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink2_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink2_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen3_btn.hide = true;
        this.controlsConfig.plumbing_kitchen3_edit_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink3_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink3_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen4_btn.hide = true;
        this.controlsConfig.plumbing_kitchen4_edit_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink4_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink4_add_btn.hide = true;

        this.controlsConfig.plumbing_kitchen5_btn.hide = true;
        this.controlsConfig.plumbing_kitchen5_edit_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink5_btn.hide = true;
        this.controlsConfig.plumbing_kitchensink5_add_btn.hide = true;

        this.controlsConfig.plumbing_bathroom_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink_add_btn.hide = true;
        this.controlsConfig.plumbing_bathtub_btn.hide = true;
        this.controlsConfig.plumbing_bathtub_add_btn.hide = true;
        this.controlsConfig.plumbing_supplyline_btn.hide = true;
        this.controlsConfig.plumbing_supplyline_add_btn.hide = true;

        this.controlsConfig.plumbing_bathroom2_btn.hide = true;
        this.controlsConfig.plumbing_bathroom2_edit_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink2_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink2_add_btn.hide = true;
        this.controlsConfig.plumbing_bathtub2_btn.hide = true;
        this.controlsConfig.plumbing_bathtub2_add_btn.hide = true;
        this.controlsConfig.plumbing_supplyline2_btn.hide = true;
        this.controlsConfig.plumbing_supplyline2_add_btn.hide = true;

        this.controlsConfig.plumbing_bathroom3_btn.hide = true;
        this.controlsConfig.plumbing_bathroom3_edit_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink3_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink3_add_btn.hide = true;
        this.controlsConfig.plumbing_bathtub3_btn.hide = true;
        this.controlsConfig.plumbing_bathtub3_add_btn.hide = true;
        this.controlsConfig.plumbing_supplyline3_btn.hide = true;
        this.controlsConfig.plumbing_supplyline3_add_btn.hide = true;

        this.controlsConfig.plumbing_bathroom4_btn.hide = true;
        this.controlsConfig.plumbing_bathroom4_edit_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink4_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink4_add_btn.hide = true;
        this.controlsConfig.plumbing_bathtub4_btn.hide = true;
        this.controlsConfig.plumbing_bathtub4_add_btn.hide = true;
        this.controlsConfig.plumbing_supplyline4_btn.hide = true;
        this.controlsConfig.plumbing_supplyline4_add_btn.hide = true;

        this.controlsConfig.plumbing_bathroom5_btn.hide = true;
        this.controlsConfig.plumbing_bathroom5_edit_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink5_btn.hide = true;
        this.controlsConfig.plumbing_bathroomsink5_add_btn.hide = true;
        this.controlsConfig.plumbing_bathtub5_btn.hide = true;
        this.controlsConfig.plumbing_bathtub5_add_btn.hide = true;
        this.controlsConfig.plumbing_supplyline5_btn.hide = true;
        this.controlsConfig.plumbing_supplyline5_add_btn.hide = true;

        this.controlsConfig.plumbing_heater_btn.hide = true;
        this.controlsConfig.plumbing_heater_add_btn.hide = true;

        this.controlsConfig.plumbing_dishwasher_btn.hide = true;
        this.controlsConfig.plumbing_dishwasher_add_btn.hide = true;
        this.controlsConfig.plumbing_dishwasher_comments_btn.hide = true;

        this.controlsConfig.plumbing_activeleaks_btn.hide = true;
        this.controlsConfig.plumbing_activeleaks_add_btn.hide = true;
        this.controlsConfig.plumbing_activeleaks_comments_btn.hide = true;

        this.controlsConfig.plumbing_priorleaks_btn.hide = true;
        this.controlsConfig.plumbing_priorleaks_add_btn.hide = true;
        this.controlsConfig.plumbing_priorleaks_comments_btn.hide = true;

        this.controlsConfig.plumbing_wmhose_btn.hide = true;
        this.controlsConfig.plumbing_wmhose_add_btn.hide = true;
        this.controlsConfig.plumbing_addComments_btn.hide = true;

        this.component.backButtonEnableOrDisable(false);
    }

    plumbing_kitchen(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_kitchen2(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink2_btn.hide = false;

        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_kitchen3(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink3_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_kitchen4(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink4_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_kitchen5(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_kitchen_title.hide = false;
        this.controlsConfig.plumbing_kitchensink5_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_bathroom(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink_btn.hide = false;
        this.controlsConfig.plumbing_bathtub_btn.hide = false;
        this.controlsConfig.plumbing_supplyline_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_bathroom2(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink2_btn.hide = false;
        this.controlsConfig.plumbing_bathtub2_btn.hide = false;
        this.controlsConfig.plumbing_supplyline2_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_bathroom3(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink3_btn.hide = false;
        this.controlsConfig.plumbing_bathtub3_btn.hide = false;
        this.controlsConfig.plumbing_supplyline3_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_bathroom4(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink4_btn.hide = false;
        this.controlsConfig.plumbing_bathtub4_btn.hide = false;
        this.controlsConfig.plumbing_supplyline4_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_bathroom5(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_bathroom_title.hide = false;
        this.controlsConfig.plumbing_bathroomsink5_btn.hide = false;
        this.controlsConfig.plumbing_bathtub5_btn.hide = false;
        this.controlsConfig.plumbing_supplyline5_btn.hide = false;
        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_heater(): void {
        if (this.controlsConfig.plumbing_heater_btn.value == '' || this.controlsConfig.plumbing_heater_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_heater_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 2;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_heater_title.hide = false;
            this.controlsConfig.plumbing_heater_add_btn.hide = false;

            if (this.controlsConfig.plumbing_heater_btn.value !== '' ||
                this.controlsConfig.plumbing_heater_btn.value !== undefined) {
                this.gallerybtnClick(this.controlsConfig.plumbing_heater_btn.config.name);
            }

            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_heater_add(): void {
        this.btnClick(this.controlsConfig.plumbing_heater_btn.config.name);
    }

    plumbing_dishwasher(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_dishwasher_title.hide = false;
        this.controlsConfig.plumbing_dishwasher_add_btn.hide = false;
        this.controlsConfig.plumbing_dishwasher_comments_btn.hide = false;

        if (this.controlsConfig.plumbing_dishwasher_add_btn.value !== '' ||
            this.controlsConfig.plumbing_dishwasher_add_btn.value !== undefined) {
            this.gallerybtnClick(this.controlsConfig.plumbing_dishwasher_add_btn.config.name);
        }

        if (this.controlsConfig.plumbing_dishwasher_comments_btn.value == '' ||
            this.controlsConfig.plumbing_dishwasher_comments_btn.value == undefined) {
            this.controlsConfig.plumbing_dishwasher_comments_btn.description = 'Add Comments';
        }
        else {
            this.controlsConfig.plumbing_dishwasher_comments_btn.description = 'Edit Comments';
        }

        this.component.backButtonEnableOrDisable(true);
    }

    plumbing_dishwasher_add(): void {
        this.btnClick(this.controlsConfig.plumbing_dishwasher_add_btn.config.name);
    }

    plumbing_dishwasher_comments(): void {
        this.component.openCommentDialog(this.controlsConfig.plumbing_dishwasher_comments_btn.config.name);
    }

    plumbing_activeleaks(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_activeleaks_title.hide = false;
        this.controlsConfig.plumbing_activeleaks_add_btn.hide = false;
        this.controlsConfig.plumbing_activeleaks_comments_btn.hide = false;

        if (this.controlsConfig.plumbing_activeleaks_add_btn.value !== '' ||
            this.controlsConfig.plumbing_activeleaks_add_btn.value !== undefined) {
            this.gallerybtnClick(this.controlsConfig.plumbing_activeleaks_add_btn.config.name);
        }

        if (this.controlsConfig.plumbing_activeleaks_comments_btn.value == '' ||
            this.controlsConfig.plumbing_activeleaks_comments_btn.value == undefined) {
            this.controlsConfig.plumbing_activeleaks_comments_btn.description = 'Add Comments';
        }
        else {
            this.controlsConfig.plumbing_activeleaks_comments_btn.description = 'Edit Comments';
        }

        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_activeleaks_add(): void {
        this.btnClick(this.controlsConfig.plumbing_activeleaks_add_btn.config.name);
    }

    plumbing_activeleaks_comments(): void {
        this.component.openCommentDialog(this.controlsConfig.plumbing_activeleaks_comments_btn.config.name);
    }


    plumbing_priorleaks(): void {
        this.plumbing_reset();

        this.controlsConfig.plumbing_back_btn.tier = 2;
        this.controlsConfig.plumbing_back_btn.hide = false;

        this.controlsConfig.plumbing_priorleaks_title.hide = false;
        this.controlsConfig.plumbing_priorleaks_add_btn.hide = false;
        this.controlsConfig.plumbing_priorleaks_comments_btn.hide = false;

        if (this.controlsConfig.plumbing_priorleaks_add_btn.value !== '' ||
            this.controlsConfig.plumbing_priorleaks_add_btn.value !== undefined) {
            this.gallerybtnClick(this.controlsConfig.plumbing_priorleaks_add_btn.config.name);
        }

        if (this.controlsConfig.plumbing_priorleaks_comments_btn.value == '' ||
            this.controlsConfig.plumbing_priorleaks_comments_btn.value == undefined) {
            this.controlsConfig.plumbing_priorleaks_comments_btn.description = 'Add Comments';
        }
        else {
            this.controlsConfig.plumbing_priorleaks_comments_btn.description = 'Edit Comments';
        }
        this.component.backButtonEnableOrDisable(true);

    }

    plumbing_priorleaks_add(): void {
        this.btnClick(this.controlsConfig.plumbing_priorleaks_add_btn.config.name);
    }

    plumbing_priorleaks_comments(): void {
        this.component.openCommentDialog(this.controlsConfig.plumbing_priorleaks_comments_btn.config.name);
    }

    plumbing_wmhose(): void {
        if (this.controlsConfig.plumbing_wmhose_btn.value == '' ||
            this.controlsConfig.plumbing_wmhose_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_wmhose_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_wmhose_title.hide = false;
            this.controlsConfig.plumbing_wmhose_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_wmhose_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_wmhose_add(): void {
        this.btnClick(this.controlsConfig.plumbing_wmhose_btn.config.name);
    }

    plumbing_addComments(): void {
        this.component.openCommentDialog(this.controlsConfig.plumbing_addComments_btn.config.name);
    }

    plumbing_bathroomsink(): void {
        // this.controlsConfig.plumbing_bathroomsink_btn.value = 'Test';
        if (this.controlsConfig.plumbing_bathroomsink_btn.value == '' ||
            this.controlsConfig.plumbing_bathroomsink_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathroomsink_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_sink_title.hide = false;
            this.controlsConfig.plumbing_bathroomsink_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathroomsink_btn.config.name);

            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_bathroomsink_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink_btn.config.name);
    }

    plumbing_bathroomsink2(): void {
        // this.controlsConfig.plumbing_bathroomsink2_btn.value = 'Test';
        if (this.controlsConfig.plumbing_bathroomsink2_btn.value == '' ||
            this.controlsConfig.plumbing_bathroomsink2_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathroomsink2_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_sink_title.hide = false;
            this.controlsConfig.plumbing_bathroomsink2_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathroomsink2_btn.config.name);
            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_bathroomsink2_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink2_btn.config.name);
    }

    plumbing_bathroomsink3(): void {
        // this.controlsConfig.plumbing_bathroomsink3_btn.value = 'Test';
        if (this.controlsConfig.plumbing_bathroomsink3_btn.value == '' ||
            this.controlsConfig.plumbing_bathroomsink3_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathroomsink3_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_sink_title.hide = false;
            this.controlsConfig.plumbing_bathroomsink3_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathroomsink3_btn.config.name);
            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_bathroomsink3_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink3_btn.config.name);
    }

    plumbing_bathroomsink4(): void {
        // this.controlsConfig.plumbing_bathroomsink4_btn.value = 'Test';
        if (this.controlsConfig.plumbing_bathroomsink4_btn.value == '' ||
            this.controlsConfig.plumbing_bathroomsink4_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathroomsink4_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_sink_title.hide = false;
            this.controlsConfig.plumbing_bathroomsink4_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathroomsink4_btn.config.name);
            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_bathroomsink4_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink4_btn.config.name);
    }

    plumbing_bathroomsink5(): void {
        // this.controlsConfig.plumbing_bathroomsink5_btn.value = 'Test';
        if (this.controlsConfig.plumbing_bathroomsink5_btn.value == '' ||
            this.controlsConfig.plumbing_bathroomsink5_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathroomsink5_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_sink_title.hide = false;
            this.controlsConfig.plumbing_bathroomsink5_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathroomsink5_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathroomsink5_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathroomsink5_btn.config.name);
    }

    plumbing_bathtub(): void {
        if (this.controlsConfig.plumbing_bathtub_btn.value == '' ||
            this.controlsConfig.plumbing_bathtub_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathtub_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_bathtub_title.hide = false;
            this.controlsConfig.plumbing_bathtub_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathtub_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathtub_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub_btn.config.name);
    }

    plumbing_bathtub2(): void {
        if (this.controlsConfig.plumbing_bathtub2_btn.value == '' ||
            this.controlsConfig.plumbing_bathtub2_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathtub2_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_bathtub_title.hide = false;
            this.controlsConfig.plumbing_bathtub2_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathtub2_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathtub2_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub2_btn.config.name);
    }

    plumbing_bathtub3(): void {
        if (this.controlsConfig.plumbing_bathtub3_btn.value == '' ||
            this.controlsConfig.plumbing_bathtub3_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathtub3_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_bathtub_title.hide = false;
            this.controlsConfig.plumbing_bathtub3_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathtub3_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathtub3_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub3_btn.config.name);
    }

    plumbing_bathtub4(): void {
        if (this.controlsConfig.plumbing_bathtub4_btn.value == '' ||
            this.controlsConfig.plumbing_bathtub4_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathtub4_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_bathtub_title.hide = false;
            this.controlsConfig.plumbing_bathtub4_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathtub4_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathtub4_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub4_btn.config.name);
    }

    plumbing_bathtub5(): void {
        if (this.controlsConfig.plumbing_bathtub5_btn.value == '' ||
            this.controlsConfig.plumbing_bathtub5_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_bathtub5_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_bathtub_title.hide = false;
            this.controlsConfig.plumbing_bathtub5_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_bathtub5_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_bathtub5_add(): void {
        this.btnClick(this.controlsConfig.plumbing_bathtub5_btn.config.name);
    }

    plumbing_supplyline(): void {
        if (this.controlsConfig.plumbing_supplyline_btn.value == '' ||
            this.controlsConfig.plumbing_supplyline_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_supplyline_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_supplyline_title.hide = false;
            this.controlsConfig.plumbing_supplyline_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_supplyline_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_supplyline_add(): void {
        this.btnClick(this.controlsConfig.plumbing_supplyline_btn.config.name);
    }

    plumbing_supplyline2(): void {
        if (this.controlsConfig.plumbing_supplyline2_btn.value == '' ||
            this.controlsConfig.plumbing_supplyline2_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_supplyline2_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_supplyline_title.hide = false;
            this.controlsConfig.plumbing_supplyline2_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_supplyline2_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_supplyline2_add(): void {
        this.btnClick(this.controlsConfig.plumbing_supplyline2_btn.config.name);
    }

    plumbing_supplyline3(): void {
        if (this.controlsConfig.plumbing_supplyline3_btn.value == '' ||
            this.controlsConfig.plumbing_supplyline3_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_supplyline3_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_supplyline_title.hide = false;
            this.controlsConfig.plumbing_supplyline3_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_supplyline3_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_supplyline3_add(): void {
        this.btnClick(this.controlsConfig.plumbing_supplyline3_btn.config.name);
    }

    plumbing_supplyline4(): void {
        if (this.controlsConfig.plumbing_supplyline4_btn.value == '' ||
            this.controlsConfig.plumbing_supplyline4_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_supplyline4_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_supplyline_title.hide = false;
            this.controlsConfig.plumbing_supplyline4_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_supplyline4_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_supplyline4_add(): void {
        this.btnClick(this.controlsConfig.plumbing_supplyline4_btn.config.name);
    }

    plumbing_supplyline5(): void {
        if (this.controlsConfig.plumbing_supplyline5_btn.value == '' ||
            this.controlsConfig.plumbing_supplyline5_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_supplyline5_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_bathroom_supplyline_title.hide = false;
            this.controlsConfig.plumbing_supplyline5_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_supplyline5_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_supplyline5_add(): void {
        this.btnClick(this.controlsConfig.plumbing_supplyline5_btn.config.name);
    }

    plumbing_kitchensink(): void {
        // this.controlsConfig.plumbing_kitchensink_btn.value = 'Test';
        if (this.controlsConfig.plumbing_kitchensink_btn.value == '' || this.controlsConfig.plumbing_kitchensink_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_kitchensink_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_kitchen_sink_title.hide = false;
            this.controlsConfig.plumbing_kitchensink_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_kitchensink_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_kitchensink_add(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink_btn.config.name);
    }

    plumbing_kitchensink2(): void {
        // this.controlsConfig.plumbing_kitchensink2_btn.value = 'Test';
        if (this.controlsConfig.plumbing_kitchensink2_btn.value == '' ||
            this.controlsConfig.plumbing_kitchensink2_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_kitchensink2_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_kitchen_sink_title.hide = false;
            this.controlsConfig.plumbing_kitchensink2_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_kitchensink2_btn.config.name);
            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_kitchensink2_add(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink2_btn.config.name);
    }

    plumbing_kitchensink3(): void {
        // this.controlsConfig.plumbing_kitchensink3_btn.value = 'Test';
        if (this.controlsConfig.plumbing_kitchensink3_btn.value == '' ||
            this.controlsConfig.plumbing_kitchensink3_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_kitchensink3_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_kitchen_sink_title.hide = false;
            this.controlsConfig.plumbing_kitchensink3_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_kitchensink3_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_kitchensink3_add(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink3_btn.config.name);
    }

    plumbing_kitchensink4(): void {
        // this.controlsConfig.plumbing_kitchensink4_btn.value = 'Test';
        if (this.controlsConfig.plumbing_kitchensink4_btn.value == '' ||
            this.controlsConfig.plumbing_kitchensink4_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_kitchensink4_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_kitchen_sink_title.hide = false;
            this.controlsConfig.plumbing_kitchensink4_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_kitchensink4_btn.config.name);
            this.component.backButtonEnableOrDisable(true);
        }
    }

    plumbing_kitchensink4_add(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink4_btn.config.name);
    }

    plumbing_kitchensink5(): void {
        // this.controlsConfig.plumbing_kitchensink5_btn.value = 'Test';
        if (this.controlsConfig.plumbing_kitchensink5_btn.value == '' ||
            this.controlsConfig.plumbing_kitchensink5_btn.value == undefined) {
            this.btnClick(this.controlsConfig.plumbing_kitchensink5_btn.config.name);
        }
        else {
            this.plumbing_reset();

            this.controlsConfig.plumbing_back_btn.tier = 3;
            this.controlsConfig.plumbing_back_btn.hide = false;

            this.controlsConfig.plumbing_kitchen_sink_title.hide = false;
            this.controlsConfig.plumbing_kitchensink5_add_btn.hide = false;

            this.gallerybtnClick(this.controlsConfig.plumbing_kitchensink5_btn.config.name);
            this.component.backButtonEnableOrDisable(true);

        }
    }

    plumbing_kitchensink5_add(): void {
        this.btnClick(this.controlsConfig.plumbing_kitchensink5_btn.config.name);
    }

    plumbing_contol_add(): void {
        this.component.addControlopen(this.controlsConfig.plumbing_control_add_btn.config.name);
    }

    btnClick(control: string): void {
        const btnname = this.controlsConfig[control].config.name;
        const controlName = this.controlsConfig[control].config.controlName;
        const parentName = this.controlsConfig[control].config.parent;
        const metatags = this.controlsConfig[control].config.metatags;
        const cameraTip = this.controlsConfig[control].config.tip;
        const controlTier = this.controlsConfig[control].config.tier;

        this.component.cameraControl(btnname, controlName, parentName, metatags, cameraTip, controlTier);
    }

    gallerybtnClick(control: string): void {
        const btnname = this.controlsConfig[control].config.name;
        const controlName = this.controlsConfig[control].config.controlName;
        const parentName = this.controlsConfig[control].config.parent;

        this.component.galleryControl(btnname, controlName, parentName);
    }

    plumbing_bathroom2_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_bathroom2_btn.description,
            this.controlsConfig.plumbing_bathroom2_btn.config.name);
    }

    plumbing_bathroom3_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_bathroom3_btn.description,
            this.controlsConfig.plumbing_bathroom3_btn.config.name);
    }


    plumbing_bathroom4_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_bathroom4_btn.description,
            this.controlsConfig.plumbing_bathroom4_btn.config.name);
    }

    plumbing_bathroom5_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_bathroom5_btn.description,
            this.controlsConfig.plumbing_bathroom5_btn.config.name);
    }

    plumbing_kitchen2_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_kitchen2_btn.description,
            this.controlsConfig.plumbing_kitchen2_btn.config.name);
    }

    plumbing_kitchen3_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_kitchen3_btn.description,
            this.controlsConfig.plumbing_kitchen3_btn.config.name);
    }

    plumbing_kitchen4_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_kitchen4_btn.description,
            this.controlsConfig.plumbing_kitchen4_btn.config.name);
    }

    plumbing_kitchen5_edit(): void {
        this.component.addControlLabelopen(
            this.controlsConfig.plumbing_kitchen5_btn.description,
            this.controlsConfig.plumbing_kitchen5_btn.config.name);
    }


    pool_reset(): void {

        this.controlsConfig.pool_back_btn.hide = true;

        this.controlsConfig.pool_title.hide = true;
        this.controlsConfig.pool_photo_title.hide = true;
        this.controlsConfig.pool_fence_enclosure_title.hide = true;
        this.controlsConfig.pool_slide_title.hide = true;
        this.controlsConfig.pool_exterior_title.hide = true;

        this.controlsConfig.pool_photo_btn.hide = true;
        this.controlsConfig.pool_photo_add_btn.hide = true;
        this.controlsConfig.pool_fence_enclosure_btn.hide = true;
        this.controlsConfig.pool_fence_enclosure_add_btn.hide = true;

        this.controlsConfig.pool_slide_btn.hide = true;
        this.controlsConfig.pool_slide_add_btn.hide = true;
        this.controlsConfig.pool_exterior_btn.hide = true;
        this.controlsConfig.pool_exterior_add_btn.hide = true;

        this.component.backButtonEnableOrDisable(false);
    }

    pool_back(): void {
        if (this.controlsConfig.pool_back_btn.tier == 2) {
            this.pool_reset();
            this.pool_tier1();
            this.component.galleryReset();
        }
        this.component.backButtonEnableOrDisable(false);
    }

    pool_tier1(): void {
        this.controlsConfig.pool_title.hide = false;

        this.controlsConfig.pool_photo_btn.hide = false;
        this.controlsConfig.pool_fence_enclosure_btn.hide = false;
        this.controlsConfig.pool_slide_btn.hide = false;
        this.controlsConfig.pool_exterior_btn.hide = false;
    }

    pool_photo(): void {
        if (this.controlsConfig.pool_photo_btn.value == '' || this.controlsConfig.pool_photo_btn.value == undefined) {
            this.btnClick(this.controlsConfig.pool_photo_btn.config.name);
        }
        else {
            this.pool_reset();
            this.controlsConfig.pool_back_btn.tier = 2;
            this.controlsConfig.pool_back_btn.hide = false;
            this.controlsConfig.pool_photo_title.hide = false;

            this.controlsConfig.pool_photo_add_btn.hide = false;
            this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.pool_photo_btn.config.name);
        }
    }

    pool_photo_add(): void {
        this.btnClick(this.controlsConfig.pool_photo_btn.config.name);
    }

    pool_fence_enclosure(): void {
        if (this.controlsConfig.pool_fence_enclosure_btn.value == '' || this.controlsConfig.pool_fence_enclosure_btn.value == undefined) {
            this.btnClick(this.controlsConfig.pool_fence_enclosure_btn.config.name);
        }
        else {
            this.pool_reset();
            this.controlsConfig.pool_back_btn.tier = 2;
            this.controlsConfig.pool_back_btn.hide = false;
            this.controlsConfig.pool_fence_enclosure_title.hide = false;

            this.controlsConfig.pool_fence_enclosure_add_btn.hide = false;
            this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.pool_fence_enclosure_btn.config.name);
        }
    }

    pool_fence_enclosure_add(): void {
        this.btnClick(this.controlsConfig.pool_fence_enclosure_btn.config.name);
    }

    pool_slide(): void {
        if (this.controlsConfig.pool_slide_btn.value == '' || this.controlsConfig.pool_slide_btn.value == undefined) {
            this.btnClick(this.controlsConfig.pool_slide_btn.config.name);
        }
        else {
            this.pool_reset();
            this.controlsConfig.pool_back_btn.tier = 2;
            this.controlsConfig.pool_back_btn.hide = false;
            this.controlsConfig.pool_slide_title.hide = false;

            this.controlsConfig.pool_slide_add_btn.hide = false;
            this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.pool_slide_btn.config.name);
        }
    }

    pool_slide_add(): void {
        this.btnClick(this.controlsConfig.pool_slide_btn.config.name);
    }

    pool_exterior(): void {
        if (this.controlsConfig.pool_exterior_btn.value == '' || this.controlsConfig.pool_exterior_btn.value == undefined) {
            this.btnClick(this.controlsConfig.pool_exterior_btn.config.name);
        }
        else {
            this.pool_reset();
            this.controlsConfig.pool_back_btn.tier = 2;
            this.controlsConfig.pool_back_btn.hide = false;
            this.controlsConfig.pool_exterior_title.hide = false;

            this.controlsConfig.pool_exterior_add_btn.hide = false;
            this.component.backButtonEnableOrDisable(true);
            this.gallerybtnClick(this.controlsConfig.pool_exterior_btn.config.name);
        }
    }

    pool_exterior_add(): void {
        this.btnClick(this.controlsConfig.pool_exterior_btn.config.name);
    }
}

export interface ComponentClickEvent {
    galleryControl(control: string, child: string, parent: string): void;
    cameraControl(control: string, child: string, parent: string, metatags: string, tip: string, tier: string): void;
    openCommentDialog(control: string): void;
    addControlopen(control: string): void;
    addControlLabelopen(description: string, ctrlName: string): void;
    galleryReset(): void;
    backButtonEnableOrDisable(backValue);
}