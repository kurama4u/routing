import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

interface PROFOBJ {
    name: string;
    job: string;
    city: string;
}

@Injectable()
export class ProfileService {
    constructor(private http: Http){

    }

    saveProf(){
        let url: string = 'https://reqres.in/api/users';
        let data: PROFOBJ;
        data = { name: 'kurama', job: 'NA', city: 'mandaluyong'}
        return this.http.post(url, data)
        .map((res:Response) => res.json())
        .catch(this.errorHandler) ;
    }
        private errorHandler(error: Response){
            console.error('oops!' + error);
            return Observable.throw(error || "Error on Server");
        }
}


                                                            