import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { GetCityNamesService } from 'src/app/services/get-city-names.service';
import { prohibitedwords } from 'src/app/services/prohibitedwords'


@Component({
  selector: 'app-techideas',
  templateUrl: './techideas.component.html',
  styleUrls: ['./techideas.component.css']
})
export class TechideasComponent implements OnInit {

  citynames:any;

  constructor(private _cityNames:GetCityNamesService, private form:FormBuilder){ }

  ngOnInit(){
    this.citynames = this._cityNames.getNames();
  }

  techIdeasForm = this.form.group({
    name:["",[Validators.required, Validators.minLength(2), prohibitedwords(RegExp("tourist"))]],
    age:["", [Validators.required]],
    email:["",[Validators.required]],
    city:["",[Validators.required]],
    brief:["",[Validators.required, Validators.minLength(100),prohibitedwords(RegExp("nothing"))]]
  });

  get nameControl(){
    return this.techIdeasForm.get('name')!;
  }
  get emailControl(){
    return this.techIdeasForm.get('email')!;
  }
  get cityControl(){
    return this.techIdeasForm.get('city')!;
  }
  get briefControl(){
    return this.techIdeasForm.get('brief')!;
  }


  onClick(){
    console.log(this.techIdeasForm.controls.brief.value)
    this.techIdeasForm.reset();
  }

}
