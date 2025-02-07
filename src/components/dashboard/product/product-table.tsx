'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { useSelection } from '@/hooks/use-selection';
import { usePagination } from '@/hooks/use-pagination';

// function noop(): void {
//   // do nothing
// }

export interface Product {
  id: string;
  name: string;
  price: number;
  brand: string;
  category: string;
  note: string;
  stock: number;
  createdAt: Date;
}

interface ProductsTableProps {
  data: Product[];  // 改為接收完整數據
  defaultRowsPerPage?: number;
}

export function  ProductTable({
  data = [],
  defaultRowsPerPage = 5,
}: ProductsTableProps): React.JSX.Element {
  // 使用 usePagination hook
  const {
    page,
    rowsPerPage,
    handlePageChange,
    handleRowsPerPageChange,
    paginatedData
  } = usePagination(data, defaultRowsPerPage);

  // 只對當前頁的數據使用 selection
  const rowIds = React.useMemo(() => {
    return paginatedData.map((product) => product.id);
  }, [paginatedData]);

  const { selectAll, deselectAll, selectOne, deselectOne, selected } = useSelection(rowIds);

  const selectedSome = (selected?.size ?? 0) > 0 && (selected?.size ?? 0) < paginatedData.length;
  const selectedAll = paginatedData.length > 0 && selected?.size === paginatedData.length;

  return (
    <Card>
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ minWidth: '800px' }}>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  checked={selectedAll}
                  indeterminate={selectedSome}
                  onChange={(event) => {
                    if (event.target.checked) {
                      selectAll();
                    } else {
                      deselectAll();
                    }
                  }}
                />
              </TableCell>
              <TableCell>商品名稱</TableCell>
              <TableCell>價格</TableCell>
              <TableCell>品牌</TableCell>
              <TableCell>分類</TableCell>
              <TableCell>備註</TableCell>
              <TableCell>庫存</TableCell>
              <TableCell>修改</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {paginatedData.map((row) => {
              const isSelected = selected?.has(row.id);

              return (
                <TableRow hover key={row.id} selected={isSelected}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={isSelected}
                      onChange={(event) => {
                        if (event.target.checked) {
                          selectOne(row.id);
                        } else {
                          deselectOne(row.id);
                        }
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Stack sx={{ alignItems: 'center' }} direction="row" spacing={2}>
                      {/* <Avatar src={row.avatar} /> */}
                      <Typography variant="subtitle2">{row.name}</Typography>
                    </Stack>
                  </TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.brand}</TableCell>
                  <TableCell>
                    {row.category}
                  </TableCell>
                  <TableCell>{row.note}</TableCell>
                  <TableCell>{row.stock}</TableCell>
                  <TableCell>icon</TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
      <Divider />
      <TablePagination
        component="div"
        count={data.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
}
