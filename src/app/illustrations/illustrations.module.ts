import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IllustrationComponent, IllustrationsComponent } from './';
import { IllustrationsService } from './illustrations.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    IllustrationsService
  ],
  declarations: [
    IllustrationsComponent,
    IllustrationComponent
  ],
  exports: [
    IllustrationsComponent,
    IllustrationComponent
  ]
})
export class IllustrationsModule { }
