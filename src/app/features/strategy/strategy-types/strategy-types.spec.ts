import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrategyTypes } from './strategy-types';

describe('StrategyTypes', () => {
  let component: StrategyTypes;
  let fixture: ComponentFixture<StrategyTypes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyTypes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyTypes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
