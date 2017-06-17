import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MastheadModule } from './masthead/masthead.module';
import { IllustrationsModule } from './illustrations/illustrations.module';
// import { ProjectsModule } from './projects';
// import { WritingModule } from './writing/writing.module';

import { AppComponent } from './app.component';

import {
  AboutComponent,
  ContactComponent,
  PageNotFoundComponent,
  ResumeComponent,
  ShadIsSmartComponent,
 } from './';

import './rxjs-extensions';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    ContactComponent,
    PageNotFoundComponent,
    ResumeComponent,
    ShadIsSmartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MastheadModule,
    IllustrationsModule,
    // ProjectsModule,
    // WritingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
