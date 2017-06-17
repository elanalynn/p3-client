import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AvatarComponent, MainMenuComponent, MastheadComponent, SocialIconsComponent } from './';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    AvatarComponent,
    MainMenuComponent,
    MastheadComponent,
    SocialIconsComponent
  ],
  exports: [
    AvatarComponent,
    MainMenuComponent,
    MastheadComponent,
    SocialIconsComponent,
  ]
})
export class MastheadModule { }
