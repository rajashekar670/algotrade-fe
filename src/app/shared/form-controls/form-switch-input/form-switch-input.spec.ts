import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSwitchInput } from './form-switch-input';

describe('FormTextInput', () => {
  let component: FormSwitchInput;
  let fixture: ComponentFixture<FormSwitchInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormSwitchInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSwitchInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
