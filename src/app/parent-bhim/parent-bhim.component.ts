import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-bhim',
  templateUrl: './parent-bhim.component.html',
  styleUrls: ['./parent-bhim.component.css']
})
export class ParentBhimComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  parentName= 'Bhim'
  // suggestedName = 'Varsha'
  // surname = 'Sultanpure'
  // age = 26
  fatherName = 'Bhim'
  motherName = 'Mahananda'

  childrenNames= [
    {
    name : 'Vidya',
    Qualification :'BE-CSE',
    age : 26
  },
    {
    name : 'Roopa',
    Qualification :'BE-ENTC',
    age : 24
  },
    {
    name : 'Raghvendra',
    Qualification :'BE-MECH',
    age : 22
  }
]

aaa:any;
childData(event: any){
  this.aaa = event;
  console.log(event.name, event.age, event.Qualification);
}

}
