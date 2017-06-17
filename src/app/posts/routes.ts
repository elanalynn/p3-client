import { Routes } from '@angular/router';
import {
    PostComponent,
    PostsComponent
} from './';

export const POSTS_ROUTES: Routes = [
    { path: 'posts', component: PostsComponent },
    { path: 'posts/:id', component: PostComponent }
];
