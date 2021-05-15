// @ts-nocheck
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from '../assets/form-data-json';
import { SERVER_DATA_ADD } from '../assets/form-data-json-add';
import { UserModel } from '../assets/config';
import { AppserviceService } from './appservice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {

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

  // serverData: any[] = SERVER_DATA;
  serverData: any[] ;
  uiBindingsData: any[];

  uiBindings: string[];

  dynamicFormBuildConfig: DynamicFormBuildConfig[] = [];

  constructor(private formBuilder: RxDynamicFormBuilder, public _appService: AppserviceService) { }

  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
    this.elm1 = this.myModal1.nativeElement as HTMLElement;
    this.elm2 = this.myModal2.nativeElement as HTMLElement;
  }

  async ngOnInit(): void {

    await this.fetchDataTemplate('');

    setTimeout(() => {
      // console.log(this.serverData);
      // console.log(this.uiBindings);
      // console.log(this.uiBindingsData);
      // console.log(this.serverData);
      this.objData = this.objectKeys(this.serverData);
      ReactiveFormConfig.set({ validationMessage: { required: 'This field is required***' } });

      for (let i = 0; i < this.objData.length; i++) {
        console.log(this.serverData[this.objData[i]]);
        this.dynamicFormBuildConfig[i] = this.formBuilder.formGroup(this.serverData[this.objData[i]][0].data, {
          additionalConfig: this.additionalConfig,
          controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
        });
      }
    }, 3000);

    // this.serverData.forEach(res => {
    //   res.data.forEach(elemres => {
    //     if(elemres.value != undefined){
    //       elemres.ui.class.push('btn-circlecompleted');
    //     }
    //   });
    // })
  }

  cameraControl(control: string, child: string, parent: string, metatags: string, tip: string, tier: string): void {

    console.log('Test Method clicked');
    console.log('Control : ' + control);
    console.log('Child : ' + child);
    console.log('Parent : ' + parent);
    console.log('MetaTags : ' + metatags);
    console.log('Tip : ' + tip);
    console.log('Tier : ' + tier);
    this.uploadFile(tier, parent, child, control);
  }

  galleryControl(control: string, child: string, parent: string): void {
    console.log('galleryControl Method clicked');
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

    this.objData.forEach(objele => {
      this.serverData[objele][0].data.forEach(res => {
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
      this.serverData[objele][0].data.forEach(res => {
        if (res.controlName === this.repeatableSource && res.type === 'button') {
          res.repeatable += 1;
          let newControl = this.repeatableSource + res.repeatable;
          let found = false;
          this.objData.forEach(ele => {
            this.serverData[ele][0].data.forEach(resp => {
              for (let i = 2; i <= res.repeatable;) {
                newControl = this.repeatableSource + i;
                if (resp.controlName === newControl && resp.enabled === false) {
                  const editIndex =
                    this.serverData[ele][0].data.findIndex((result) => result.name === resp.name.replace('_btn', '_edit_btn'));

                  this.serverData[ele][0].data[editIndex].ui.hide = false;
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

    this.addControlLabelopen(this.controlLabel, this.labelDialogControlName);
  }

  addControlLabelclose(): void {
    this.elm2.classList.remove('show');
    setTimeout(() => {
      this.elm2.style.width = '0';
    }, 75);
  }

  addControlLabelopen(desc: string, controlName: string): void {
    this.controlLabel = desc;
    this.labelDialogControlName = controlName;
    this.elm2.classList.add('show');
    this.elm2.style.width = '100vw';
  }

  addControlLabelsave(): void {
    this.objData.forEach(objele => {
      this.serverData[objele][0].data.forEach(res => {
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

  createTree(): void{

    let obj = [];
    this.childArrobj = [];
    this.treeArr = [];

    this.objData.forEach(elem => {
      obj = [];
      this.serverData[elem][0].data.forEach(el => {
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
      console.log(uniqueSet);
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
      if(element.name == "base_roofline_btn"){
        element.value = "Test"
      }
    });

    // this.serverData[this.objData[1]][0].data.map(element => {
    //   if(element.name == "plumbing_heater_btn"){
    //     element.value = "Test"
    //   }
    // });

    // this.saveTemplate(this.serverData, this.uiBindingsData);

    this.objData.forEach(ele => {
      this.tempArr = [];
      var abc = this.get_tree_List(this.serverData[ele][0].data);
      this.getValidationList(abc[0], ele);

      this.recommedation[ele] = this.tempArr;
    });

    console.log("Actual Recommendation", this.recommedation);

  }

  getValidationList(element, zoneName){
    console.log(element);
    if (element.children.length > 0) {
        element.children.map(res => {
          if((res.recommended == undefined || !res.recommended) && res.mandatory == 0 && (res.value == undefined || res.value == "")){
            if(res.children.length > 0){
              console.log("Function 1", "Child", res.children);
              var checkval = res.children.filter(item => (item.value!= undefined && item.value != ""))
              if(checkval.length > 0){
                res.mandatory = 1;
                res.value = "Filled";
                if(res.ImpactOnGroup == "Yes"){
                  element.children.map(item=>{
                    console.log("Function 1", "Inside Main Loop", item);
                    if(item.mandatory == 0 && item.children.length > 0 && item.ImpactOnGroup == "Yes"){
                      item.mandatory = 1;
                      item.value = "To be Filled";
                    }
                  })
                }
                this.getValidationList(element);
              }
              else
              {
                console.log("Function 1", "No Child with value", res);
              }
            }
            else{
              console.log("Function 1", "No Recommendation");
            }
          }
          else if((res.recommended == undefined || !res.recommended) && res.mandatory == 1 && res.children.length > 0){
            var checkval = res.children.filter(item => (item.mandatory == 1 && (item.value == undefined || item.value == "")))
            if(checkval.length > 0){
              res.recommended = true;
              res.children.map(result => result.recommended = true);
              checkval.forEach(resultant => {
                this.tempArr.push(resultant);
              });
              console.log("Function 2", "Recommendation", checkval);            
            }
            else{
              console.log("Function 2", "No Recommendation");
            }
          }
          else if((res.recommended == undefined || !res.recommended) && res.mandatory == 1 && (res.value == undefined || res.value == "")){
            var checkval = element.children.filter(item => (item.ImpactOnGroup == "Yes" && item.value != undefined && item.value != ""))
            if(res.ImpactOnGroup == "Yes" && checkval.length > 0){
                res.recommended = true;
                this.tempArr.push(res);
                console.log("Function 3", "Recommendation", res);
            }
            else{
              console.log("No Recommendation");
            }
          }
          else if((res.recommended == undefined || !res.recommended) && res.mandatory == 2 && (res.value == undefined || res.value == "")){
            res.recommended = true;
            console.log("Function 4", "Mandatory", res);
          }
          else{
            if(res.ImpactOnGroup == "Yes"){
              element.children.map(item=>{
                console.log("Function 5", "Inside Loop", item);
                if(item.mandatory == 0 && item.children.length > 0 && item.ImpactOnGroup == "Yes"){
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

  saveTemplate(Data, Bindings): void{
    console.log(Data);
    const postJson = {
      userId: 'DYSFBAGT2',
      userType: 'agent',
      taskId: 'DYSFBTSK59',
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

  async fetchDataTemplate(taskid) : void {

    this.serverData = [];
    this.uiBindings = [];
    let testData = '';
    var tempArray = [];

    const postJson = {
      userId: 'DYSFBAGT20',
      userType: 'agent',
      taskId: 'DYSFBTSK5'
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
          controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
        });
      }
    }, 2000);
  }
}
