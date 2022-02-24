import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';


import { SharedRoutingModule } from './shared-routing.module';
import { SharedComponent } from './shared.component';
import { NavComponent } from './nav/nav.component';
import { TestComponent } from './test/test.component';


@NgModule({
  declarations: [
    SharedComponent,
    NavComponent,
    TestComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule
  ]
})
export class SharedModule { }
