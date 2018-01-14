import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KmmsgComponent } from './kmmsg.component';

describe('KmmsgComponent', () => {
  let component: KmmsgComponent;
  let fixture: ComponentFixture<KmmsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KmmsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KmmsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
