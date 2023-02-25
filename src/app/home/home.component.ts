import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MobileComponent } from '../products/mobile/mobile.component';
import { ViewchildComponent } from '../viewchild/viewchild.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
parentUserName = 'Parent Name'
  constructor() { }
  @ViewChild(ViewchildComponent) child! : ViewchildComponent;

  ngOnInit(): void {
  }

  childProperty(){
    this.child.childuser = this.parentUserName;

  }

  childMethod(){
    this.child.onUpdateUser()
  }
  statusOnline:boolean= true

  products =[
    {
      name: 'Mobile'
    },
    {
      name: 'Refrigerator'
    },
    {
      name: 'Tv'
    },
    {
      name: 'Washing Machine'
    }
  ]
}
