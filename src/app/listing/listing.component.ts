import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {

  constructor(private commonService:CommonService) { }
  itemLists:any;

      
  ngOnInit(): void {
    this.commonService.getAllItems().subscribe((resp)=>{this.itemLists=resp})
  }

}
