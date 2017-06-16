import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProfileService {
    constructor(private http: Http){

    }

    saveProf(){
        let url: string = 'https://reqres.in/api/users'
        return this.http.post(url, {name: 'kurama',job: 'webdep',city: 'mandaluyong'})
        .map((res:Response) => res.json())
        .catch(this.errorHandler) ;
    }
        private errorHandler(error: Response){
            console.error('oops!' + error);
            return Observable.throw(error || "Error on Server");
        }
}


