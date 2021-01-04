import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() pageUrl: string;
  @Input() currentPage: number;
  @Input() totalRecords: number;
  @Input() recordsPerPage: number;
  public PageArr = [];
  public pageCount: number;
  public prev: number;
  public next: number;
  public current: number;

  constructor(private router: Router) {
   }

  // Function on click of page number
  public changePageNumber(pageNumber) {
    this.nextPageNumber(pageNumber);
    this.prevPageNumber(pageNumber);
    this.current = pageNumber;
    if (this.pageCount > 5) {
      this.paginationCount(this.pageCount, this.current);
    }
  }

  // Function to change previous page number
  public prevPageNumber(currentPage) {
    if (currentPage > 1) {
      this.prev = parseInt(currentPage, 10) - 1;
    }
  }

  // Function to change next page number
  public nextPageNumber(currentPage) {
    if (currentPage < this.pageCount) {
      this.next = parseInt(currentPage, 10) + 1;
    }
  }

  // Function to generate page number array
  public paginationCount(totalPages, currentPage) {
    this.PageArr.length = 0;
    this.PageArr.push(1);

    if (parseInt(currentPage, 10) > 2) {
      if (parseInt(currentPage, 10) !== 3) {
        this.PageArr.push('...');
      }
      this.PageArr.push(parseInt(currentPage, 10) - 1);
    }

    if (parseInt(currentPage, 10) !== 1) {
      this.PageArr.push(parseInt(currentPage, 10));
    }

    if (parseInt(currentPage, 10) < (totalPages - 1)) {
      this.PageArr.push(parseInt(currentPage, 10) + 1);
      if (parseInt(currentPage, 10) !== (totalPages - 2)) {
        this.PageArr.push('...');
      }
    }

    if (parseInt(currentPage, 10) !== totalPages) {
      this.PageArr.push(totalPages);
    }
  }

  // Function to check if value is number
  public checkNumber(page) {
    if (isNaN(page)) {
      return true;
    }
  }

  ngOnInit() {
    this.current = this.currentPage;
    this.pageCount = Math.ceil(this.totalRecords / this.recordsPerPage);

    // If page number in url doesn't exist
    if (this.current > this.pageCount) {
      this.router.navigate([this.pageUrl, this.pageCount]);
      this.current = this.pageCount;
    }

    this.prevPageNumber(this.currentPage);
    this.nextPageNumber(this.currentPage);

    // To show all pages link if page count is less than 6
    if (this.pageCount < 6) {
      for (let i = 0; i < this.pageCount; i++) {
        this.PageArr.push(i + 1);
      }
    } else {
      this.paginationCount(this.pageCount, this.current);
    }
  }

}
