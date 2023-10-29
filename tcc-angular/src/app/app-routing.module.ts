import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { GradeFormComponent } from './grade/containers/grade-form/grade-form.component';

const routes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'sobre', pathMatch: 'full', redirectTo: 'sobre' },
  { path: 'upload', pathMatch: 'full', redirectTo: 'upload' },
  { path: '', pathMatch: 'full', redirectTo: 'upload' },

   {
    path: 'grade',
    loadChildren: () => import('./grade/grade.module').then(m => m.GradeModule)
  },
  {
    path: 'sobre',
    loadChildren: () => import('./sobre/sobre.module').then(m => m.SobreModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./upload-file/upload-file.module').then(m => m.UploadFileModule)
  },

 //{
 //  path: 'login',
//   loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
//  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }





