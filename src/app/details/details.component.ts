import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  products: any={};
  keys:any=[];
  selectedId='';

  constructor(private service:SharedService, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.selectedId= params.get('id');
      this.service.getProduct(this.selectedId).subscribe(data=>{
        this.products=data;
        for(const key in this.products){
          if(key !=null)
           this.keys.push(key);
        }
      })
    })

  }
}
