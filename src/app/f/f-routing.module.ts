import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FPage } from './f.page';

const routes: Routes = [
  {
    path: '',
    component: FPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FPageRoutingModule {}
