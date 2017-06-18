import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { IllustrationComponent, IllustrationsComponent } from './';
import { IllustrationsService } from './illustrations.service';
import { ILLUSTRATION_ROUTES } from './routes';

@NgModule({
  declarations: [
    IllustrationsComponent,
    IllustrationComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ILLUSTRATION_ROUTES),
    SharedModule
  ],
  providers: [
    IllustrationsService
  ],
  exports: [
    IllustrationsComponent,
    IllustrationComponent
  ]
})
export class IllustrationsModule { }
