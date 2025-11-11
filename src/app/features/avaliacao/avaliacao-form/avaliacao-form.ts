import {Component, inject} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {AvaliacaoService} from '../../../core/service/avaliacao-service';

@Component({
  selector: 'app-avaliacao-form',
  imports: [],
  templateUrl: './avaliacao-form.html',
  styleUrl: './avaliacao-form.css',
})
export class AvaliacaoForm {

  private activatedRoute = inject(ActivatedRoute);
  private service = inject(AvaliacaoService);
  id: any;
  form = new FormGroup({
    id: new FormControl<string | null>({value: null, disabled: true}),
    nota: new FormControl<number | null>(null),
    comentario: new FormControl<string | null>(''),
    dataAvaliacao: new FormControl<string | null>(null),
    usuario: new FormControl<number | null>(null),
    obra: new FormControl<number | null>(null)
  });

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    if(this.id) {
      this.findById();
    }
  }

  public findById(): void {
    this.service.findById(this.id).subscribe({
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

}
