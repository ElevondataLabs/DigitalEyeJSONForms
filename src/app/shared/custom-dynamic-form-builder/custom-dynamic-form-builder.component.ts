import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-custom-dynamic-form-builder',
  templateUrl: './custom-dynamic-form-builder.component.html',
  styleUrls: ['./custom-dynamic-form-builder.component.css']
})
export class CustomDynamicFormBuilderComponent implements OnInit {
  @Input() formFieldsJson:any = []; 
  public _customForm:FormGroup = new FormGroup({});
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.formFieldsJson);
    this._customForm = this._formBuilder.group({});
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
    console.log(this._customForm.value);
     this.formFieldsJson.map(item =>{
      item.controlvalue = !Array.isArray(item['controlvalue']) ? (this._customForm.value[item.controlName]).trim() : this._customForm.value[item.controlName];
      // return item;
    });
    console.log(this.formFieldsJson);
  }

}
