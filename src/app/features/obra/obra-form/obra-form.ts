import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ObraService } from '../../../core/service/obra-service';
import { lastValueFrom } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneroService } from '../../../core/service/genero-service';
import {Obra} from '../../../core/model/obra';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';

@Component({
  selector: 'app-obra-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SHARED_IMPORTS
],
  templateUrl: './obra-form.html',
  styleUrl: './obra-form.css',
})
export class ObraForm {

  id: any;
  private activateRoute = inject(ActivatedRoute);
  private obraService = inject(ObraService);
  private route = inject(Router);
  obra: any;
  genero$: any;
  private generoService = inject(GeneroService);

  ano: any;

  form = new FormGroup({
    id: new FormControl<number | null>(null),
    titulo: new FormControl<string | null>(''),
    descricao: new FormControl<string | null>(''),
    anoLancamento: new FormControl<number | null>(null),
    imagemUrl: new FormControl<string | null>(''),
    tipo: new FormControl<string | null>(''),
    genero: new FormControl<number | null>(null)
  });
  constructor(){
  }

  ngOnInit(){
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.getById();
    }
    this.getGeneros();
    this.ano = new Date(Date.now()).getFullYear()+10;
  }

  public getGeneros(){
    this.generoService.getGeneros().subscribe({
      next: (data) => this.genero$ = data,
      error: (error) => console.error(error),
    })
  }

  public getById(){
    this.obraService.getObraById(this.id).subscribe({
      next: (data: Obra): void => {
        this.obra = data;
        //popular campos do formulário
        this.form.controls.id.setValue(this.obra.id);
        this.form.controls.titulo.setValue(this.obra.titulo);
        this.form.controls.descricao.setValue(this.obra.descricao);
        this.form.controls.anoLancamento.setValue(this.obra.anoLancamento);
        this.form.controls.imagemUrl.setValue(this.obra.imagemUrl);
        this.form.controls.tipo.setValue(this.obra.tipo);
        this.form.controls.genero.setValue(this.obra.genero?.id);
      },
      error: (error: any) :void => console.log(error)
    });

  }

  public salvar(){

    let obra = {
      titulo: this.form.controls.titulo.value,
      descricao: this.form.controls.descricao.value,
      anoLancamento: this.form.controls.anoLancamento.value,
      imagemUrl: this.form.controls.imagemUrl.value,
      tipo: this.form.controls.tipo.value,
      genero: {
        id: this.form.controls.genero.value
      }
    };
    console.log(obra);
    this.obraService.salvar(this.id, obra).subscribe({
      next: (obra) => {
        this.route.navigate(['obra'])
      },
      error: (error) => console.error(error)
    })

  }

}
