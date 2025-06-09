import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSelectInput } from './form-select-input';

describe('FormTextInput', () => {
  let component: FormSelectInput;
  let fixture: ComponentFixture<FormSelectInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSelectInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSelectInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
