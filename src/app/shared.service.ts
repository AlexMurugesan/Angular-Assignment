import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  prourl='http://localhost:8080/AccoliteCRUDRestService/student';
  constructor(private http: HttpClient) {
    }
    
  getDetails(url :string)
  {
    return this.http.get(this.prourl);
  }
  getProduct(id:string){
    
    return  this.http.get(this.prourl + '/'+id);
  }
  }

