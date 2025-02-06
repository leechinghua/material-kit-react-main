import * as React from 'react';

export function usePagination<T>(
  data: T[],
  defaultRowsPerPage?: number
): {
  page: number;
  rowsPerPage: number;
  handlePageChange: (_event: unknown, newPage: number) => void;
  handleRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  paginatedData: T[];
} {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(defaultRowsPerPage ?? 10);
  const handlePageChange = (_event: unknown, newPage: number): void => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event: React.ChangeEvent<HTMLInputElement>): void  => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // 換頁時回到第一頁
  };
  const paginatedData = data.slice(page * rowsPerPage, (page + 1) * rowsPerPage);

  return { page, rowsPerPage, handlePageChange, handleRowsPerPageChange, paginatedData };
}
