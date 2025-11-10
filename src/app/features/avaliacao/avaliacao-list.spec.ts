import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaliacaoList } from './avaliacao-list';

describe('AvaliacaoList', () => {
  let component: AvaliacaoList;
  let fixture: ComponentFixture<AvaliacaoList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AvaliacaoList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AvaliacaoList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
