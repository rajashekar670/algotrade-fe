import { Router } from '@angular/router';
import {
  BreakpointObserver,
  Breakpoints,
  LayoutModule,
} from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { StrategyService } from '../../../core/services/strategy.service';
import { FormErrorHandlerService } from '../../../core/services/form-error-handler.service';
import { FormField } from '../../../shared/forms/form-field/form-field';
import { DropdownOption } from '../../../core/models/drop-down-option.model';
import { STRATEGY_STATUS_OPTIONS } from '../../../core/constants/dropdowns';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { API_ENDPOINTS } from '../../../core/constants/api-endpoints';
import { ROUTES } from '../../../core/constants/app';
import { error } from 'node:console';
import { SnackbarService } from '../../../shared/services/snackbar.service';
import { StrategyTypeService } from '../../../core/services/strategy-type.service';

@Component({
  selector: 'app-strategy-list.component',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LayoutModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormField,
    MatChipsModule,
    MatDividerModule,
  ],
  templateUrl: './strategy-list.component.html',
  styleUrl: './strategy-list.component.scss',
})
export class StrategyListComponent implements OnInit {
  onStart(id: string) {
    this.strategyService.startStrategy(id).subscribe({
        next: () => {
          this.snackbarService.success('Strategy started successfully - '+id);
          this.loadStrategies();
        },
        error: (error) => {
          console.log(error);
          this.snackbarService.success(JSON.stringify(error.error.errors.error));
          this.loadStrategies();
        },
      });
  }

  onStop(id: string) {
    this.strategyService.stopStrategy(id).subscribe({
        next: () => {
          this.snackbarService.success('Strategy stopped successfully - '+id);
          this.loadStrategies();
        },
        error: (error) => {
          console.log(error);
          this.snackbarService.success(JSON.stringify(error.error.errors.error));
          this.loadStrategies();
        },
      })
  }
  onEdit(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onDelete(id: string) {
    this.strategyService.deleteStrategy(id).subscribe({
        next: () => {
          this.snackbarService.success('Strategy deleted successfully - '+id);
          this.loadStrategies();
        },
        error: (error) => {
          console.log(error);
          this.snackbarService.success(JSON.stringify(error.error.errors.error));
          this.loadStrategies();
        },
      });
  }

  navigateToDetails(id: string) {
    console.log(ROUTES.STRATEGIES.GET_BY_ID(id));
    this.router.navigateByUrl(ROUTES.STRATEGIES.GET_BY_ID(id));
  }

  strategies: any[] = [];
  totalItems = 0;
  isMobile = false;
  filterForm: FormGroup;
  statusList: DropdownOption[] = STRATEGY_STATUS_OPTIONS;
  displayedColumns: string[] = [
    'id',
    'strategy',
    'instrument',
    'target',
    'pl',
    'status',
    'actions',
  ];

  constructor(
    private fb: FormBuilder,
    private strategyService: StrategyService,
    private errorHandler: FormErrorHandlerService,
    private breakpointObserver: BreakpointObserver,
    private cdRef: ChangeDetectorRef,
    private router: Router,
    private snackbarService : SnackbarService,
    private cdr: ChangeDetectorRef,
    public strategyTypeService : StrategyTypeService
  ) {
    this.filterForm = this.fb.group({
      search: [''],
      status: [''],
    });
  }

  ngOnInit(): void {
    this.breakpointObserver
      .observe([Breakpoints.Handset])
      .subscribe((result) => (this.isMobile = result.matches));
    this.loadStrategies();
  }

  loadStrategies(page = 0, size = 10): void {
    const { search, status } = this.filterForm.value;
    this.strategyService
      .getAll(search ?? '', status ?? '', page, size)
      .subscribe({
        next: (res) => {
          this.strategies = res.items;
          this.totalItems = res.totalItems;
          this.cdRef.markForCheck();
        },
        error: (err) => {
          this.errorHandler.handleBackendErrors(err, this.filterForm);
        },
      });
  }

  onFilterChange(): void {
    this.loadStrategies();
  }

  onPageChange(event: PageEvent): void {
    this.loadStrategies(event.pageIndex, event.pageSize);
  }

  onStatusChanged(newValue: string) {
    // Handle the logic based on the new value
    console.log('Status changed to:', newValue);
    // Example: dynamically enable/disable another control
  }
}
