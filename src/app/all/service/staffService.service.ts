import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {StaffModel} from '../model/StaffModel';

@Injectable({
  providedIn: 'root'
})
// json-server --watch db.json
export class StaffServiceService {
  hide= true;
  title = 'Trang chủ';
  staff=new BehaviorSubject<any>("")
  active=new BehaviorSubject<any>("")
  search=new BehaviorSubject<any>("")
  constructor(private http:HttpClient) {

  }
private  url='http://localhost:3000/Staff';
  createStaff(staff:StaffModel):Observable<any>{
    return  this.http.post<any>(this.url,staff)
  }
  editStaff(id:number,staff:StaffModel):Observable<any>{
    return this.http.put<any>(this.url+'/'+id,staff)
  }
  getAllStaff():Observable<StaffModel[]>{
    return this.http.get<StaffModel[]>(this.url)
  }
  deleteStaff(id:number):Observable<any>{
    return this.http.delete<any>(this.url+"/"+id)
  }


}
