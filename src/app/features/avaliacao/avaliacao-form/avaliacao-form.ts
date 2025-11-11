import {Component, inject, Input} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {AvaliacaoService} from '../../../core/service/avaliacao-service';
import {BsModalRef} from 'ngx-bootstrap/modal';
import {Observable} from 'rxjs';
import {Obra} from '../../../core/model/obra';
import {ObraService} from '../../../core/service/obra-service';
import {Usuario} from '../../../core/model/usuario';
import {UsuarioService} from '../../../core/service/usuario-service';

@Component({
  selector: 'app-avaliacao-form',
  imports: [
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './avaliacao-form.html',
  styleUrl: './avaliacao-form.css',
})
export class AvaliacaoForm {

  @Input() modalRef?: BsModalRef | null;
  @Input() avaliacao_id?: any = '';

  id: any;
  private activatedRoute = inject(ActivatedRoute);
  private service = inject(AvaliacaoService);

  obra$: Obra[] = [];
  private obraService = inject(ObraService);
  usuario$: Usuario[] = [];
  private usuarioService = inject(UsuarioService);

  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    nota: new FormControl<number | null>(null),
    comentario: new FormControl<string | null>(''),
    dataAvaliacao: new FormControl<string | null>(null),
    usuario: new FormControl<number | null>({value: null, disabled: true}),
    obra: new FormControl<number | null>({value: null, disabled: true})
  });

  ngOnInit(): void {
    console.log(this.avaliacao_id);
    this.id = this.activatedRoute.snapshot.params['id'] || this.avaliacao_id;
    if(this.avaliacao_id) {
      this.findById(this.avaliacao_id);
    }
    this.findObras();
    this.findUsuarios();
  }

  public findById(id_:any): void {
    this.service.findById(id_).subscribe({
      next: (data: any) => {
        this.form.controls.id.setValue(data.id);
        this.form.controls.nota.setValue(data.nota);
        this.form.controls.comentario.setValue(data.comentario);
        this.form.controls.dataAvaliacao.setValue(data.dataAvaliacao);
        this.form.controls.usuario.setValue(data.usuario.id);
        this.form.controls.obra.setValue(data.obra.id);
      },
      error: (error) => console.error(error)
    })
  }

  public findObras(){
    this.obraService.findAll().subscribe({
      next: (data) => this.obra$ = data,
      error: (error) => console.error(error)
    })
  }

  public findUsuarios(){
    this.usuarioService.findAll().subscribe({
      next: (data) => this.usuario$ = data,
      error: (error) => console.error(error)
    })
  }

 public create(){
   console.log("teste");
 }

}
