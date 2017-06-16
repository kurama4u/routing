import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';


@Injectable()
export class CountriesService{
   
    constructor(private http: Http){
    }
    
    public getCountryDetail(countryName: string) {
        let url: string = 'https://restcountries.eu/rest/v2/name/'+ countryName +'?fullText=true';
        return this.http.get(url)

    } 
   
    public getCountries(){
        let url: string = 'https://restcountries.eu/rest/v2/all';
        return this.http.get(url);
    }  
}

    
 
 

     