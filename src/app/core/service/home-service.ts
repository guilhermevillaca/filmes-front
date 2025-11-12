import {inject, Injectable} from '@angular/core';
import {HttpBackend, HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HomeService {

  private baseUrl: string = 'http://localhost:8080/home';

  private url = 'http://localhost:8080';
  private handler = inject(HttpBackend);
  private http = new HttpClient(this.handler); // ignora interceptors

  public findTop5ByTipo(tipo: any): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findByTipo/${tipo}?page=0&size=4`);
  }

  public findRandomObras(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/findRandomObras`);
  }

}
