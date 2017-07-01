import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ADMIN_ROUTES } from './routes';

@NgModule({
  imports: [
    RouterModule.forChild(ADMIN_ROUTES)
  ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
