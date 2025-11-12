import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraCard } from './obra-card';

describe('ObraCard', () => {
  let component: ObraCard;
  let fixture: ComponentFixture<ObraCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
