import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  members=[{
    name:'Vidya',
    age: 26,
    qualification: 'BE-CSE',
    city: 'Solapur'
  },
  {name:'Rupa',
  age: 24,
  qualification: 'BE-ENTC',
  city: 'Solapur'},
  {
    name:'Vidya',
    age: 22,
    qualification: 'BE-MECH',
    city: 'Solapur'
  }
  ]

  users:any=[]
  isVidyaDIV:boolean=false;
  isSultanpureDIV:boolean=false;
  // isValid:boolean= false;
  // isValid1:boolean = false;
  // onVidya(){
  //   this.isValid = true;
  // }
  // onSultanpure(){
  //   this.isValid1 = true;
  // }
  onSubmit(value: any) {
    console.log(value)
    if(value == 'vidya'){
      this.isVidyaDIV = true;
    } else {
      this.isSultanpureDIV = true;
    }

  }

  onsubmit1(xxx: any){
    this.users.push(
      {
        username:xxx.value
      }
    )

    console.log("this.users", this.users)

    if(this.users.length>3){
      // alert('More than three values')
      this.router.navigate(['products'])
    }
  }
  age:any=[]

  onsubmit2(aaa:any){
    this.age.push(
      {
        age:aaa.value
      }
    )
    console.log("submitted age", aaa.value)
  }

  onRemoveUser(index:any){
    console.log('index on removing',index)
    this.users.splice(index,1)
  }
  onRemoveAge(index:any){
    this.age.splice(index,1)
    console.log('on Removing of age:', index)
  }

}
