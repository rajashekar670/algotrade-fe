import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortStraddle } from './short-straddle';

describe('ShortStraddle', () => {
  let component: ShortStraddle;
  let fixture: ComponentFixture<ShortStraddle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortStraddle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortStraddle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
