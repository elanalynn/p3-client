import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { IPost } from './post/post.model';

@Injectable()
export class PostService {

    post: IPost;
    posts: IPost[];
    api = 'https://p3-server.herokuapp.com';

    constructor (
        private http: Http
    ) {}

    public getPosts(): Observable<IPost[]> {
        const url = `${this.api}/posts`;
        return this.http.get(url).map((response: Response) => {
            return <IPost[]>response.json();
        }).catch(this.handleError);
    }

    public getPost(postId: number): Observable<Response> {
        const url = `${this.api}/posts/${postId}`;
        return this.http.get(url);
    }

    public handleError(error: Response) {
        return Observable.throw(error.statusText);
    }

}
