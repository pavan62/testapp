import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SPage } from './s.page';

const routes: Routes = [
  {
    path: '',
    component: SPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SPageRoutingModule {}
