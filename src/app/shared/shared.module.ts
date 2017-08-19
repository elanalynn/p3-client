import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './pipes/reverse.pipe';
import { MastheadModule } from './masthead/masthead.module';

@NgModule({
  imports: [
    CommonModule,
    MastheadModule
  ],
  declarations: [ReversePipe],
  exports: [ReversePipe]
})
export class SharedModule { }
