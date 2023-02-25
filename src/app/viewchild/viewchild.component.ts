import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  templateUrl: './viewchild.component.html',
  styleUrls: ['./viewchild.component.css']
})
export class ViewchildComponent implements OnInit {
childuser = 'Child Name'
  constructor() { }

  ngOnInit(): void {
  }
  onUpdateUser(){
    alert(this.childuser)
  }

}
