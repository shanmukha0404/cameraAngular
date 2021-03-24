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
  constructor(private commonService:CommonService,private router :Router) { }

  ngOnInit(): void {
    this.cartDisplay();
  }

  cartDisplay()
  {
    this.commonService.getAllCartItems().subscribe((resp)=>{
    this.data=resp;
    console.log(this.data)
    });

  }

}
