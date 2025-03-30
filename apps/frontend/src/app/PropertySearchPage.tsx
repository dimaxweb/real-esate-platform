// PropertySearchPage.tsx
import React, { useState,useEffect} from 'react';
import { Pagination, Sorting, SortField, SortOrder } from './types';
import { PropertyCard } from './PropertyCard';
import { SortDropdown } from './SortDropdown';
import { PaginationControls } from './PaginationControls';
import {RealEstatePropertyFilter} from "@real-estate-platform/common";
import {Property} from "@swc/core";
import {RealEstateFilter} from "./RealEstateFilter";


const DEFAULT_PAGE_SIZE = 10;

export const PropertySearchPage: React.FC = () => {
  const [filter, setFilter] = useState<RealEstatePropertyFilter>({});
  const [pagination, setPagination] = useState<Pagination>({ page: 1, pageSize: DEFAULT_PAGE_SIZE });
  const [sorting, setSorting] = useState<Sorting>({ field: 'createdAt', order: 'desc' });
  const [properties, setProperties] = useState<Property[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const loadProperties = async () => {
    const res = await fetch(
      `/api/properties?` +
      new URLSearchParams({
        ...filter,
        sortField: sorting.field,
        sortOrder: sorting.order,
        page: pagination.page.toString(),
        pageSize: pagination.pageSize.toString(),
      })
    );
    const data = await res.json();
    setProperties(data.items);
    setTotalCount(data.totalCount);
  };

  useEffect(() => {
    loadProperties();
  }, [filter, pagination, sorting]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      {/* Filter bar */}
      <RealEstateFilter filter={filter} onChange={setFilter} />

      {/* Sorting & Pagination Top */}
      <div className="flex justify-between items-center mt-4">
        <SortDropdown sorting={sorting} onChange={setSorting} />
        <PaginationControls
          currentPage={pagination.page}
          totalCount={totalCount}
          pageSize={pagination.pageSize}
          onPageChange={(page) => setPagination({ ...pagination, page })}
        />
      </div>

      {/* Property Results */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {/* Pagination Bottom */}
      <div className="mt-6">
        <PaginationControls
          currentPage={pagination.page}
          totalCount={totalCount}
          pageSize={pagination.pageSize}
          onPageChange={(page) => setPagination({ ...pagination, page })}
        />
      </div>
    </div>
  );
};
