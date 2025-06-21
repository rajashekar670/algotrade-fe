import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseStrategy } from './base-strategy';

describe('BaseStrategy', () => {
  let component: BaseStrategy;
  let fixture: ComponentFixture<BaseStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BaseStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaseStrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
