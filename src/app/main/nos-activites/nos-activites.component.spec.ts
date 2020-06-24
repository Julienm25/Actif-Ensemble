import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NosActivitesComponent } from './nos-activites.component';

describe('NosActivitesComponent', () => {
  let component: NosActivitesComponent;
  let fixture: ComponentFixture<NosActivitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NosActivitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NosActivitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
