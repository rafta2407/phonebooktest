import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhoneBookEntryService {

  private baseUrl = 'http://localhost:5000/entry/';

  constructor(private http: HttpClient) { }

  public post(entry: any): Observable<any>{
    return this.http.post(this.baseUrl, entry);
  }

  public get(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl);
  }

  public getEntriesForPhoneBook(id: number): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + id);
  }
}
