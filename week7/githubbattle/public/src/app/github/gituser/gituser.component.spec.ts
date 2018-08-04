import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GituserComponent } from './gituser.component';

describe('GituserComponent', () => {
  let component: GituserComponent;
  let fixture: ComponentFixture<GituserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GituserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GituserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
