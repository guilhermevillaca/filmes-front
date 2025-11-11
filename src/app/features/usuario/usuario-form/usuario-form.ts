import {Component, inject} from '@angular/core';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {SHARED_IMPORTS} from '../../../shared/util/shared-imports';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {Obra} from '../../../core/model/obra';
import {UsuarioService} from '../../../core/service/usuario-service';
import {converterDataInputParaISO, converterDataISOParaInput} from '../../../shared/util/util';
import {AvaliacaoList} from '../../avaliacao/avaliacao-list';
import {Usuario} from '../../../core/model/usuario';

@Component({
  selector: 'app-usuario-form',
  imports: [
    SHARED_IMPORTS,
    ReactiveFormsModule
  ],
  templateUrl: './usuario-form.html',
  styleUrl: './usuario-form.css',
})
export class UsuarioForm {
  acao: string = 'Novo';
  private service = inject(UsuarioService);
  private route = inject(Router);
  private activatedRoute = inject(ActivatedRoute);
  id: any;
  usuario: any;

  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    nome: new FormControl<string | null>(''),
    email: new FormControl<string | null>(''),
    login: new FormControl<string | null>(null),
    dataCadastro: new FormControl<string | null>(''),
    perfil: new FormControl<string | null>('')
  });

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id){
      this.findById();
    }
  }

  public findById(){
    this.service.findById(this.id).subscribe({
      next: (data) => {
        this.usuario = data;
        this.form.controls.id.setValue(this.usuario.id);
        this.form.controls.nome.setValue(this.usuario.nome);
        this.form.controls.email.setValue(this.usuario.email);
        this.form.controls.login.setValue(this.usuario.login);
        this.form.controls.dataCadastro.setValue(converterDataISOParaInput(this.usuario.dataCadastro));
        this.form.controls.perfil.setValue(this.usuario.perfil)
      },
      error: (error) => console.error(error)
    });
  }


  public create(): void {
    if (this.form.invalid) return;

    const usuario: Usuario = {
      ...this.form.getRawValue()
    };
    this.save(usuario);
  }

  public update() {
    if (this.form.invalid) return;

    const usuario: Usuario = {
      ...this.form.getRawValue()
    };

    this.save(usuario);

  }

  private save(usuario: Usuario): void {
    if (usuario.dataCadastro) {
      usuario.dataCadastro = converterDataInputParaISO(usuario.dataCadastro);
    }    if (this.id) {
      this.service.update(this.id, usuario).subscribe({
        next: () => this.route.navigate(['usuario']),
        error: (error) => console.error(error)
      });
    } else {
      this.service.create(usuario).subscribe({
        next: () => this.route.navigate(['usuario']),
        error: (error) => console.error(error)
      });
    }
  }

}
