import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  data:any;
  totalLength:number;
  totalAmount:number=0;

  constructor(private commonService:CommonService,private router :Router) { }

  ngOnInit(): void {
    this.cartDisplay();
  }

  cartDisplay()
  {
    this.commonService.getAllCartItems().subscribe((resp)=>{
    this.data=resp;
    console.log(this.data)
    this.totalPrice();
    });
  }

  totalPrice(){
    // console.log(this.data.length);
    this.totalLength = this.data.length;
    // console.log(this.totalLength)
    
    console.log(this.data[0].price);
    
    for(let i=0;i<this.totalLength;i++){
      console.log(this.data[i].price);
      this.totalAmount += parseInt(this.data[i].price);
    }
    console.log(this.totalAmount)
    
  }



  delete(d)
  {
    location.reload();
    this.commonService.deleteCart(d).subscribe(()=>
    {
      this.cartDisplay();      
    });
    this.cartDisplay();
  }

}
