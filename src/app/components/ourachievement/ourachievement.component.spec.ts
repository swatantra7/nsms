import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OurachievementComponent } from './ourachievement.component';

describe('OurachievementComponent', () => {
  let component: OurachievementComponent;
  let fixture: ComponentFixture<OurachievementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurachievementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurachievementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
