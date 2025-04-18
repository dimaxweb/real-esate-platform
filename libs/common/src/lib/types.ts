export interface Pagination {
  page: number;
  pageSize: number;
}

export type SortField = 'price' | 'area' | 'rooms' | 'createdAt';
export type SortOrder = 'asc' | 'desc';

export interface Sorting {
  field: SortField;
  order: SortOrder;
}
