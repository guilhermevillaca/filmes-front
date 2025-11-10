import {inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private url = 'http://localhost:8080';
  private handler = inject(HttpBackend);
  private http = new HttpClient(this.handler); // ignora interceptors

}
