import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ObraService } from '../../service/obra-service';
import { lastValueFrom } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-obra-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink
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
  }

  public async getById(){
    this.obra = await lastValueFrom(this.obraService.getObraById(this.id));
    //popular campos do formulário
    this.form.controls.id.setValue(this.obra.id);
    this.form.controls.titulo.setValue(this.obra.titulo);
    this.form.controls.descricao.setValue(this.obra.descricao);
    this.form.controls.anoLancamento.setValue(this.obra.anoLancamento);
    this.form.controls.imagemUrl.setValue(this.obra.imagemUrl);
    this.form.controls.tipo.setValue(this.obra.tipo);
    this.form.controls.genero.setValue(this.obra.genero?.id);
  }

  public salvar(){
    
    let obra = {
      id: this.id,
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
    this.obraService.salvar(obra).subscribe(
      obra => {
        this.route.navigate(['obra']);
      },
      erro => {
        console.log(erro);
      }
    )

  }

}
