import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

  selectedProduct:boolean = false;
  productSelected!: string;
  addedProduct:any;

  onProductSelect(product: string){
    this.selectedProduct = true;
    this.productSelected = product;
  }


  onAddedProduct(productData: any){
    this.addedProduct = productData
  }

}
