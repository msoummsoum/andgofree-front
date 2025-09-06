import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { apiResultFormat, invoice } from '../../../shared/services/model/model';
import { pageSelection, PaginationService, tablePageSize } from '../../../shared/custom-pagination/pagination.service';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from '../../../shared/services/data/data.service';
import { Router, RouterLink } from '@angular/router';
import { MatSort, Sort } from '@angular/material/sort';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateRangePickerComponent } from '../../common/date-range-picker/date-range-picker.component';
import { NgApexchartsModule } from 'ng-apexcharts';
export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
  dropShadow: ApexDropShadow;
}

@Component({
  selector: 'app-income-report',
  imports: [CommonModule,RouterLink,FormsModule,DateRangePickerComponent,NgApexchartsModule],
  templateUrl: './income-report.component.html',
  styleUrl: './income-report.component.scss'
})
export class IncomeReportComponent {
  public salesStatistics: Partial<ChartOptions> | any;
  routes=routes
  // pagination variables
  initChecked=false;
  public pageSize = 10;
  public tableData: invoice[] = [];
  public tableDataCopy: invoice[] = [];
  public actualData: invoice[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<invoice>;
  public searchDataValue = '';
  
  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.data.getInvoice().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.invoices) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getInvoice().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: invoice, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<invoice>(this.actualData);
      this.pagination.calculatePageSize.next({
        totalData: this.totalData,
        pageSize: this.pageSize,
        tableData: this.tableData,
        serialNumberArray: this.serialNumberArray,
      });
    });
  }
  
public row=true;
 public searchData(value: string): void {
  this.searchDataValue = value.trim().toLowerCase();
  this.dataSource.filter = this.searchDataValue;
  this.tableData = this.dataSource.filteredData;
  this.row = this.tableData.length > 0;

  if (this.searchDataValue !== '') {
    // Handle filtered data
    this.pagination.calculatePageSize.next({
      totalData: this.tableData.length,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.tableData.map((_, i) => i + 1), // Generates serials like [1, 2, 3...]
    });
  } else {
    // Handle reset to full data
    this.pagination.calculatePageSize.next({
      totalData: this.totalData,
      pageSize: this.pageSize,
      tableData: this.tableData,
      serialNumberArray: this.serialNumberArray,
    });
  }
}
  
  public sortData(sort: Sort) {
    const data = this.tableData.slice();
  
    if (!sort.active || sort.direction === '') {
      this.tableData = data;
    } else {
      this.tableData = data.sort((a, b) => {
        const aValue = (a as never)[sort.active];
  
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public changePageSize(pageSize: number): void {
    this.pageSelection = [];
    this.limit = pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }
  ngOnInit():void{
  this.salesStatistics={
    series: [{
      name: 'Revenue',
      data: [22, 22, 28, 25, 15, 22, 20],
      }, {
      name: 'Expenses',
      data: [-9, -25, -5, -10, -10, -25, -5]
      }],
      grid: {
        padding: {
          top: 5, // Adds space on the left
          right: 5, // Adds space on the right
        },
      },
      colors: ['#FFA633', '#FFDBAD'],
      chart: {
        type: 'bar',
        height: 290,
        stacked: true,        
        zoom: {
          enabled: true
        }
      },
      responsive: [{
      breakpoint: 280,
      options: {
        legend: {
        position: 'bottom',
        offsetY: 0
        }
      }
      }],
      plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: '50%',
      },
      },
        dataLabels: {
        enabled: false
      },
        yaxis: {
          labels: {
            offsetX: -15,
            formatter: (val:any) => {
              return val / 1 + 'K'
            },
          },
            min: -30,
            max: 30,
            tickAmount: 6,
          },
      xaxis: {
      categories: [' 25 Jan ', '26 Jan', '27 Jan', '28 Jan',
        '29 Jan', '30 Jan' , '31 Jan'
      ],
      },
      legend: {show: false},
      fill: {
      opacity: 1
      }
  }
}
}
