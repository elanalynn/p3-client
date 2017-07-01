import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { MastheadModule } from './masthead/masthead.module';
import { IllustrationsModule } from './illustrations/illustrations.module';
import { ProjectsModule } from './projects/projects.module';
import { PostsModule } from './posts/posts.module';
import { SharedModule } from './shared/shared.module';

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
    SuccessComponent
  ],
  imports: [
    BrowserModule,
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
