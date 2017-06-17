import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MastheadModule } from './masthead/masthead.module';
import { IllustrationsModule } from './illustrations/illustrations.module';
import { ProjectsModule } from './projects/projects.module';
import { PostsModule } from './posts/posts.module';

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
    MastheadModule,
    IllustrationsModule,
    ProjectsModule,
    PostsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
