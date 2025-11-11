import {Component, inject} from '@angular/core';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';
import {UsuarioService} from '../../core/service/usuario-service';
import {Usuario} from '../../core/model/usuario';
import {Router} from '@angular/router';

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
  private route = inject(Router);
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
    this.route.navigate(['usuario/editar',id]);
  }

  public excluir(id: any){
    this.service.delete(id).subscribe({
      next: (data: any) => {
        this.findAllPaginated(this.currentPage);;
      },
      error: (error: any) => console.error(error)
    })
  }
}
