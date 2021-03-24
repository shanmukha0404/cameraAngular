import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  product_id: number;
  data:any;
  constructor(private actRoute : ActivatedRoute, private commonService:CommonService,private router:Router)
  {
    this.product_id= this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    let p_id =parseInt(this.actRoute.snapshot.params.id);
    this.product_id=p_id;
    this.display();
  }

  display()
  {
    this.commonService.display(this.product_id).subscribe(resp=>{
      this.data=resp;
      console.log(this.data);
    }
    )}

    cart()
    {
      this.router.navigate(['/cart'])
    }
  

}
