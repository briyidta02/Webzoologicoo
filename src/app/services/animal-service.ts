import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable}from'rxjs':
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
apiUri = '/api/animals';

httpOptions = new HttpHeaders().set('Content-Type', 'application/json');

@Injectable({
  providedIn: 'root',
  
})
export class AnimalService {
  constructor(private http:HttpClient){}
}

getAllAnimalsData(): Observable<any> {
return this.http.get<any>(this.apiUri)
}
