import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SPageRoutingModule } from './s-routing.module';

import { SPage } from './s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SPageRoutingModule
  ],
  declarations: [SPage]
})
export class SPageModule {}
