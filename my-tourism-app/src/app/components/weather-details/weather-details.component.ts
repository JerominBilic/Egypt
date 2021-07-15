import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetWeatherService } from 'src/app/services/get-weather.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {

  weatherData: any;

  name:any;
  SummerM:any;
  SummerN:any;
  WinterN:any;
  WinterM:any;
  SpringM:any;
  SpringN:any;
  AutumnM:any;
  AutumnN:any;
  Vt:any;
  Vf:any;

  constructor(private route:ActivatedRoute) {

    this.route.params.subscribe(params => this.name = params['name'])
  
    this.SummerN = route.snapshot.params['summerN'];
    this.SummerM = route.snapshot.params['summerM'];
    this.WinterN = route.snapshot.params['winterN'];
    this.WinterM = route.snapshot.params['winterM'];
    this.SpringM = route.snapshot.params['springM'];
    this.SpringN = route.snapshot.params['springN'];
    this.AutumnM = route.snapshot.params['autumnM'];
    this.AutumnN = route.snapshot.params['autumnN'];
    this.Vf = route.snapshot.params['visitFrom'];
    this.Vt = route.snapshot.params['visitTo'];
    
  }

  ngOnInit() {
  }

}