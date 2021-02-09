import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FPageRoutingModule } from './f-routing.module';

import { FPage } from './f.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FPageRoutingModule
  ],
  declarations: [FPage]
})
export class FPageModule {}
