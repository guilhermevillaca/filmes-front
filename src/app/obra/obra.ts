import { Component } from '@angular/core';
import { ObraService } from '../services/obra-service';
import { lastValueFrom } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-obra',
  imports: [],
  templateUrl: './obra.html',
  styleUrl: './obra.css',
})
export class Obra {

  obra$: any;

  constructor(private obraService: ObraService){
  }

  ngOnInit(): void{
    this.getObra();
  }

  public async getObra(){
    this.obra$ = await lastValueFrom(this.obraService.getObras());
  }

}
