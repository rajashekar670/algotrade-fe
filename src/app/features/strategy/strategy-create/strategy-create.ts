import { StrategyTypeConfig } from './../../../core/configs/strategy-type-config';
import { StrategyTypeService } from './../../../core/services/strategy-type.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { DynamicFormComponent } from '../../../shared/forms/dynamic-form/dynamic-form.component';
import { FormSchema } from '../../../core/models/form-schema.model';
import { ShortStraddleFormSchema } from '../../../core/configs/short-straddle-form-schema.config';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { StrategyService } from '../../../core/services/strategy.service';
import { StrategyTypeEnum } from '../../../core/constants/enums';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { ROUTES } from '../../../core/constants/app';
import { ActivatedRoute } from '@angular/router';
import { ShortStrangleFormSchema } from '../../../core/configs/short-strangle-form-schema.config';

@Component({
  selector: 'app-strategy-create',
  imports: [
    DynamicFormComponent,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  templateUrl: './strategy-create.html',
  styleUrl: './strategy-create.scss',
})
export class StrategyCreate implements OnInit {
  constructor(
    private router: Router,
    private strategyService: StrategyService,
    private snackBarService: SnackbarService,
    private cdr: ChangeDetectorRef,
    private activatedRoute: ActivatedRoute,
    private strategyTypeService: StrategyTypeService
  ) {}

  schema!: FormSchema;
  backendErrors: Record<string, string> = {};
  strategyTypeConfig: StrategyTypeConfig | undefined;

  ngOnInit(): void {
    let type = this.activatedRoute.snapshot.paramMap.get('type');
    this.strategyTypeConfig = this.strategyTypeService.getByRoute(type);
    if (this.strategyTypeConfig) {
      if (this.strategyTypeConfig.type === StrategyTypeEnum.ShortStraddle) {
        this.schema = ShortStraddleFormSchema;
      } else if(this.strategyTypeConfig.type === StrategyTypeEnum.ShortStrangle) {
        this.schema = ShortStrangleFormSchema;
      }
    }
  }

  navigateToStrategyTypesList() {
    this.router.navigate([ROUTES.STRATEGIES.CREATE]);
  }

  createStrategy(form: any) {
    console.log(form);
    this.strategyService
      .createStrategy(this.strategyTypeConfig?.route ?? '', form)
      .subscribe({
        next: () => {
          this.snackBarService.success('Short Straddle created successfully');
        },
        error: (error) => {
          this.backendErrors = Object.assign({}, error?.error);
          this.cdr.markForCheck();
        },
      });
  }
}
