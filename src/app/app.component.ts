// @ts-nocheck
import { AfterViewInit, HostListener, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from '../assets/form-data-json';
import { SERVER_DATA_ADD } from '../assets/form-data-json-add';
import { UserModel } from '../assets/config';
import { AppserviceService } from './appservice.service';

declare function dynamicFormsEvent(param: any, varb, SERVER_DATA = []): any;
declare function backButtonEvent(controlName: any): any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
  
  public updatedFieldsforCustomForm: any[]= [
    {
    "Base Inspection":
      [{
        id: 'ques1',
        layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
        label: 'Name',
        controlName: 'Question_1',
        controlType: 'text',
        controlvalue: '',
        placeholder:'',
        controlOptions: [],
        isRequired: true,
        inputPattern: '',
      },
      {
        id: 'ques2',
        layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
        label: 'Email',
        controlName: 'Question_2',
        controlType: 'text',
        controlvalue: '',
        placeholder:'',
        controlOptions: [],
        isRequired: true,
        inputPattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$',
      },
      {
        id: 'ques3',
        layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
        label: 'Password',
        controlName: 'Question_3',
        controlType: 'password',
        controlvalue: '',
        placeholder:'',
        controlOptions: [],
        isRequired: true,
        inputPattern: '',
      },
      {
        id: 'ques4',
        layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
        label: 'Gender',
        controlName: 'Question_4',
        controlType: 'radio',
        controlvalue: '1',
        placeholder:'',
        controlOptions: [{id:'1', option:'Male'}, {id:'2', option:'Female'}],
        isRequired: true,
        inputPattern: '',
      },
      {
        id: 'ques5',
        layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
        label: 'Date of Birth',
        controlName: 'Question_5',
        controlType: 'date',
        controlvalue: '',
        placeholder:'',
        controlOptions: [],
        isRequired: true,
        inputPattern: '',
      }],
   "Detailed Exterior" : 
   [{
      id: 'ques6',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Hobbies',
      controlName: 'Question_6',
      controlType: 'checkbox',
      controlvalue: ['1','2'],
      placeholder:'',
      controlOptions: [{id:'1', option:'Dancing'}, {id:'2', option:'Singing'}, {id:'3', option:'Reading'}],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques7',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Language Preference',
      controlName: 'Question_7',
      controlType: 'select',
      controlvalue: '',
      placeholder:'',
      controlOptions: [{id:'1', option:'English'}, {id:'2', option:'Hindi'}, {id:'3', option:'Marathi'}],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques8',
      layOutClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      label: 'Address',
      controlName: 'Question_8',
      controlType: 'textarea',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '',
    }]
  }];
  
  public fieldsForCustomForm:any[] = [
    {
      id: 'ques1',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Name',
      controlName: 'Question_1',
      controlType: 'text',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques2',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Email',
      controlName: 'Question_2',
      controlType: 'text',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Za-z]{2,6}$',
    },
    {
      id: 'ques3',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Password',
      controlName: 'Question_3',
      controlType: 'password',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques4',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Gender',
      controlName: 'Question_4',
      controlType: 'radio',
      controlvalue: '1',
      placeholder:'',
      controlOptions: [{id:'1', option:'Male'}, {id:'2', option:'Female'}],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques5',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Date of Birth',
      controlName: 'Question_5',
      controlType: 'date',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques6',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Hobbies',
      controlName: 'Question_6',
      controlType: 'checkbox',
      controlvalue: ['1','2'],
      placeholder:'',
      controlOptions: [{id:'1', option:'Dancing'}, {id:'2', option:'Singing'}, {id:'3', option:'Reading'}],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques7',
      layOutClass:"col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3",
      label: 'Language Preference',
      controlName: 'Question_7',
      controlType: 'select',
      controlvalue: '',
      placeholder:'',
      controlOptions: [{id:'1', option:'English'}, {id:'2', option:'Hindi'}, {id:'3', option:'Marathi'}],
      isRequired: true,
      inputPattern: '',
    },
    {
      id: 'ques8',
      layOutClass:"col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12",
      label: 'Address',
      controlName: 'Question_8',
      controlType: 'textarea',
      controlvalue: '',
      placeholder:'',
      controlOptions: [],
      isRequired: true,
      inputPattern: '',
    },
  ]


  objectKeys = Object.keys;
  treeArr = [];
  objData = [];
  childArrobj = [];

  recommedation = {};
  tempArr = [];

  title = 'angular-tour-of-heroes';
  commentDialogControlName = '';
  comments = '';
  repeatableSource = '';
  controlLabel = '';
  labelDialogControlName = '';

  repeatSource: Array<{ controlName: string }> = [];

  @ViewChild('myModal', { static: false }) myModal: ElementRef;
  @ViewChild('myModal1', { static: false }) myModal1: ElementRef;
  @ViewChild('myModal2', { static: false }) myModal2: ElementRef;
  elm: HTMLElement;
  elm1: HTMLElement;
  elm2: HTMLElement;

  serverData1: any[] = SERVER_DATA_ADD;
  serverData: any[];
  uiBindingsData: any[];

  uiBindings1: string[] = ['baseinspection_back_btn', 'baseinspection_title', 'baseinspection_roofline_title', 'baseinspection_dwelling_title', 'baseinspection_propertyspecific_title', 'baseinspection_dwelling_rightview_title', 'baseinspection_dwelling_leftview_title', 'baseinspection_dwelling_frontview_title', 'baseinspection_dwelling_backview_title', ['baseinspection_roofline_btn', 'baseinspection_dwelling_btn'], ['baseinspection_propertyspecific_btn'], 'baseinspection_roofline_add_btn', ['baseinspection_dwelling_frontview_btn', 'baseinspection_dwelling_backview_btn'], ['baseinspection_dwelling_rightview_btn', 'baseinspection_dwelling_leftview_btn'], 'baseinspection_dwelling_leftview_add_btn', 'baseinspection_dwelling_frontview_add_btn', 'baseinspection_dwelling_backview_add_btn', 'baseinspection_dwelling_rightview_add_btn', ['baseinspection_propertyspecific_hazarddetails_btn', 'baseinspection_propertyspecific_hazardcomments_btn']];
  detailuiBindgs = ['detailedexterior_back_btn', 'detailedexterior_title', 'detailedexterior_driveway_title', 'detailedexterior_foundation_title', 'detailedexterior_sidewalks_title', 'detailedexterior_porches_title', 'detailedexterior_stairs_title', 'detailedexterior_trees_title', 'detailedexterior_chimney_title', 'detailedexterior_fence_title', 'detailedexterior_siding_title', 'detailedexterior_gutters_title', 'detailedexterior_yard_title', ['detailedexterior_driveway_btn', 'detailedexterior_foundation_btn'], ['detailedexterior_sidewalks_btn', 'detailedexterior_porches_btn'], ['detailedexterior_stairs_btn', 'detailedexterior_trees_btn'], ['detailedexterior_chimney_btn', 'detailedexterior_fence_btn'], ['detailedexterior_siding_btn', 'detailedexterior_gutters_btn'], ['detailedexterior_yard_btn'], 'detailedexterior_driveway_add_btn', 'detailedexterior_foundation_add_btn', 'detailedexterior_sidewalks_add_btn', 'detailedexterior_porches_add_btn', 'detailedexterior_stairs_add_btn', 'detailedexterior_trees_add_btn', 'detailedexterior_chimney_add_btn', 'detailedexterior_fence_add_btn', 'detailedexterior_siding_add_btn', 'detailedexterior_gutters_add_btn', 'detailedexterior_yard_add_btn'];
  pooluibindings = ['swimmingpool_back_btn', 'swimmingpool_title', 'swimmingpool_poolphotos_title', 'swimmingpool_fenceenclosure_title', 'swimmingpool_slidedivingboard_title', 'swimmingpool_hottubjacuzzi_title', ['swimmingpool_poolphotos_btn', 'swimmingpool_fenceenclosure_btn', 'swimmingpool_slidedivingboard_btn', 'swimmingpool_hottubjacuzzi_btn'], 'swimmingpool_poolphotos_add_btn', 'swimmingpool_fenceenclosure_add_btn', 'swimmingpool_slidedivingboard_add_btn', 'swimmingpool_hottubjacuzzi_add_btn'];
  otherstructuresuiBinding = ['otherstructures_back_btn', 'otherstructures_title', 'otherstructures_detachedgarage_title', 'otherstructures_barn_title', 'otherstructures_guesthouse_title', 'otherstructures_gazebo_title', 'otherstructures_dock_title', 'otherstructures_cabin_title', 'otherstructures_fence_title', 'otherstructures_detachedpatiodiningarea_title', 'otherstructures_other_title', ['otherstructures_detachedgarage_btn', 'otherstructures_barn_btn'], ['otherstructures_guesthouse_btn', 'otherstructures_gazebo_btn'], ['otherstructures_dock_btn', 'otherstructures_cabin_btn'], ['otherstructures_fence_btn', 'otherstructures_detachedpatiodiningarea_btn'], ['otherstructures_other_btn'], 'otherstructures_detachedgarage_add_btn', 'otherstructures_barn_add_btn', 'otherstructures_guesthouse_add_btn', 'otherstructures_gazebo_add_btn', 'otherstructures_dock_add_btn', 'otherstructures_cabin_add_btn', 'otherstructures_fence_add_btn', 'otherstructures_detachedpatiodiningarea_add_btn', 'otherstructures_other_add_btn'];
  exterioruiBindgs = ['homeexterior_back_btn', 'homeexterior_title', 'homeexterior_front_title', 'homeexterior_backview_title', 'homeexterior_addn_title', ['homeexterior_front_btn', 'homeexterior_backview_btn', 'homeexterior_addn_btn'], 'homeexterior_front_add_btn', 'homeexterior_backview_add_btn', 'homeexterior_addn_add_btn'];
  furnitureuiBindgs = ['furniturefixtures_back_btn', 'furniturefixtures_title', 'furniturefixtures_fireplace_title', 'furniturefixtures_addn_title', ['furniturefixtures_fireplace_btn', 'furniturefixtures_addn_btn'], 'furniturefixtures_fireplace_add_btn', 'furniturefixtures_addn_add_btn'];
  addnpicturesuiBindgs = ['additionalpictures_back_btn', 'additionalpictures_title', 'additionalpictures_theaterroom_title', 'additionalpictures_laundryroom_title', 'additionalpictures_powderroom_title', 'additionalpictures_addn_title',
    ['additionalpictures_theaterroom_btn', 'additionalpictures_laundryroom_btn'],
    ['additionalpictures_powderroom_btn', 'additionalpictures_addn_btn'],
    'additionalpictures_theaterroom_add_btn', 'additionalpictures_laundryroom_add_btn', 'additionalpictures_powderroom_add_btn', 'additionalpictures_addn_add_btn'];


  roomsuiBindings = ['rooms_back_btn', 'rooms_control_add_btn', 'rooms_title', 'rooms_masterbedroom_title', 'rooms_bedroom_title', 'rooms_bedroom2_title', 'rooms_bedroom3_title', 'rooms_bedroom4_title', 'rooms_bedroom5_title', 'rooms_addn_title', 'rooms_masterbedroom_bathroom_title', 'rooms_masterbedroom_dresser_title', 'rooms_masterbedroom_roomphotos_title', 'rooms_masterbedroom_addn_title', 'rooms_bedroom_bathroom_title', 'rooms_bedroom_dresser_title', 'rooms_bedroom_roomphotos_title', 'rooms_bedroom_addn_title', 'rooms_bedroom2_bathroom_title', 'rooms_bedroom2_dresser_title', 'rooms_bedroom2_roomphotos_title', 'rooms_bedroom2_addn_title', 'rooms_bedroom3_bathroom_title', 'rooms_bedroom3_dresser_title', 'rooms_bedroom3_roomphotos_title', 'rooms_bedroom3_addn_title', 'rooms_bedroom4_bathroom_title', 'rooms_bedroom4_dresser_title', 'rooms_bedroom4_roomphotos_title', 'rooms_bedroom4_addn_title', 'rooms_bedroom5_bathroom_title', 'rooms_bedroom5_dresser_title', 'rooms_bedroom5_roomphotos_title', 'rooms_bedroom5_addn_title',
    ['rooms_masterbedroom_btn', 'rooms_bedroom_btn', 'rooms_bedroom2_btn', 'rooms_bedroom3_btn', 'rooms_bedroom4_btn', 'rooms_bedroom5_btn', 'rooms_addn_btn'],
    ['rooms_masterbedroom_bathroom_btn', 'rooms_masterbedroom_dresser_btn', 'rooms_masterbedroom_roomphotos_btn', 'rooms_masterbedroom_addn_btn'],
    ['rooms_bedroom_bathroom_btn', 'rooms_bedroom_dresser_btn', 'rooms_bedroom_roomphotos_btn', 'rooms_bedroom_addn_btn'],
    ['rooms_bedroom2_bathroom_btn', 'rooms_bedroom2_dresser_btn', 'rooms_bedroom2_roomphotos_btn', 'rooms_bedroom2_addn_btn'],
    ['rooms_bedroom3_bathroom_btn', 'rooms_bedroom3_dresser_btn', 'rooms_bedroom3_roomphotos_btn', 'rooms_bedroom3_addn_btn'],
    ['rooms_bedroom4_bathroom_btn', 'rooms_bedroom4_dresser_btn', 'rooms_bedroom4_roomphotos_btn', 'rooms_bedroom4_addn_btn'],
    ['rooms_bedroom5_bathroom_btn', 'rooms_bedroom5_dresser_btn', 'rooms_bedroom5_roomphotos_btn', 'rooms_bedroom5_addn_btn'],
    'rooms_masterbedroom_bathroom_add_btn', 'rooms_masterbedroom_dresser_add_btn', 'rooms_masterbedroom_roomphotos_add_btn', 'rooms_masterbedroom_addn_add_btn',
    'rooms_bedroom_bathroom_add_btn', 'rooms_bedroom_dresser_add_btn', 'rooms_bedroom_roomphotos_add_btn', 'rooms_bedroom_addn_add_btn',
    'rooms_bedroom2_bathroom_add_btn', 'rooms_bedroom2_dresser_add_btn', 'rooms_bedroom2_roomphotos_add_btn', 'rooms_bedroom2_addn_add_btn',
    'rooms_bedroom3_bathroom_add_btn', 'rooms_bedroom3_dresser_add_btn', 'rooms_bedroom3_roomphotos_add_btn', 'rooms_bedroom3_addn_add_btn',
    'rooms_bedroom4_bathroom_add_btn', 'rooms_bedroom4_dresser_add_btn', 'rooms_bedroom4_roomphotos_add_btn', 'rooms_bedroom4_addn_add_btn',
    'rooms_bedroom5_bathroom_add_btn', 'rooms_bedroom5_dresser_add_btn', 'rooms_bedroom5_roomphotos_add_btn', 'rooms_bedroom5_addn_add_btn', , 'rooms_addn_add_btn'];


  uiBindings2: string[] = ['plumbing_back_btn',
    'plumbing_control_add_btn',
    ['plumbing_title',
      'plumbing_kitchen_title', 'plumbing_kitchen2_title', 'plumbing_kitchen3_title', 'plumbing_kitchen4_title', 'plumbing_kitchen5_title',
      'plumbing_bathroom_title', 'plumbing_bathroom2_title', 'plumbing_bathroom3_title', 'plumbing_bathroom4_title', 'plumbing_bathroom5_title',
      'plumbing_waterheater_title',
      'plumbing_dishwasher_title',
      'plumbing_activeleaks_title',
      'plumbing_priorleaks_title',
      'plumbing_washingmachinehose_title',
      'plumbing_kitchen_kitchensink_title', 'plumbing_kitchen2_kitchensink_title', 'plumbing_kitchen3_kitchensink_title', 'plumbing_kitchen4_kitchensink_title', 'plumbing_kitchen5_kitchensink_title',
      'plumbing_bathroom_bathroomsink_title', 'plumbing_bathroom2_bathroomsink_title', 'plumbing_bathroom3_bathroomsink_title', 'plumbing_bathroom4_bathroomsink_title', 'plumbing_bathroom5_bathroomsink_title',
      'plumbing_bathroom_showerbathtub_title', 'plumbing_bathroom2_showerbathtub_title', 'plumbing_bathroom3_showerbathtub_title', 'plumbing_bathroom4_showerbathtub_title', 'plumbing_bathroom5_showerbathtub_title',
      'plumbing_bathroom_toiletsupplyline_title', 'plumbing_bathroom2_toiletsupplyline_title', 'plumbing_bathroom3_toiletsupplyline_title', 'plumbing_bathroom4_toiletsupplyline_title', 'plumbing_bathroom5_toiletsupplyline_title',
      ['plumbing_bathroom_btn',
        'plumbing_bathroom2_btn', 'plumbing_bathroom2_edit_btn',
        'plumbing_bathroom3_btn', 'plumbing_bathroom3_edit_btn',
        'plumbing_bathroom4_btn', 'plumbing_bathroom4_edit_btn',
        'plumbing_bathroom5_btn', 'plumbing_bathroom5_edit_btn',
        'plumbing_kitchen_btn',
        'plumbing_kitchen2_btn', 'plumbing_kitchen2_edit_btn',
        'plumbing_kitchen3_btn', 'plumbing_kitchen3_edit_btn',
        'plumbing_kitchen4_btn', 'plumbing_kitchen4_edit_btn',
        'plumbing_kitchen5_btn', 'plumbing_kitchen5_edit_btn',
        'plumbing_waterheater_btn',
        'plumbing_dishwasher_btn',
        'plumbing_activeleaks_btn',
        'plumbing_priorleaks_btn',
        'plumbing_washingmachinehose_btn',
        'plumbing_additionalcomments_btn'],
      'plumbing_waterheater_add_btn',
      'plumbing_washingmachinehose_add_btn',
      'plumbing_dishwasher_dishwasherimage_btn', 'plumbing_dishwasher_dishwashercomments_btn',
      'plumbing_activeleaks_activeleaksimage_btn', 'plumbing_activeleaks_activeleakscomments_btn',
      'plumbing_priorleaks_priorleaksimage_btn', 'plumbing_priorleaks_priorleakscomments_btn',
      'plumbing_bathroom_bathroomsink_btn', 'plumbing_bathroom_bathroomsink_add_btn',
      'plumbing_bathroom_showerbathtub_btn', 'plumbing_bathroom_showerbathtub_add_btn',
      'plumbing_bathroom_toiletsupplyline_btn', 'plumbing_bathroom_toiletsupplyline_add_btn',
      'plumbing_bathroom2_bathroomsink_btn', 'plumbing_bathroom2_bathroomsink_add_btn',
      'plumbing_bathroom2_showerbathtub_btn', 'plumbing_bathroom2_showerbathtub_add_btn',
      'plumbing_bathroom2_toiletsupplyline_btn', 'plumbing_bathroom2_toiletsupplyline_add_btn',
      'plumbing_bathroom3_bathroomsink_btn', 'plumbing_bathroom3_bathroomsink_add_btn',
      'plumbing_bathroom3_showerbathtub_btn', 'plumbing_bathroom3_showerbathtub_add_btn',
      'plumbing_bathroom3_toiletsupplyline_btn', 'plumbing_bathroom3_toiletsupplyline_add_btn',
      'plumbing_bathroom4_bathroomsink_btn', 'plumbing_bathroom4_bathroomsink_add_btn',
      'plumbing_bathroom4_showerbathtub_btn', 'plumbing_bathroom4_showerbathtub_add_btn',
      'plumbing_bathroom4_toiletsupplyline_btn', 'plumbing_bathroom4_toiletsupplyline_add_btn',
      'plumbing_bathroom5_bathroomsink_btn', 'plumbing_bathroom5_bathroomsink_add_btn',
      'plumbing_bathroom5_showerbathtub_btn', 'plumbing_bathroom5_showerbathtub_add_btn',
      'plumbing_bathroom5_toiletsupplyline_btn', 'plumbing_bathroom5_toiletsupplyline_add_btn',
      'plumbing_kitchen_kitchensink_btn', 'plumbing_kitchen_kitchensink_add_btn',
      'plumbing_kitchen2_kitchensink_btn', 'plumbing_kitchen2_kitchensink_add_btn',
      'plumbing_kitchen3_kitchensink_btn', 'plumbing_kitchen3_kitchensink_add_btn',
      'plumbing_kitchen4_kitchensink_btn', 'plumbing_kitchen4_kitchensink_add_btn',
      'plumbing_kitchen5_kitchensink_btn', 'plumbing_kitchen5_kitchensink_add_btn']]
  uiBindings: string[];

  dynamicFormBuildConfig: DynamicFormBuildConfig[] = [];

  constructor(private formBuilder: RxDynamicFormBuilder, public _appService: AppserviceService) { }

  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
    this.elm1 = this.myModal1.nativeElement as HTMLElement;
    this.elm2 = this.myModal2.nativeElement as HTMLElement;
  }


  loadDynamicModel() {
    var ths = this;
    document.body.addEventListener('click', async function (e) {
      // console.log(e.target.classList);
      // var selectedZoneIndex = await ths.ZoneCardsSlider.getActiveIndex();
      if (e.target && e.target.classList.contains('bi-sticky') && e.target.classList.contains('btn')) {
        ths.openCommentDialog(e.target.name);
      } else if (e.target && e.target.name && e.target.classList.contains('btn-circle') && e.target.classList.contains('btn')) {
        dynamicFormsEvent(e.target.name, ths.dynamicFormBuildConfig[selectedZoneIndex], ths._tempDynamicFormConfig.serverData);
      } else if (e.target && e.target.name && e.target.classList.contains('bi-arrow-90deg-left') && e.target.classList.contains('btn')) {
        ths.galleryReset();
        backButtonEvent(e.target.name);
      } else if (e.target && e.target.classList.contains('bi-folder-plus') && e.target.classList.contains('btn')) {
        ths.addControlopen(e.target.name);
      }
      else if (e.target && e.target.classList.contains('bi-pencil') && e.target.classList.contains('btneditable')) {
        ths.addControlLabelopen(ths.dynamicFormBuildConfig[0], e.target.name);
      }
    });
    // this.lastSelectedZoneIndex = this._activatedroute.snapshot.paramMap.get('selectedZone');
    // this.indexOfSelectedCat = this._activatedroute.snapshot.paramMap.get('selectedCategory');
  }
  async ngOnInit(): void {

    await this.fetchDataTemplate('');

    setTimeout(() => {
      this.objData = this.objectKeys(this.serverData1);
      ReactiveFormConfig.set({ validationMessage: { required: 'This field is required***' } });

      for (let i = 0; i < this.objData.length; i++) {
        console.log(this.serverData1[this.objData[i]]);
        this.dynamicFormBuildConfig[i] = this.formBuilder.formGroup(this.serverData1[this.objData[i]][0].data, {
          additionalConfig: this.additionalConfig,
          // controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
        });
      }
      this.loadDynamicModel([this]);

    }, 3000);




    // this.serverData.forEach(res => {
    //   res.data.forEach(elemres => {
    //     if(elemres.value != undefined){
    //       elemres.ui.class.push('btn-circlecompleted');
    //     }
    //   });
    // })
  }

  @HostListener('window:onCameraClick', ['$event.detail'])
  cameraControl(detail: any): void {

    var control = detail.control;
    var child = detail.child;
    var parent = detail.parent;
    var metatags = detail.metatags
    var tip = detail.tip
    var tier = detail.tier;

    alert('camera Method clicked');
    console.log('Control : ' + control);
    console.log('Child : ' + child);
    console.log('Parent : ' + parent);
    console.log('MetaTags : ' + metatags);
    console.log('Tip : ' + tip);
    console.log('Tier : ' + tier);
    // this.uploadFile(tier, parent, child, control);
  }

  @HostListener('window:onGalleryClick', ['$event.detail'])
  galleryControl(detail: any): void {
    var control = detail.control;
    var child = detail.child;
    var parent = detail.parent;

    alert('galleryControl Method clicked');
    console.log('Control : ' + control);
    console.log('Child : ' + child);
    console.log('Parent : ' + parent);
  }

  openCommentDialog(control: string): void {
    this.commentDialogControlName = control;

    this.objData.forEach(objserverData => {
      this.serverData[objserverData][0].data.forEach(res => {
        if (res.name === this.commentDialogControlName) {
          console.log(res);
          this.comments = res.value;
        }
      });
    });
    console.log(this.commentDialogControlName);
    console.log(this.comments);
    this.elm.classList.add('show');
    this.elm.style.width = '100vw';
  }

  closeCommentDialog(): void {
    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
  }

  saveCommentDialog(): void {
    this.objData.forEach(objele => {
      this.serverData[objele][0].data.forEach(res => {
        if (res.name === this.commentDialogControlName) {
          if (this.comments !== undefined && this.comments.trim().length > 0) {
            res.value = this.comments.trim();
            res.ui.description = 'Edit Comments';
            try {
              this.dynamicFormBuildConfig.forEach(ele => {
                if (ele.controlsConfig[this.commentDialogControlName] !== undefined) {
                  ele.controlsConfig[this.commentDialogControlName].value = this.comments.trim();
                  ele.controlsConfig[this.commentDialogControlName].description = 'Edit Comments';
                }
              });
            }
            catch (e) {
              console.log(e);
            }
          }
        }
      });
    });

    this.elm.classList.remove('show');
    setTimeout(() => {
      this.elm.style.width = '0';
    }, 75);
  }

  addControlopen(control: string): void {
    this.repeatSource = [];
    this.repeatableSource = '';

    console.log(this.objData)
    this.objData.forEach(objele => {
      console.log(this.serverData1);
      this.serverData1[objele][0].data.forEach(res => {
        if (res.repeatable !== undefined && res.repeatable < 5) {
          this.repeatSource.push({
            controlName: res.controlName
          });
        }
      });
    });

    this.elm1.classList.add('show');
    this.elm1.style.width = '100vw';
  }

  addControlclose(): void {
    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
  }

  addControlsave(): void {
    this.objData.forEach(objele => {
      this.serverData1[objele][0].data.forEach(res => {
        if (res.controlName === this.repeatableSource && res.type === 'button') {
          res.repeatable += 1;
          let newControl = this.repeatableSource + res.repeatable;
          let found = false;
          this.objData.forEach(ele => {
            this.serverData1[ele][0].data.forEach(resp => {
              for (let i = 2; i <= res.repeatable;) {
                newControl = this.repeatableSource + i;
                if (resp.controlName === newControl && resp.enabled === false) {
                  const editIndex =
                    this.serverData1[ele][0].data.findIndex((result) => result.name === resp.name.replace('_btn', '_edit_btn'));

                  this.serverData1[ele][0].data[editIndex].ui.hide = false;
                  found = true;
                  resp.ui.hide = false;
                  resp.enabled = true;
                  resp.valueControl = true;
                  try {
                    this.dynamicFormBuildConfig.forEach(elem => {
                      if (elem.controlsConfig[resp.name] !== undefined) {
                        elem.controlsConfig[resp.name].hide = false;
                        elem.controlsConfig[resp.name.replace('_btn', '_edit_btn')].hide = false;
                        elem.controlsConfig[resp.name].config.enabled = true;
                        elem.controlsConfig[resp.name].config.valueControl = true;
                        this.controlLabel = elem.controlsConfig[resp.name].description;
                        this.labelDialogControlName = resp.name;
                      }
                    });
                  }
                  catch (e) {
                    console.log(e);
                  }
                }
                if (found) {
                  break;
                }
                else {
                  i += 1;
                }
              }
            });
          });
        }
      });
    });

    this.elm1.classList.remove('show');
    setTimeout(() => {
      this.elm1.style.width = '0';
    }, 75);
    this.addControlLabelopen(this.dynamicFormBuildConfig[0], this.labelDialogControlName);
  }

  addControlLabelclose(): void {
    this.elm2.classList.remove('show');
    setTimeout(() => {
      this.elm2.style.width = '0';
    }, 75);
  }

  addControlLabelopen(zone: any, controlName: string): void {
    var editableCategory = controlName.replace("_edit_btn", "_btn");
    var desc = zone.controlsConfig[editableCategory].config.ui.description;
    this.controlLabel = desc;
    this.labelDialogControlName = editableCategory;
    this.elm2.classList.add('show');
    this.elm2.style.width = '100vw';
  }

  addControlLabelsave(): void {
    this.objData.forEach(objele => {
      this.serverData1[objele][0].data.forEach(res => {
        if (res.name === this.labelDialogControlName) {
          res.ui.description = this.controlLabel;
          try {
            this.dynamicFormBuildConfig.forEach(elem => {
              if (elem.controlsConfig[res.name] !== undefined) {
                elem.controlsConfig[res.name].description = this.controlLabel;
              }
            });
          }
          catch (e) {
            console.log(e);
          }
        }
      });
    });

    this.elm2.classList.remove('show');
    setTimeout(() => {
      this.elm2.style.width = '0';
    }, 75);
  }

  createTree(): void {

    let obj = [];
    this.childArrobj = [];
    this.treeArr = [];

    this.objData.forEach(elem => {
      obj = [];
      this.serverData1[elem][0].data.forEach(el => {
        obj.push({
          name: el.name,
          controlName: el.controlName,
          parent: el.parent,
          valueControl: el.valueControl,
          mandatory: el.mandatory,
          tier: el.tier,
          value: el.value === undefined ? '' : el.value,
          metatags: el.metatags === undefined ? '' : el.metatags,
          tip: el.tip === undefined ? '' : el.tip
        });
      });

      const idMapping = obj.reduce((acc, el, i) => {
        acc[el.controlName] = i;
        return acc;
      }, {});

      let root;
      obj.forEach(el => {
        // Handle the root element
        if (el.parent === '') {
          root = el;
          return;
        }
        const parentEl = obj[idMapping[el.parent]];
        parentEl.children = [...(parentEl.children || []), el];

        this.childArrobj.push(parentEl);
      });

      this.treeArr.push(root);
    });
  }

  uploadFile(tier, parent, child, control): void {

    const displayarr = [{ displaytier: tier, tierValue: child, tierchildren: [] }];
    const zoneIndex = this.objData.findIndex(elemn => this.serverData[elemn][0].data.some((ele) => ele.name === control));

    this.createTree();

    const uniqueSet = [...new Set(this.childArrobj.filter(val => val.valueControl === true))];

    for (let i = tier; i > 1; i--) {
      console.log("Uniques Set", uniqueSet);
      this.serverData[this.objData[zoneIndex]][0].data.forEach(ele => {
        console.log(ele.controlName, ele.name)
        if (ele.controlName === parent) {
          const childIndex = uniqueSet.findIndex(item => item.controlName === ele.controlName);
          displayarr.unshift({
            displaytier: i - 1,
            tierValue: ele.controlName,
            tierchildren: uniqueSet[childIndex].children.filter(elem => elem.valueControl === true)
          });
          parent = ele.parent;
        }
      });
    }

    console.log(displayarr);

  }

  galleryReset(): void {
    console.log('Gallery Rest');
  }

  get_tree_List = (items, controlName = "", link = 'parent') => items
    .filter(item => item[link] == controlName && item.valueControl)
    .map(item => ({ ...item, children: this.get_tree_List(items, item.controlName) }));

  selectImageSource(): void {

    this.serverData[this.objData[0]][0].data.map(element => {
      if (element.name == "baseinspection_roofline_btn") {
        element.value = ""
      }
    });

    // this.serverData[this.objData[1]][0].data.map(element => {
    //   if(element.name == "plumbing_waterheater_btn"){
    //     element.value = "Test"
    //   }
    // });

    // this.saveTemplate(this.serverData, this.uiBindingsData);

    this.objData.forEach(ele => {
      this.tempArr = [];
      var abc = this.get_tree_List(this.serverData[ele][0].data);
      this.getValidationList(abc[0], abc[0]);

      this.recommedation[ele] = this.tempArr;
    });

    console.log("Actual Recommendation", this.recommedation);

  }

  getValidationList(element, tempele) {
    console.log("First Element", element);
    if (element.children.length > 0) {
      element.children.map(res => {
        if ((res.recommended == undefined || !res.recommended) && res.mandatory == 0 && (res.value == undefined || res.value == "")) {
          if (res.children.length > 0) {
            this.getValidationList(res, tempele);
            console.log("Function 1", "Child", res.children);
            var checkval = res.children.filter(item => (item.value != undefined && item.value != ""))
            if (checkval.length > 0) {
              res.mandatory = 1;
              res.value = "Filled";
              if (res.ImpactOnGroup == "Yes") {
                element.children.map(item => {
                  console.log("Function 1", "Inside Main Loop", item);
                  if (item.mandatory == 0 && item.children.length > 0 && item.ImpactOnGroup == "Yes") {
                    item.mandatory = 1;
                    item.value = "To be Filled";
                  }
                })
              }
              this.getValidationList(tempele, tempele);
            }
            else {
              console.log("Function 1", "No Child with value", res);
            }
          }
          else {
            console.log("Function 1", "No Recommendation");
          }
        }
        else if ((res.recommended == undefined || !res.recommended) && res.mandatory == 1 && res.children.length > 0) {
          var checkval = res.children.filter(item => (item.mandatory == 1 && (item.value == undefined || item.value == "")))
          if (checkval.length > 0) {
            res.recommended = true;
            res.children.map(result => result.recommended = true);
            checkval.forEach(resultant => {
              this.tempArr.push(resultant);
            });
            console.log("Function 2", "Recommendation", checkval);
          }
          else {
            console.log("Function 2", "No Recommendation");
          }
        }
        else if ((res.recommended == undefined || !res.recommended) && res.mandatory == 1 && (res.value == undefined || res.value == "")) {
          var checkval = element.children.filter(item => (item.ImpactOnGroup == "Yes" && item.value != undefined && item.value != ""))
          if (res.ImpactOnGroup == "Yes" && checkval.length > 0) {
            res.recommended = true;
            this.tempArr.push(res);
            console.log("Function 3", "Recommendation", res);
          }
          else {
            console.log("No Recommendation");
          }
        }
        else if ((res.recommended == undefined || !res.recommended) && res.mandatory == 2 && (res.value == undefined || res.value == "")) {
          res.recommended = true;
          console.log("Function 4", "Mandatory", res);
        }
        else {
          if (res.ImpactOnGroup == "Yes") {
            element.children.map(item => {
              console.log("Function 5", "Inside Loop", item);
              if (item.mandatory == 0 && item.children.length > 0 && item.ImpactOnGroup == "Yes") {
                item.mandatory = 1;
                item.value = "To be Filled";
              }
            })
          }
          console.log("Function 5", "No Recommendation");
        }
      });
    }
  }

  saveTemplate(Data, Bindings): void {
    console.log(Data);
    const postJson = {
      userId: 'DYSFBAGT22',
      userType: 'agent',
      taskId: 'DYSFBTSK2',
      templateJson: Data,
      uiBindings: Bindings,
      status: 1
    };

    this._appService.postData('addTaskTemplate', postJson).subscribe((res: any) => {
      if (res.StatusCode === '200') {
        console.log(res.Message);
      } else {
        console.log(res.Message);
      }
    }, (err) => {
      // Handle error
      console.log('error' + err);
    });
  }

  async fetchTemplate(): void {

    let testData = '';
    var tempArray = [];

    const postJson = {
      userId: 'DYSFBAGT2',
      userType: 'agent',
      orgId: 'DEYESORG1',
      templateId: 'DYSFBTMP3'
    };

    this._appService.postData('getOrgTemplate', postJson).subscribe((res: any) => {
      if (res.StatusCode === '200') {
        res.Data.forEach(element => {
          const objUIBinding = JSON.parse(element.uiBindings);
          // console.log(objUIBinding[0].data);
          testData = JSON.stringify(objUIBinding[0].data.replaceAll('\'', '\"'));
          const parseData = JSON.parse(testData);
          tempArray.push(JSON.parse(parseData));

          const zoneTemplate = element.zoneTemplateName;
          const objJson = JSON.parse(element.templateJson);
          console.log(element.templateJson);
          this.serverData[zoneTemplate] = objJson;
          this.uiBindingsData[zoneTemplate] = objUIBinding;
        });
        this.uiBindings = [].concat.apply(this.uiBindings, tempArray);

      } else {
        console.log(res.Message);
      }
    }, (err) => {
      // Handle error
      console.log('error' + err);
    });
  }

  backButtonEnableOrDisable(value) {
    console.log(value)
  }

  async fetchDataTemplate(taskid): void {

    this.serverData = [];
    this.uiBindings = [];
    let testData = '';
    var tempArray = [];

    const postJson = {
      userId: 'DYSFBAGT22',
      userType: 'agent',
      taskId: 'DYSFBTSK139'
    };
    this._appService.postData('getTaskTemplate', postJson).subscribe((res: any) => {
      if (res.StatusCode === '200') {
        console.log(res);
        this.serverData = JSON.parse(res.Data[0].templateJson);
        this.uiBindingsData = JSON.parse(res.Data[0].uiBindings);
        this.uiBindings = JSON.parse(res.Data[0].uiBindings);

        this.objectKeys(this.uiBindings).forEach(ele => {
          testData = JSON.stringify(this.uiBindings[ele][0].data.replaceAll('\'', '\"'));
          const parseData = JSON.parse(testData);
          tempArray.push(JSON.parse(parseData));
        });

        this.uiBindings = [].concat.apply([], tempArray);

      } else {
        console.log(res.Message);
      }
    }, (err) => {
      // Handle error
      console.log('error' + err);
    });
  }

  async addzone(): void {
    await this.fetchTemplate();

    setTimeout(() => {
      this.objData = this.objectKeys(this.serverData);

      for (let i = 0; i < this.objData.length; i++) {
        this.dynamicFormBuildConfig[i] = this.formBuilder.formGroup(this.serverData[this.objData[i]][0].data, {
          additionalConfig: this.additionalConfig,
          // controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
        });
      }
    }, 2000);
  }
}
