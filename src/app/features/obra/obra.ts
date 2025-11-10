import { Component } from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {ObraService} from '../../core/service/obra-service';
import {Paginator} from '../../shared/components/paginator/paginator';

@Component({
  selector: 'app-obra',
  imports: [RouterLink, Paginator],
  templateUrl: './obra.html',
  styleUrl: './obra.css',
})
export class Obra {
  obra$: any;
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 15;
  constructor(private obraService: ObraService, private route: Router) {
  }

  ngOnInit(): void {
    this.getPaginado(0);
  }

  public async getObra() {
    this.obra$ = await lastValueFrom(this.obraService.getObras());
  }

  public async getPaginado(page: number) {
    const response = await lastValueFrom(this.obraService.getPaginado(page, this.pageSize));
    this.obra$ = response.content ?? [];
    //this.totalPages = response.totalPages;
    this.currentPage = response.number;
    this.totalPages = response.totalPages;
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPaginado(page);
  }

  //redirecionar para componente de edição de obra
  public editar(id: number) {
    this.route.navigate(['obra/editar', id]);
  }

  //chamar um método do service que fará exclusão
  public excluir(id: number) {

  }

  protected readonly ObraService = ObraService;
}
