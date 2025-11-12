import {Component, inject} from '@angular/core';
import {HomeService} from '../../../core/service/home-service';

@Component({
  selector: 'site-banner',
  imports: [],
  templateUrl: './site-banner.html',
  styleUrl: './site-banner.css',
})
export class SiteBanner {
  destaques: any[] = [];

  private service = inject(HomeService);

  ngOnInit(): void {
    this.service.findRandomObras().subscribe({
      next: (data) => {
        this.destaques = data;
      },
      error: (error) => console.error(error),
    })
  }


}
