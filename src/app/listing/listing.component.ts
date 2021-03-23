import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private commonService:CommonService,private router :Router) { }
  itemLists:any;

      
  ngOnInit(): void {
    this.commonService.getAllItems().subscribe((resp)=>{this.itemLists=resp})
  }

  landingPage(card)
  {
    this.router.navigate(['/landing',card.id])
  }

}
