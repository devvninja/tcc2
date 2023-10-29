import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { SharedModule } from '../shared/shared.module';
import { SobreRoutingModule } from './sobre-routing.module';
import { SobreComponent } from './sobre/sobre.component';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    SobreComponent
  ],
  imports: [
    CommonModule,
    SobreRoutingModule,
    SharedModule,
    MatButtonModule,
    MatCardModule,
      MatToolbarModule
    ]


})
export class SobreModule { }
