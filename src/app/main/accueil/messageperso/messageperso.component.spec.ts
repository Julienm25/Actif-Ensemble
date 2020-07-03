import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagepersoComponent } from './messageperso.component';

describe('MessagepersoComponent', () => {
  let component: MessagepersoComponent;
  let fixture: ComponentFixture<MessagepersoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessagepersoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagepersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
