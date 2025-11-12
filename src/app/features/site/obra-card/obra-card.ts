import {Component, Input} from '@angular/core';
import {Obra} from '../../../core/model/obra';

@Component({
  selector: 'obra-card',
  imports: [],
  templateUrl: './obra-card.html',
  styleUrl: './obra-card.css',
})
export class ObraCard {

  @Input() obra: Obra | null = null;

}
