import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CountriesService } from './countries.http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: Http, private countriesService: CountriesService ){}

  public countryName: string;
  public countryObj: any;
  public cityName: string;
  public cityPressure: string;
  public cityHumid: string;
  public countriesList: any;
  

  searchCity(){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=0ba5e82df49a15a79cec569618c56215&q=' + this.cityName)
    .subscribe(
      (res:Response) => {
              if (res.status === 200) {
                  const weatherCity = res.json();
                  console.log(weatherCity);
                  this.cityPressure = weatherCity.main.pressure
                  this.cityHumid = weatherCity.main.humidity
              }
      },
      (error) => {
        if (error.status === 400) {
                    throw (new Error(error.status));
                }
              
        alert("oopps! " + error.statusText)
      })
  }
  getCountryInfo(){
      this.countriesService.getCountryDetail(this.countryName)
    .subscribe(res => this.countryObj = res.json()[0])
  }
  ngOnInit(){
      this.countriesService.getCountries()
    .subscribe(res => {
      this.countriesList = res.json()})
    }
  
}  
         

          
    
    

 

