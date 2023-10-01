export class PaginationMeta {
  itemsPerPage: number;
  totalItems: number;
  currentPage: number;
  totalPages: number;

  constructor(
    itemsPerPage: number,
    totalItems: number,
    currentPage: number,
    totalPages: number,
  ) {
    this.itemsPerPage = itemsPerPage;
    this.totalItems = totalItems;
    this.currentPage = currentPage;
    this.totalPages = totalPages;
  }
}

export class Pagination<T> {
  meta: PaginationMeta;
  data: T;

  constructor(pagationMeta: PaginationMeta, data: T) {
    this.meta = pagationMeta;
    this.data = data;
  }
}
