import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitiesComponent } from './components/cities/cities.component';
import { HomeComponent } from './components/home/home.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { TechideasComponent } from './components/techideas/techideas.component';
import { WeatherDetailsComponent } from './components/weather-details/weather-details.component';
import { WeatherComponent } from './components/weather/weather.component';

const routes: Routes = [{path:"weather/:name/:springN/:springM/:summerN/:summerM/:winterN/:winterM/:autumnN/:autumnM/:visitFrom/:visitTo",component: WeatherDetailsComponent},
{path:"", component: HomeComponent},
{path:"home", component: HomeComponent},
{path:"cities", component: CitiesComponent},
{path:"weather", component: WeatherComponent},
{path:"techideas", component:TechideasComponent},
{path:"**", component:PagenotfoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
