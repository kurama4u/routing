import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CountriesService{
   
    constructor(private http: Http){
    }
    public getCountryDetail(countryName: string){
        let url: string = 'https://restcountries.eu/rest/v2/name/'+ countryName +'?fullText=true';
        return this.http.get(url);
    }     
}