import {Component, inject, Input, SimpleChanges} from '@angular/core';
import {AvaliacaoService} from '../../core/service/avaliacao-service';
import {Avaliacao} from '../../core/model/avaliacao';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';
import {Obra} from '../../core/model/obra';
import {SlicePipe} from '@angular/common';

@Component({
  selector: 'app-avaliacao',
  imports: [SHARED_IMPORTS, SlicePipe],
  templateUrl: './avaliacao-list.html',
  styleUrl: './avaliacao-list.css',
})
export class AvaliacaoList {

  @Input() obra!: Obra;
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 3;

  private service = inject(AvaliacaoService);
  avaliacao$: any;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['obra'] && this.obra?.id) {
      this.findByObra_id(0);
    }
  }

  public findByObra_id(page: any){
    console.log(this.obra.id);
    this.service.findByObra_id(this.obra?.id, this.currentPage, this.pageSize).subscribe({
      next: (data) => {
        this.avaliacao$ = data.content ?? [];
        this.currentPage = data.number;
        this.totalPages = data.totalPages;
      },
      error: (error) => console.error(error)
    });
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.findByObra_id(page);
  }

  public editar(id: any){
    console.log(id);
  }

  public excluir(id: any){
    console.log(id);
  }

  public visualizar(id: any){
    console.log(id);
  }

}
