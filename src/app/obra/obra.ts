import { Component } from '@angular/core';
import { ObraService } from '../service/obra-service';
import { lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-obra',
  imports: [RouterLink],
  templateUrl: './obra.html',
  styleUrl: './obra.css',
})
export class Obra {
  obra$: any;
  currentPage = 0;
  totalPages = 0;
  pageSize = 10;
  constructor(private obraService: ObraService, private route: Router) {
  }

  ngOnInit(): void {
    this.getObraPaginado(0);
  }

  public async getObra() {
    this.obra$ = await lastValueFrom(this.obraService.getObras());
  }

  public async getObraPaginado(page: number) {
    const response = await lastValueFrom(this.obraService.getObrasPaginado(page, this.pageSize));
    this.obra$ = response.content ?? [];
    this.totalPages = response.totalPages;
    this.currentPage = response.number;
  }

  previousPage() {
    if (this.currentPage > 0) {
      this.getObraPaginado(this.currentPage - 1);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages - 1) {
      this.getObraPaginado(this.currentPage + 1);
    }
  }

  goToPage(page: number) {
    this.getObraPaginado(page);
  }

  //redirecionar para componente de edição de obra
  public editar(id: number) {
    this.route.navigate(['obra/editar', id]);
  }

  //chamar um método do service que fará exclusão
  public excluir(id: number) {

  }

}
