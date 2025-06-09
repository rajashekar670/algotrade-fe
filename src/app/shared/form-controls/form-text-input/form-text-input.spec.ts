import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormTextInput } from './form-text-input';

describe('FormTextInput', () => {
  let component: FormTextInput;
  let fixture: ComponentFixture<FormTextInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormTextInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormTextInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
