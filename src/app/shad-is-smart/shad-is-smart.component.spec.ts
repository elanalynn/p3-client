import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadIsSmartComponent } from './shad-is-smart.component';

describe('ShadIsSmartComponent', () => {
  let component: ShadIsSmartComponent;
  let fixture: ComponentFixture<ShadIsSmartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShadIsSmartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadIsSmartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
