import { Routes } from '@angular/router';
import {
    IllustrationComponent,
    IllustrationsComponent,
} from './';

export const ILLUSTRATION_ROUTES: Routes = [
    { path: 'illustrations', component: IllustrationsComponent },
    { path: 'illustrations/:id', component: IllustrationComponent }
];
