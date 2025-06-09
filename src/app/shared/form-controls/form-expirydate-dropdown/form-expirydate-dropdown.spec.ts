import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormExpirydateDropdown } from './form-expirydate-dropdown';

describe('FormExpirydateDropdown', () => {
  let component: FormExpirydateDropdown;
  let fixture: ComponentFixture<FormExpirydateDropdown>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormExpirydateDropdown]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormExpirydateDropdown);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
