import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
//import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import{MaterialModule } from '../material/material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    MaterialModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}