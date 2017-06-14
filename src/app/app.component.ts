import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { CountriesService } from './countries.http.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http, private countriesService: CountriesService){}

  countryName: string= "";
  countryObj: any = null;
  cityName = "";
  cityPressure = "";
  cityHumid = "";

  searchCity(){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=0ba5e82df49a15a79cec569618c56215&q=' + this.cityName)
    .subscribe(
      (res:Response) => {
        const weatherCity = res.json();
        console.log(weatherCity)
        this.cityPressure = weatherCity.main.pressure
        this.cityHumid = weatherCity.main.humidity
      }
    )
  }
  getCountryInfo(){
    this.countriesService.getCountryDetail(this.countryName)
    .subscribe(res => this.countryObj = res.json()[0])
  }

}
 

