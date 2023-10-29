import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { SharedModule } from '../shared/shared.module';
import { GradeRoutingModule } from './grade-routing.module';
import { GradeComponent } from './containers/grade/grade.component';
import { GradeFormComponent } from './containers/grade-form/grade-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GradeListComponent } from './components/grade-list/grade-list.component';




@NgModule({
  declarations: [
    GradeComponent,
    GradeFormComponent,
    GradeListComponent
  ],
  imports: [
    CommonModule,
    GradeRoutingModule,
    AppMaterialModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class GradeModule { }
