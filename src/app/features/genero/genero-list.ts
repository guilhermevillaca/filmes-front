import {Component, inject} from '@angular/core';
import {GeneroService} from '../../core/service/genero-service';
import {Genero} from '../../core/model/genero';
import {RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';

@Component({
  selector: 'app-genero',
  imports: [SHARED_IMPORTS],
  templateUrl: './genero-list.html',
  styleUrl: './genero-list.css',
})
export class GeneroList {

  private service = inject(GeneroService);
  genero$: Genero[] = [];
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 2;

  ngOnInit() {
    this.getPaginado(0);
  }

  public getGeneros(){
    this.service.getGeneros().subscribe({
      next: (data: any) => this.genero$ = data,
      error: (error: any) => console.error(error)
    });
  }

  public getPaginado(page: number) {
    this.service.getPaginado(page, this.pageSize).subscribe({
      next: (data) => {
        this.genero$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPaginado(page);
  }

}
