import {Component, inject} from '@angular/core';
import {GeneroService} from '../../core/service/genero-service';
import {Genero} from '../../core/model/genero';
import {Router, RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';

@Component({
  selector: 'app-genero',
  imports: [SHARED_IMPORTS],
  templateUrl: './genero-list.html',
  styleUrl: './genero-list.css',
})
export class GeneroList {

  private service = inject(GeneroService);
  private route = inject(Router);
  genero$: Genero[] = [];
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 2;

  ngOnInit() {
    this.findAllPaginated(0);
  }

  public findAll(){
    this.service.findAll().subscribe({
      next: (data: any) => this.genero$ = data,
      error: (error: any) => console.error(error)
    });
  }

  public findAllPaginated(page: number) {
    this.service.findAllPaginated(page, this.pageSize).subscribe({
      next: (data) => {
        this.genero$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.findAllPaginated(page);
  }

  public editar(id: any){
    this.route.navigate([`/genero/editar/`, id]);
  }

  public excluir(id: any) {
    console.log(id);
  }

}
