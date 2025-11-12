import { Component } from '@angular/core';

@Component({
  selector: 'site-footer',
  imports: [],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {

  ano: any;

  ngOnInit() {
    const data = new Date();
    this.ano = data.getFullYear();
  }

}
