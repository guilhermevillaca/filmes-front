import {Component, inject} from '@angular/core';
import {Footer} from '../footer/footer';
import {Header} from '../header/header';
import {Obra} from '../../../core/model/obra';
import {ObraService} from '../../../core/service/obra-service';
import {SiteBanner} from '../site-banner/site-banner';
import {ObraCard} from '../obra-card/obra-card';
import {HomeService} from '../../../core/service/home-service';

@Component({
  selector: 'app-home',
  imports: [Footer, Header, SiteBanner, ObraCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  filmes: any;
  series: any;
  animes: any;

  currentPage = 0;
  totalPages: number = 0;
  pageSize = 15;

  private service = inject(HomeService);

  ngOnInit() {
    this.service.findTop5ByTipo('FILME').subscribe({
      next: (data) => {
        this.filmes = data.content ?? [];
      },
      error: (error) => console.log(error)
    });


    this.service.findTop5ByTipo('SERIE').subscribe({
      next: (data) => {
        this.series = data.content ?? [];
      }
    });
    this.service.findTop5ByTipo('ANIME').subscribe({
      next: (data) => {
        this.animes = data.content ?? [];
      }
    });
  }

}
