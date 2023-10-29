import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradeComponent } from './containers/grade/grade.component';
import { GradeFormComponent } from './containers/grade-form/grade-form.component';
import { GradeResolver } from './guards/grade.resolver';

const routes: Routes = [
  { path: '', component: GradeComponent },
  { path: 'new', component: GradeFormComponent, resolve: { grade: GradeResolver}},
  { path: 'view/:idcliente', component: GradeFormComponent, resolve: { grade: GradeResolver} },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }
