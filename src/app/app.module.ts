import { BrowserModule } from '@angular/platform-browser';
import { PathLocationStrategy } from '@angular/common';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MastheadModule } from './masthead/masthead.module';
import { SharedModule } from './shared/shared.module';
import { MessageService } from './shared/providers/message.service';

import { AppComponent } from './app.component';

import {
  AboutComponent,
  ContactComponent,
  IllustrationsComponent,
  IllustrationService,
  PageNotFoundComponent,
  ProjectsComponent,
  ProjectService,
  ResumeComponent,
  ShadIsSmartComponent,
  SuccessComponent
 } from './views/index';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    IllustrationsComponent,
    PageNotFoundComponent,
    ProjectsComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MastheadModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    IllustrationService,
    MessageService,
    ProjectService,
    PathLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
