import { Component, OnInit } from '@angular/core';
import { SharedService}  from '../shared.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  products :any = [];
  keys : any = [];

  constructor(private service: SharedService) { }

  ngOnInit() {
    this.service.getDetails('http://localhost:8080/AccoliteCRUDRestService/student').subscribe(data => {
      this.products= data;  
      const product1 :any = data[0];
      for (const key in product1)
      {
        this.keys.push(key);
      }
    });
   


  }

}
