import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  product_id: number;
  constructor(private actRoute : ActivatedRoute)
  {
    this.product_id= this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
  }


}
