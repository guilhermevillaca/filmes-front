import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcessoNaoAutorizado } from './acesso-nao-autorizado';

describe('AcessoNaoAutorizado', () => {
  let component: AcessoNaoAutorizado;
  let fixture: ComponentFixture<AcessoNaoAutorizado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcessoNaoAutorizado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcessoNaoAutorizado);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
