import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ObraService } from '../../../core/service/obra-service';
import { lastValueFrom } from 'rxjs';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GeneroService } from '../../../core/service/genero-service';
import {Obra} from '../../../core/model/obra';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';
import {AvaliacaoList} from '../../avaliacao/avaliacao-list';
import {Genero} from '../../../core/model/genero';

@Component({
  selector: 'app-obra-form',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SHARED_IMPORTS,
    AvaliacaoList
  ],
  templateUrl: './obra-form.html',
  styleUrl: './obra-form.css',
})
export class ObraForm {

  id: any;
  private activateRoute = inject(ActivatedRoute);
  private service = inject(ObraService);
  private route = inject(Router);
  obra: any;
  genero$: any;
  private generoService = inject(GeneroService);

  ano: any;

  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    titulo: new FormControl<string | null>(''),
    descricao: new FormControl<string | null>(''),
    anoLancamento: new FormControl<number | null>(null),
    imagemUrl: new FormControl<string | null>(''),
    tipo: new FormControl<string | null>(''),
    genero: new FormControl<string | null>(null)
  });
  constructor(){
  }

  ngOnInit(){
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.findById();
    }
    this.findGeneros();
    this.ano = new Date(Date.now()).getFullYear()+10;
  }

  public findGeneros(){
    this.generoService.findAll().subscribe({
      next: (data) => this.genero$ = data,
      error: (error) => console.error(error),
    })
  }

  public findById(){
    this.service.findById(this.id).subscribe({
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

  public create(): void {
    if (this.form.invalid) return;

    const obra: Obra = {
      ...this.form.getRawValue(),
      genero: { id: this.form.controls.genero.value }
    };
    this.save(obra);
  }

  public update(){
    if (this.form.invalid) return;

    const obra: Obra = {
      ...this.form.getRawValue(),
      genero: { id: this.form.controls.genero.value }
    };

    this.save(obra);

  }

  private save(obra: Obra): void{
    if(this.id){
      this.service.update(this.id, obra).subscribe({
        next: () => this.route.navigate(['genero']),
        error: (error) => console.error(error)
      });
    }else{
      this.service.create(obra).subscribe({
        next: () => this.route.navigate(['genero']),
        error: (error) => console.error(error)
      });
    }
  }

}
