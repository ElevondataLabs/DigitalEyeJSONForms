import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomDynamicFormBuilderComponent } from './custom-dynamic-form-builder/custom-dynamic-form-builder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CustomDynamicFormBuilderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports:[
    CustomDynamicFormBuilderComponent
  ]
})
export class SharedModule { }
