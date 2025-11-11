import {Component, inject} from '@angular/core';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';
import {UsuarioService} from '../../core/service/usuario-service';
import {Usuario} from '../../core/model/usuario';

@Component({
  selector: 'app-usuario',
  imports: [SHARED_IMPORTS],
  templateUrl: './usuario-list.html',
  styleUrl: './usuario-list.css',
})
export class UsuarioList {

  currentPage = 0;
  totalPages: number = 0;
  pageSize = 15;
  private service = inject(UsuarioService);
  usuario$: Usuario[] = [];

  ngOnInit() {
    this.findAllPaginated(0);
  }

  public getUsuarios() {
    this.service.findAll().subscribe({
      next: (data: any) => this.usuario$ = data,
      error: (error: any) => console.error(error)
    })
  }

  public findAllPaginated(page: number) {
    this.service.findAllPaginated(page, this.pageSize).subscribe({
      next: (data: any) => {
        this.usuario$ = data.content ?? [];
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
    console.log(id);
  }

  public excluir(id: any){
    console.log(id);
  }
}
