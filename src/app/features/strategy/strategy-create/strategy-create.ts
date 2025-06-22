import { Component } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/forms/dynamic-form/dynamic-form.component';
import { FormSchema } from '../../../core/models/form-schema.model';
import { ShortStraddleFormSchema } from '../../../core/configs/short-straddle-form-schema.config';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-strategy-create',
  imports: [DynamicFormComponent, MatToolbarModule, MatIconModule, MatButtonModule],
  templateUrl: './strategy-create.html',
  styleUrl: './strategy-create.scss',
})
export class StrategyCreate {
  constructor(private router: Router){}
  shortStraddleSchema: FormSchema = ShortStraddleFormSchema;

  navigate() {
    this.router.navigate(['/create']);
  }
}
