// @ts-nocheck
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DynamicFormBuildConfig, DynamicFormConfiguration, RxDynamicFormBuilder } from '@rxweb/reactive-dynamic-forms';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
import { SERVER_DATA } from '../assets/form-data-json';
import { SERVER_DATA_ADD } from '../assets/form-data-json-add';
import { UserModel } from '../assets/config';
import { exit } from 'node:process';
import { element } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit {
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

  serverData: any[] = SERVER_DATA;

  uiBindings: string[] = ['base_dwelling_frontview_test_btn', 'lblDetExterior',
    ['btnDriveway', 'btnFoundation'],
    ['btnSidewalks', 'btnPorches'],
    ['btnStairs', 'btnTrees'],
    ['btnChimney', 'btnFence'],
    ['btnSiding', 'btnGutters'],
    ['btnYard'],
    'base_title', 'base_roofline_title', 'base_dwelling_title', 'base_propspec_title',
    ['base_roofline_btn', 'base_dwelling_btn'],
    ['base_propspec_btn'], 'base_roofline_add_btn',
    ['base_dwelling_frontview_btn', 'base_dwelling_backview_btn'],
    ['base_dwelling_rightview_btn', 'base_dwelling_leftview_btn'],
    ['base_propspec_add_btn', 'base_propspec_add_details'], 'base_back_btn'];


  dynamicFormBuildConfig: DynamicFormBuildConfig[] = [];

  openCommentDialog(control: string): void {
    this.commentDialogControlName = control;

    this.serverData.forEach(objserverData => {
      objserverData.data.forEach(res => {
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
    this.serverData.forEach(objele => {
      objele.data.forEach(res => {
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

    this.serverData.forEach(objele => {
      objele.data.forEach(res => {
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
    this.serverData.forEach(objele => {
      objele.data.forEach(res => {
        if (res.controlName === this.repeatableSource && res.type === 'button') {
          res.repeatable += 1;
          let newControl = this.repeatableSource + res.repeatable;
          let found = false;
          this.serverData.forEach(ele => {
            ele.data.forEach(resp => {
              for (let i = 2; i <= res.repeatable;) {
                newControl = this.repeatableSource + i;
                if (resp.controlName === newControl && resp.enabled === false) {
                  const editIndex = ele.data.findIndex((result) => result.name === resp.name.replace('_btn', '_edit_btn'));
                  ele.data[editIndex].ui.hide = false;
                  found = true;
                  resp.ui.hide = false;
                  resp.enabled = true;
                  try {
                    this.dynamicFormBuildConfig.forEach(elem => {
                      if (elem.controlsConfig[resp.name] !== undefined) {
                        elem.controlsConfig[resp.name].hide = false;
                        elem.controlsConfig[resp.name.replace('_btn', '_edit_btn')].hide = false;
                        elem.controlsConfig[resp.name].config.enabled = true;
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
    this.serverData.forEach(objele => {
      objele.data.forEach(res => {
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


  ngAfterViewInit(): void {
    this.elm = this.myModal.nativeElement as HTMLElement;
    this.elm1 = this.myModal1.nativeElement as HTMLElement;
    this.elm2 = this.myModal2.nativeElement as HTMLElement;
  }

  constructor(private formBuilder: RxDynamicFormBuilder) { }

  ngOnInit(): void {

    ReactiveFormConfig.set({ validationMessage: { required: 'This field is required***' } });

    for (let i = 0; i < this.serverData.length; i++) {
      this.dynamicFormBuildConfig[i] = this.formBuilder.formGroup(this.serverData[i].data, {
        additionalConfig: this.additionalConfig,
        controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
      });
    }
  }

  test(control: string, child: string, parent: string, metatags: string, tip: string, tier: string): void {

    console.log('Test Method clicked');
    console.log('Control : ' + control);
    console.log('Child : ' + child);
    console.log('Parent : ' + parent);
    console.log('MetaTags : ' + metatags);
    console.log('Tip : ' + tip);
    console.log('Tier : ' + tier);
    this.uploadFile(tier, parent, child, control);
  }

  uploadFile(tier, parent, child, control): void {
    const displayarr = [parent, child];
    const zoneIndex = this.serverData.findIndex((ele1) => ele1.data.some((ele) => ele.name === control));

    for (let i = tier - 1; i > 1; i--) {
      this.serverData[zoneIndex].data.forEach(ele => {
        if (ele.controlName === parent) {
          displayarr.unshift(ele.parent);
          parent = ele.parent;
        }
      });
    }
    console.log(displayarr);
    // let unique = [...new Set(elem.data.map(item => item.controlName))];
    // console.log(unique);
    const arr = [];
    let obj = [];

    this.serverData.forEach(elem => {
      obj = [];
      elem.data.forEach(el => {
        obj.push({
          name: el.name,
          controlName: el.controlName,
          parent: el.parent,
          tier: el.tier,
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
      });

      arr.push(root);
    });

    arr.forEach(ele=>{
      console.log(ele.children);
      console.log(ele.metatags);
    })
  }

  selectImageSource(): void {

  }

  addzone(): void {
    const testData = SERVER_DATA_ADD;

    this.serverData.push(testData);

    this.uiBindings.push(
    ['plumbing_title', 'plumbing_kitchen_title', 'plumbing_bathroom_title', 'plumbing_heater_title',
    'plumbing_dishwasher_title', 'plumbing_activeleaks_title', 'plumbing_priorleaks_title',
    'plumbing_kitchen_sink_title', 'plumbing_bathroom_sink_title',
     'plumbing_control_add_btn',
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
    'plumbing_heater_btn',
    'plumbing_dishwasher_btn',
    'plumbing_activeleaks_btn',
    'plumbing_priorleaks_btn',
    'plumbing_wmhose_btn',
    'plumbing_addComments_btn'],
    'plumbing_heater_add_btn',
    'plumbing_dishwasher_add_btn', 'plumbing_dishwasher_comments_btn',
    'plumbing_activeleaks_add_btn', 'plumbing_activeleaks_comments_btn',
    'plumbing_priorleaks_add_btn', 'plumbing_priorleaks_comments_btn',
    'plumbing_bathroomsink_btn', 'plumbing_bathroomsink_add_btn', 'plumbing_bathtub_btn', 'plumbing_supplyline_btn',
    'plumbing_bathroomsink2_btn', 'plumbing_bathroomsink2_add_btn', 'plumbing_bathtub2_btn', 'plumbing_supplyline2_btn',
    'plumbing_bathroomsink3_btn', 'plumbing_bathroomsink3_add_btn', 'plumbing_bathtub3_btn', 'plumbing_supplyline3_btn',
    'plumbing_bathroomsink4_btn', 'plumbing_bathroomsink4_add_btn', 'plumbing_bathtub4_btn', 'plumbing_supplyline4_btn',
    'plumbing_bathroomsink5_btn', 'plumbing_bathroomsink5_add_btn', 'plumbing_bathtub5_btn', 'plumbing_supplyline5_btn',
    'plumbing_kitchensink_btn', 'plumbing_kitchensink_add_btn',
    'plumbing_kitchensink2_btn', 'plumbing_kitchensink2_add_btn',
    'plumbing_kitchensink3_btn', 'plumbing_kitchensink3_add_btn',
    'plumbing_kitchensink4_btn', 'plumbing_kitchensink4_add_btn',
    'plumbing_kitchensink5_btn', 'plumbing_kitchensink5_add_btn',
    'plumbing_back_btn'
    ]);

    for (let i = 0; i < this.serverData.length; i++) {
      this.dynamicFormBuildConfig[i] = this.formBuilder.formGroup(this.serverData[i].data, {
        additionalConfig: this.additionalConfig,
        controlConfigModels: [{ modelName: 'userModel', model: UserModel, arguments: [this] }]
      });
    }
  }
}
