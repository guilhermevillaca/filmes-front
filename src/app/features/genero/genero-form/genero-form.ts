import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';
import {GeneroService} from '../../../core/service/genero-service';
import {Genero} from '../../../core/model/genero';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-genero-form',
  imports: [SHARED_IMPORTS, ReactiveFormsModule, FormsModule],
  templateUrl: './genero-form.html',
  styleUrl: './genero-form.css',
})
export class GeneroForm {

  acao: string = 'Novo';
  id: any;
  private activateRoute = inject(ActivatedRoute);
  private service = inject(GeneroService);
  genero: any;

  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    nome: new FormControl<string | null>('')
  })

  ngOnInit(): void {
    this.id = this.activateRoute.snapshot.params['id'];
    if(this.id){
      this.findById();
    }
  }

  public findById(){
    this.service.findById(this.id).subscribe({
      next: (data: Genero) => {
        this.genero = data;
        this.form.controls.id = this.genero.id;
        this.form.controls.nome = this.genero.nome;
      },
      error: (error) => console.error(error)
    })
  }

  public salvar(): void{
    console.log('salvando');
  }
}
