import { ShortStrangleFormSchema } from './../../../core/configs/short-strangle-form-schema.config';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StrategyService } from '../../../core/services/strategy.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ROUTES } from '../../../core/constants/app';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DynamicFormComponent } from '../../../shared/forms/dynamic-form/dynamic-form.component';
import { StrategyTypeService } from '../../../core/services/strategy-type.service';
import { FormSchema } from '../../../core/models/form-schema.model';
import { StrategyTypeEnum } from '../../../core/constants/enums';
import { ShortStraddleFormSchema } from '../../../core/configs/short-straddle-form-schema.config';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatChip } from '@angular/material/chips';

@Component({
  selector: 'app-strategy-detail',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    DynamicFormComponent,
    MatCardModule,
    MatListModule,
    MatTableModule,
    CommonModule,
],
  templateUrl: './strategy-detail.component.html',
  styleUrl: './strategy-detail.component.scss',
})
export class StrategyDetailComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private strategyService: StrategyService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    public strategyTypeService: StrategyTypeService,
    private breakpointObserver: BreakpointObserver,
  ) {}

  strategyData: any;
  schema!: FormSchema;
  logsDisplayedColumns: string[] = [
    'createdTime',
    'type',
    'message',
  ]
  displayedColumns: string[] = [
    'id',
    'strikePrice',
    'optionType',
    'side',
    'quantity',
    'entry',
    'exit',
    'ltp',
    'pl',
    'status',
  ];
  isMobile = false;

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => (this.isMobile = result.matches));

    let id = this.activatedRoute.snapshot.paramMap.get('id') ?? '';
    if (id) {
      this.loadStrategy(id);
    }
  }

  loadStrategy(id: string): void {
    if (id) {
      this.strategyService.getById(id).subscribe({
        next: (data) => {
          console.log(data);
          this.strategyData = data;
          this.setSchema(data.strategy);
          this.cdr.markForCheck();
        },
      });
    }
  }

  setSchema(strategy: string) {
    let strategyTypeConfig = this.strategyTypeService.getByType(strategy);

    if (strategyTypeConfig) {

      if (strategyTypeConfig.type === StrategyTypeEnum.ShortStraddle) {
        this.schema = ShortStraddleFormSchema;
      } else if(strategyTypeConfig.type === StrategyTypeEnum.ShortStrangle) {
        this.schema = ShortStrangleFormSchema;
      }

    }
  }

  navigateToStrategyList() {
    this.router.navigateByUrl(ROUTES.STRATEGIES.GET_ALL);
  }
}
