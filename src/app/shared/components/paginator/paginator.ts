import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'gui-paginator',
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {
  @Input() totalPages: number = 1;
  @Input() currentPage: number = 0;
  @Input() windowSize = 5;
  @Output() pageChange = new EventEmitter<number>();

  get visiblePages(): number[] {
    const pages: number[] = [];
    const half = Math.floor(this.windowSize / 2);

    let start = this.currentPage - half;
    let end = this.currentPage + half;

    // Ajusta se estiver no início
    if (start < 0) {
      start = 0;
      end = Math.min(this.windowSize - 1, this.totalPages - 1);
    }

    // Ajusta se estiver no final
    if (end > this.totalPages - 1) {
      end = this.totalPages - 1;
      start = Math.max(end - this.windowSize + 1, 0);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  anterior() {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  proximo() {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
}
