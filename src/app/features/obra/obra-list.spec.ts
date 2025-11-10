import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObraList } from './obra-list';

describe('ObraList', () => {
  let component: ObraList;
  let fixture: ComponentFixture<ObraList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObraList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObraList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
