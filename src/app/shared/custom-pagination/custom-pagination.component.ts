import { Component } from '@angular/core';
import {
  pageSelection,
  pageSize,
  pageSizeCal,
  PaginationService,
} from './pagination.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-pagination',
  templateUrl: './custom-pagination.component.html',
  styleUrls: ['./custom-pagination.component.scss'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class CustomPaginationComponent {
  public pageSize = 10;
  public tableData: Array<string> = [];
  public lastIndex = 0;
  public totalData = 0;
  public skip = 0;
  public limit = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;

  constructor(private pagination: PaginationService) {
    this.pagination.calculatePageSize.subscribe((res: pageSizeCal) => {
      this.calculateTotalPages(
        res.totalData,
        res.pageSize,
        res.tableData,
        res.serialNumberArray
      );
      this.pageSize = res.pageSize;
    });

    this.pagination.changePagesize.subscribe((res: pageSize) => {
      this.changePageSize(res.pageSize);
    });
  }

  public getMoreData(event: string): void {
    if (event === 'next' && this.currentPage < this.totalPages) {
      this.currentPage++;
    } else if (event === 'previous' && this.currentPage > 1) {
      this.currentPage--;
    }

    this.pageIndex = this.currentPage - 1;
    this.skip = this.pageIndex * this.pageSize;
    this.limit = this.skip + this.pageSize;

    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.pageIndex = pageNumber - 1;
    this.skip = this.pageIndex * this.pageSize;
    this.limit = this.skip + this.pageSize;

    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  public changePageSize(pageSize: number): void {
    this.pageSize = pageSize;
    this.currentPage = 1;
    this.pageIndex = 0;
    this.skip = 0;
    this.limit = this.pageSize;

    this.pagination.tablePageSize.next({
      skip: this.skip,
      limit: this.limit,
      pageSize: this.pageSize,
    });
  }

  public calculateTotalPages(
    totalData: number,
    pageSize: number,
    tableData: Array<string>,
    serialNumberArray: Array<number>
  ): void {
    this.tableData = tableData;
    this.serialNumberArray = serialNumberArray;
    this.totalData = totalData;
    this.pageSelection = [];  
    this.pageNumberArray = [];

    this.totalPages = Math.ceil(this.totalData / pageSize);

    for (let i = 0; i < this.totalPages; i++) {
      const skip = i * pageSize;
      const limit = skip + pageSize;
      this.pageNumberArray.push(i + 1);
      this.pageSelection.push({ skip, limit });
    }
  }
}
