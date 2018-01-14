import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalmessageComponent } from './principalmessage.component';

describe('PrincipalmessageComponent', () => {
  let component: PrincipalmessageComponent;
  let fixture: ComponentFixture<PrincipalmessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalmessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipalmessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
