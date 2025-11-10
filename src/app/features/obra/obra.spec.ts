import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Obra } from './obra';

describe('Obra', () => {
  let component: Obra;
  let fixture: ComponentFixture<Obra>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Obra]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Obra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
