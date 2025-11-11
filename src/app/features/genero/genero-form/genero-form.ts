import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';
import {GeneroService} from '../../../core/service/genero-service';
import {Genero} from '../../../core/model/genero';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Obra} from '../../../core/model/obra';

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
  private route = inject(Router);
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
      next: (data: any) => {
        this.genero = data;
        this.form.controls.id.setValue(this.genero.id);
        this.form.controls.nome.setValue(this.genero.nome);
      },
      error: (error) => console.error(error)
    })
  }

  public create(): void {
    if (this.form.invalid) return;
    const genero: Genero = {
      ...this.form.getRawValue()
    };
    this.save(genero);
  }

  public update(): void {
    if (this.form.invalid) return;
    const genero: Genero = {
      ...this.form.getRawValue()
    };
    this.save(genero);
  }

  private save(genero: Genero): void{
    if(this.id){
      this.service.update(this.id, genero).subscribe({
        next: () => this.route.navigate(['genero']),
        error: (error) => console.error(error)
      });
    }else{
      this.service.create(genero).subscribe({
        next: () => this.route.navigate(['genero']),
        error: (error) => console.error(error)
      });
    }
  }
}
