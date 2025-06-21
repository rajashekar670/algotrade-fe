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
    MatDividerModule
  ],
  templateUrl: './strategy-list.component.html',
  styleUrl: './strategy-list.component.scss',
})
export class StrategyListComponent implements OnInit {
  onStart(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onStop(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onEdit(arg0: any) {
    throw new Error('Method not implemented.');
  }
  onDelete(arg0: any) {
    throw new Error('Method not implemented.');
  }
  strategies: any[] = [];
  totalItems = 0;
  isMobile = false;
  filterForm: FormGroup;
  statusList: DropdownOption[] = STRATEGY_STATUS_OPTIONS;
  displayedColumns :string[] = [
    'id','strategy','instrument','target','pl','status','actions'
  ]

  constructor(
    private fb: FormBuilder,
    private strategyService: StrategyService,
    private errorHandler: FormErrorHandlerService,
    private breakpointObserver: BreakpointObserver,
    private cdRef: ChangeDetectorRef
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
          this.errorHandler.handleBackendErrors(err, this.filterForm)
        }
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
