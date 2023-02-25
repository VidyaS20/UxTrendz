import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() selectedProduct:boolean = false;
  @Input() productSelected: string | undefined;
  @Output() addedProduct = new EventEmitter<any>();


  onAddProduct(){
    this.addedProduct.emit(this.productSelected);
  }



}
