import { BrowserModule } from '@angular/platform-browser';
import { PathLocationStrategy } from '@angular/common';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MastheadModule } from './masthead/masthead.module';
import { IllustrationsModule } from './illustrations/illustrations.module';
import { ProjectsModule } from './projects/projects.module';
import { SharedModule } from './shared/shared.module';
import { MessageService } from './shared/providers/message.service';

import { AppComponent } from './app.component';

import {
  AboutComponent,
  ContactComponent,
  PageNotFoundComponent,
  ResumeComponent,
  ShadIsSmartComponent,
 } from './';

import './rxjs-extensions';
import { SuccessComponent } from './success/success.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SuccessComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MastheadModule,
    IllustrationsModule,
    ProjectsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [
    MessageService,
    PathLocationStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
