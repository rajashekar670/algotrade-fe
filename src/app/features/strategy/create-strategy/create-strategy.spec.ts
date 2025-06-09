import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateStrategy } from './create-strategy';

describe('CreateStrategy', () => {
  let component: CreateStrategy;
  let fixture: ComponentFixture<CreateStrategy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateStrategy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateStrategy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
