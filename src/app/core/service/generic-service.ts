import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class GenericService<T> {

  protected http = inject(HttpClient);

  constructor(protected baseUrl: string) {}

  // Lista todos
  public findAll(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl);
  }

  // Busca por ID
  public findById(id: any): Observable<T> {
    return this.http.get<T>(`${this.baseUrl}/${id}`);
  }

  // Paginação
  public findAllPaginated(page: number, size: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/paginated?page=${page}&size=${size}`);
  }

  // Criação
  public create(entity: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, entity);
  }

  // Atualização
  public update(id: any, entity: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${id}`, entity);
  }

  // Exclusão
  public delete(id: any): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
