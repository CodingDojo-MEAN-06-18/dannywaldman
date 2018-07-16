import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRankComponent } from './quote-rank.component';

describe('QuoteRankComponent', () => {
  let component: QuoteRankComponent;
  let fixture: ComponentFixture<QuoteRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRankComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
