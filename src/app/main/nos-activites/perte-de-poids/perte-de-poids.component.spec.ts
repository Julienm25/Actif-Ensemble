import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PerteDePoidsComponent } from './perte-de-poids.component';

describe('PerteDePoidsComponent', () => {
  let component: PerteDePoidsComponent;
  let fixture: ComponentFixture<PerteDePoidsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerteDePoidsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PerteDePoidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
