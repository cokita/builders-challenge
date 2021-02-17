import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout/layout.component';
import { InternalRoutingModule } from './internal-routing.module';
import { SharedModule } from '../shared/shared.module';
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [HomeComponent, LayoutComponent, LocationComponent],
  imports: [
    CommonModule,
    SharedModule,
    InternalRoutingModule
  ]
})
export class InternalModule { }
