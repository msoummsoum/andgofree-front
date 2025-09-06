import { Component } from '@angular/core';
import { routes } from '../../../shared/routes';
import { apiResultFormat, earnings } from '../../../shared/services/model/model';
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
  selector: 'app-earnings-report',
  imports: [CommonModule,RouterLink,MatSort,FormsModule,DateRangePickerComponent,NgApexchartsModule],
  templateUrl: './earnings-report.component.html',
  styleUrl: './earnings-report.component.scss'
})
export class EarningsReportComponent {
  routes=routes
  initChecked=false;
  public pageSize = 10;
  public tableData: earnings[] = [];
  public tableDataCopy: earnings[] = [];
  public actualData: earnings[] = [];
  public currentPage = 1;
  public skip = 0;
  public limit: number = this.pageSize;
  public serialNumberArray: number[] = [];
  public totalData = 0;
  showFilter = false;
  public pageSelection: pageSelection[] = [];
  dataSource!: MatTableDataSource<earnings>;
  public searchDataValue = '';

  constructor(
    private data: DataService,
    private router: Router,
    private pagination: PaginationService
  ) {
    this.data.getEarnings().subscribe((apiRes: apiResultFormat) => {
      this.actualData = apiRes.data;
      this.pagination.tablePageSize.subscribe((res: tablePageSize) => {
        if (this.router.url == this.routes.earningsReport) {
          this.getTableData({ skip: res.skip, limit: res.limit });
          this.pageSize = res.pageSize;
        }
      });
    });
  }
  private getTableData(pageOption: pageSelection): void {
    this.data.getEarnings().subscribe((apiRes: apiResultFormat) => {
      this.tableData = [];
      this.tableDataCopy = [];
      this.serialNumberArray = [];
      this.totalData = apiRes.totalData;
      apiRes.data.map((res: earnings, index: number) => {
        const serialNumber = index + 1;
        if (index >= pageOption.skip && serialNumber <= pageOption.limit) {
          res.sNo = serialNumber;
          this.tableData.push(res);
          this.tableDataCopy.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<earnings>(this.actualData);
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
public earningChart: Partial<ChartOptions> | any;
public projectChart: Partial<ChartOptions> | any;
ngOnInit():void{
  this.earningChart = {
    series: [{
      name: "Sales Analysis",
      data: [300, 300, 300, 600, 600, 600, 550, 80, 100, 700, 700, 800]
    }],
    chart: {
      height: 247,
      type: 'area',  
      zoom: {
        enabled: false
      }
    },
    colors: ['#FF9F43'],
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: 'smooth'
    },
    title: {
      text: '',
      align: 'left'
    },
    xaxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep','Oct','Nov','Dec'],
    },
    yaxis: {
      min: 0,
      max: 800, 
      tickAmount: 5,  // Ensuring 5 ticks (0, 200, 400, 600, 800)
      labels: {
        offsetX: -15,
        formatter: (val:any) => {
          return `$${val}K`;  
        }
      }
    },

  };
  this.projectChart=
    {
      series: [ 10, 20, 50],
      chart: {
        width: 171,
        type: 'pie',
      },
      labels: ['Maintenance Charges Collected', 'Late Fees & Extra', 'earnings Charges', 'Completed'], // Set your labels here
      colors: ['#0AB9A5', '#FFA633', '#AB47BC', '#03C95A'], // Custom colors for each segment
      dataLabels: {
        enabled: false // Disable data labels to remove numbers
      },
      legend: {
        show: false // Hide the legend
      },
      tooltip: {
        y: {
          formatter: function(value:any) {
            return 'Value: ' + value; // Customize the tooltip text
          }
        }
      },
      responsive: [{
        breakpoint: 480,
        options: {
          chart: {
            width: 200
          },
          legend: {
            position: 'bottom'
          },
          series:{
            show: false 
          },
        }
      }]
    }
  }
}
