import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookService {

  private baseUrl = 'http://localhost:5000/phonebook/';
  
  phoneBooks$ = this.http.get<any[]>(this.baseUrl);

  constructor(private http: HttpClient) { }

  public post(payload: any): Observable<any>{
    return this.http.post(this.baseUrl, payload);
  }


}
