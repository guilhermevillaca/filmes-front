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
    this.getPaginado(0);
  }

  public getUsuarios() {
    this.service.getUsuarios().subscribe({
      next: (data) => this.usuario$ = data,
      error: (error) => console.error(error)
    })
  }

  public getPaginado(page: number) {
    this.service.getPaginado(page, this.pageSize).subscribe({
      next: (data) => {
        this.usuario$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      }
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.getPaginado(page);
  }

  public editar(id: any){
    console.log(id);
  }

  public excluir(id: any){
    console.log(id);
  }
}
