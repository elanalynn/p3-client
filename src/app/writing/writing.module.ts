import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { WritingComponent } from './writing.component';
import { WritingService } from './writing.service';

@NgModule({
  imports: [
    CommonModule,
    // WritingComponent
  ],
  providers: [
    WritingService
  ],
  declarations: []
})
export class WritingModule { }
