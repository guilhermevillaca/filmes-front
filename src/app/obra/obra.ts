import { Component } from '@angular/core';
import { ObraService } from '../services/obra-service';
import { lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obra',
  imports: [],
  templateUrl: './obra.html',
  styleUrl: './obra.css',
})
export class Obra {
  obra$: any;
  constructor(private obraService: ObraService, private route: Router) {
  }

  ngOnInit(): void {
    this.getObra();
  }

  public async getObra() {
    this.obra$ = await lastValueFrom(this.obraService.getObras());
  }

  //redirecionar para componente de edição de obra
  public editar(id: number) {
    this.route.navigate(['obra/editar', id]);
  }

  //chamar um método do service que fará exclusão
  public excluir(id: number) {

  }

}
