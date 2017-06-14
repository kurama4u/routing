import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private http: Http){}
  
  cityName = "";
  cityPressure = "";
  searchCity(){
    this.http.get('http://api.openweathermap.org/data/2.5/weather?APPID=0ba5e82df49a15a79cec569618c56215&q=' + this.cityName)
    .subscribe(
      (res:Response) => {
        const weatherCity = res.json();
        console.log(weatherCity)
        this.cityPressure = weatherCity.main.pressure
      }
    )
  }

}
 

