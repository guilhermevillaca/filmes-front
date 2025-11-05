import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  ano: any;

  constructor(){

  }

  ngOnInit(){
    this.ano = new Date(Date.now()).getFullYear();
  }

}
