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
    this.findAllPaginated(0);
  }

  public async findAll() {
    this.service.findAll().subscribe({
      next: (data) => this.obra$ = data,
      error: (error) => console.error(error),
    })
  }

  public findAllPaginated(page: number) {
    this.service.findAllPaginated(page, this.pageSize).subscribe({
      next: (data) => {
        this.obra$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.findAllPaginated(page);
  }

  //redirecionar para componente de edição de obra
  public editar(id: number) {
    this.route.navigate(['obra/editar', id]);
  }

  public excluir(id: any) {
    this.service.delete(id).subscribe({
      next: (data) => {
        this.findAllPaginated(this.currentPage);
      },
      error: (error: any) => console.error(error)
    })
  }

}
