import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPhoneComponent } from './new-phone.component';

describe('NewPhoneComponent', () => {
  let component: NewPhoneComponent;
  let fixture: ComponentFixture<NewPhoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewPhoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewPhoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
