import { NgFor } from '@angular/common';
import { Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [NgFor],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})


export class PaginationComponent implements OnInit {
  ngOnInit(): void {}

  items: any[] = []; // Your list of items
  currentPage: number = 1;
  itemsPerPage: number = 10;

  get paginatedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  onPageChange(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  pages(): number[] {
    const totalItems = this.items.length;
  const totalPages = Math.ceil(totalItems / this.itemsPerPage);
    const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);
    return pagesArray;
  }

  totalPages(): number {
    return this.pages().length;
  }

}
