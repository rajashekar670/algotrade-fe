import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/features/strategy/strategy-detail/strategy-detail.component.spec.ts
import { StrategyDetailComponent } from './strategy-detail.component';

describe('StrategyDetailComponent', () => {
  let component: StrategyDetailComponent;
  let fixture: ComponentFixture<StrategyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrategyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrategyDetailComponent);
========
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
>>>>>>>> origin/feature/dynamic-forms:src/app/features/strategy/strategy-types/strategy-types.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
