import {Component, inject, Input, SimpleChanges, TemplateRef} from '@angular/core';
import {AvaliacaoService} from '../../core/service/avaliacao-service';
import {Avaliacao} from '../../core/model/avaliacao';
import {SHARED_IMPORTS} from '../../shared/util/shared-imports';
import {Obra} from '../../core/model/obra';
import {DecimalPipe, SlicePipe} from '@angular/common';
import {BsModalRef, BsModalService, ModalModule} from 'ngx-bootstrap/modal';
import {AvaliacaoForm} from './avaliacao-form/avaliacao-form';

@Component({
  selector: 'app-avaliacao',
  imports: [SHARED_IMPORTS, SlicePipe, DecimalPipe, ModalModule, AvaliacaoForm],
  templateUrl: './avaliacao-list.html',
  styleUrl: './avaliacao-list.css',
})
export class AvaliacaoList {

  @Input() obra!: Obra;
  currentPage = 0;
  totalPages: number = 0;
  pageSize = 10;

  modalRef?: BsModalRef | null;
  private modalService = inject(BsModalService);

  private service = inject(AvaliacaoService);
  avaliacao$: any;

  avaliacao_id: any;

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

  public editar(template2: TemplateRef<void>, avaliacao_id: any){
    this.avaliacao_id = avaliacao_id;
    this.modalRef = this.modalService.show(template2);
  }

  public excluir(id: any){
    console.log(id);
  }

  public visualizar(templateEditar: TemplateRef<void>, avaliacao_id: any) {
    this.avaliacao_id = avaliacao_id;
    this.modalRef = this.modalService.show(templateEditar, { class: 'modal-xl' });
  }

}
