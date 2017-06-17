import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditorModule } from 'primeng/components/editor/editor';
import { SharedModule } from 'primeng/components/common/shared';
import { AdminModule } from './admin/admin.module';
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
    // BrowserAnimationsModule,
    EditorModule,
    FormsModule,
    HttpModule,
    AdminModule,
    MastheadModule,
    IllustrationsModule,
    ProjectsModule,
    PostsModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
