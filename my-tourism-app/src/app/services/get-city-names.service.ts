import { Injectable } from '@angular/core';
import { GetWeatherService } from './get-weather.service';

@Injectable({
  providedIn: 'root'
})
export class GetCityNamesService {

  arrayWeather:any;
  arrayNames:any =[];

  constructor(private _getW: GetWeatherService) { }


getNames(){
  this.arrayWeather=this._getW.getWeather();

  console.log(this.arrayWeather);

  for(var i=0;i<this.arrayWeather.length;i++){
    this.arrayNames.push(this.arrayWeather[i].name);
  }
  return this.arrayNames;
}

}
