import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
name :string = 'Vidya';
age:number= 26;
city:string = 'Solapur';
state:string = 'Maharashtra';
surname:string = '';

changeName(){
  // this.name = event.target.value;
  this.name = 'Nagaraj';
}

}
