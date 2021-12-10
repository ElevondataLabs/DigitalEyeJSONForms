import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-dynamic-form-builder',
  templateUrl: './custom-dynamic-form-builder.component.html',
  styleUrls: ['./custom-dynamic-form-builder.component.css']
})
export class CustomDynamicFormBuilderComponent implements OnInit {
  public formFieldsJson:any = []; 
  @Input() customFormJson:any; 
  public zoneKeys: any = [];
  public _customForm:FormGroup = new FormGroup({});
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    // document.getElementById("content").scrollIntoView();
    this.formFieldsJson = [];
    console.log(this.formFieldsJson);

    this._customForm = this._formBuilder.group({}); 
    console.log(this.customFormJson);
    this.customFormJson = JSON.parse(this.customFormJson);
    console.log(this.customFormJson);

    this.zoneKeys = Object.keys(this.customFormJson);
    this.zoneKeys.forEach((key: any) => {
        this.formFieldsJson = [].concat.apply(this.formFieldsJson, this.customFormJson[key][0].data);
    });  

    console.log(this.formFieldsJson);
    this._formRender();
  }

  _formRender(){
    const _dynamicFormControls: any = {};
    this.formFieldsJson.forEach((field:any)=>{
      var validation = [];
      if(field['isRequired']){
        validation.push(Validators.required);
      } 
      if(field['inputPattern'] && field['inputPattern']!=''){
        validation.push(Validators.pattern(field['inputPattern']))
      }
      if (field['controlType'] != 'checkbox') {
        _dynamicFormControls[field['controlName']] = new FormControl(field['controlvalue'] || '',validation);
      } else {
        const formArray: FormArray = new FormArray([]); 
        for(var i=0;i < field['controlvalue'].length;i++){
          formArray.push(new FormControl((field['controlvalue'][i]).trim()));
        } 
        _dynamicFormControls[field['controlName']] = formArray  
      } 
    }); 
    this._customForm = new FormGroup(_dynamicFormControls);  
  }
 
 
  onCheckChange(event:any,controlName:any) {
    const formArray: FormArray = this._customForm.get(controlName) as FormArray; 
    if(event.target.checked) { 
      formArray.push(new FormControl((event.target.value).trim()));
    } else{ 
      let i: number = 0; 
      formArray.controls.forEach((ctrl) => {
        if(ctrl.value == ((event.target.value).trim())) { 
          formArray.removeAt(i);
          return;
        } 
        i++;
      });
    }
  }

  _customFormSubmit() {  
    if (!this._customForm.valid) {
      Object.keys(this._customForm.controls).forEach(field => {
        const control:any = this._customForm.get(field);
        control.markAsTouched({ onlySelf: true });
      });
       return;
    }

    this.zoneKeys.forEach((key: any) => {
      this.customFormJson[key][0].data.map((item: any) =>{
        item.controlvalue = !Array.isArray(item['controlvalue']) ? (this._customForm.value[item.controlName]).trim() : this._customForm.value[item.controlName]; 
      }); 
    });  

    console.log(this.customFormJson);
  }

}

