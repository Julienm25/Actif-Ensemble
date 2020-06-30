import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaCommunauteComponent } from './ma-communaute.component';

describe('MaCommunauteComponent', () => {
  let component: MaCommunauteComponent;
  let fixture: ComponentFixture<MaCommunauteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaCommunauteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaCommunauteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
