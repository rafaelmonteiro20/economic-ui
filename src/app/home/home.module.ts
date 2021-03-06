import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { PanelModule } from 'primeng/panel';
import { ChartModule } from 'primeng/chart';

import { SharedModule } from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule,

    PanelModule,
    ChartModule,

    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent],
  providers: [DecimalPipe]
})
export class HomeModule { }
