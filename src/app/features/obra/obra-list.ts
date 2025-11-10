import {Component, inject} from '@angular/core';

import { lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import {ObraService} from '../../core/service/obra-service';
import {Paginator} from '../../shared/components/paginator/paginator';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';

@Component({
  selector: 'app-obra',
  imports: [SHARED_IMPORTS],
  templateUrl: './obra-list.html',
  styleUrl: './obra-list.css',
})
export class ObraList {
  obra$: any;
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 15;
  private service = inject(ObraService);
  private route = inject(Router);

  ngOnInit(): void {
    this.getPaginado(0);
  }

  public async getObra() {
    this.service.getObras().subscribe({
      next: (data) => this.obra$ = data,
      error: (error) => console.error(error),
    })
  }

  public getPaginado(page: number) {
    this.service.getPaginado(page, this.pageSize).subscribe({
      next: (data) => {
        this.obra$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      }
    });
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
