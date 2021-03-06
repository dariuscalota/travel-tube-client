import {Http} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {Video} from '../models/video';

@Injectable()
export class VideoService {
    private _url = "https://api-traveltube.herokuapp.com/videos";

    constructor(private _http: Http) {

    }

    getVideos(params?:string) : Observable<Video[]> {
        params = (params ? params : "");
        return this._http.get(this._url+"?search="+params)
            .map(res => res.json());
    }
    getVideo(id:string) : Observable<Video> {
        return this._http.get(this._url+"/"+id)
            .map(res => res.json());
    }
}