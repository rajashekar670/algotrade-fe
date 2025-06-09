import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortStrangle } from './short-strangle';

describe('ShortStrangle', () => {
  let component: ShortStrangle;
  let fixture: ComponentFixture<ShortStrangle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShortStrangle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShortStrangle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
