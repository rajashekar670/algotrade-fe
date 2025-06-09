import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormInstrumentDropdown } from './form-instrument-dropdown';

describe('FormInstrumentDropdown', () => {
  let component: FormInstrumentDropdown;
  let fixture: ComponentFixture<FormInstrumentDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormInstrumentDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormInstrumentDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
