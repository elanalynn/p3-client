import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { APP_ROUTES } from './routes';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { IllustrationsComponent } from './illustrations/illustrations.component';
import { IllustrationComponent } from './/illustrations/illustration/illustration.component';
import { MastheadComponent } from './masthead/masthead.component';
import { AvatarComponent } from './masthead/avatar/avatar.component';
import { MainMenuComponent } from './masthead/main-menu/main-menu.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './projects/project/project.component';
import { SocialIconsComponent } from './masthead/social-icons/social-icons.component';
import { ResumeComponent } from './resume/resume.component';
import { ShadIsSmartComponent } from './shad-is-smart/shad-is-smart.component';
import { WritingModule, WritingComponent } from './writing';
import './rxjs-extensions';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    AvatarComponent,
    ContactComponent,
    MainMenuComponent,
    MastheadComponent,
    IllustrationComponent,
    IllustrationsComponent,
    ProjectComponent,
    ProjectsComponent,
    ResumeComponent,
    ShadIsSmartComponent,
    SocialIconsComponent,
    WritingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(APP_ROUTES),
    WritingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
