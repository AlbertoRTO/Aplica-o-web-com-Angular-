import { ShoppingCartService } from './shopping-cart.services';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'mt-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  constructor(private ShoppingCartService: ShoppingCartService) { }

  ngOnInit() {
  }

  items(): any[] {
    return this.ShoppingCartService.items;
  }

  clear(){
    this.ShoppingCartService.clear()
  }

  removeItem(item: any){
    this.ShoppingCartService.removerItem(item)
  }

  addItem(item: any){
    this.ShoppingCartService.addItem(item)
  }


  total(): number{
    return this.ShoppingCartService.total()
  }

}
