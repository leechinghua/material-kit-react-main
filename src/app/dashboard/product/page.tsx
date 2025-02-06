import * as React from 'react';
import type { Metadata } from 'next';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Download as DownloadIcon } from '@phosphor-icons/react/dist/ssr/Download';
import { Plus as PlusIcon } from '@phosphor-icons/react/dist/ssr/Plus';
import { Upload as UploadIcon } from '@phosphor-icons/react/dist/ssr/Upload';
import dayjs from 'dayjs';

import { config } from '@/config';
import { ProductFilters } from '@/components/dashboard/product/product-filters';
import { ProductTable } from '@/components/dashboard/product/product-table';
import type { Product } from '@/components/dashboard/product/product-table';

export const metadata = { title: `商品列表 | ${config.site.name}` } satisfies Metadata;

const products = [
  {
    id: 'PRD-010',
    name: 'Nike Air Max 270',
    price: 150,
    brand: 'Nike',
    category: 'Shoes',
    note: 'Comfortable and stylish running shoes',
    stock: 25,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-009',
    name: 'Adidas Ultraboost 22',
    price: 180,
    brand: 'Adidas',
    category: 'Shoes',
    note: 'High-performance running shoes with Boost cushioning',
    stock: 18,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-008',
    name: 'Apple iPhone 15 Pro',
    price: 999,
    brand: 'Apple',
    category: 'Electronics',
    note: 'Latest model with A17 chip and titanium frame',
    stock: 10,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-007',
    name: 'Samsung Galaxy S23 Ultra',
    price: 1199,
    brand: 'Samsung',
    category: 'Electronics',
    note: 'Flagship phone with S Pen and 200MP camera',
    stock: 12,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-006',
    name: 'Sony WH-1000XM5',
    price: 399,
    brand: 'Sony',
    category: 'Headphones',
    note: 'Industry-leading noise cancellation',
    stock: 30,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-005',
    name: 'Dyson Airwrap Styler',
    price: 599,
    brand: 'Dyson',
    category: 'Beauty',
    note: 'Multi-functional hair styling tool',
    stock: 15,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-004',
    name: 'Gucci GG Marmont Bag',
    price: 2200,
    brand: 'Gucci',
    category: 'Bags',
    note: 'Luxury leather shoulder bag',
    stock: 5,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-003',
    name: 'Puma RS-X Sneaker',
    price: 120,
    brand: 'Puma',
    category: 'Shoes',
    note: 'Retro-inspired chunky sneakers',
    stock: 20,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-002',
    name: 'Canon EOS R5 Camera',
    price: 3899,
    brand: 'Canon',
    category: 'Electronics',
    note: 'Professional mirrorless camera with 8K video',
    stock: 8,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
  {
    id: 'PRD-001',
    name: 'Rolex Submariner',
    price: 9850,
    brand: 'Rolex',
    category: 'Watches',
    note: 'Luxury diving watch',
    stock: 3,
    createdAt: dayjs().subtract(2, 'hours').toDate(),
  },
] satisfies Product[];


export default function Page(): React.JSX.Element {
  const page = 0;
  const rowsPerPage = 5;

  const paginatedCustomers = applyPagination(products, page, rowsPerPage);

  return (
    <Stack spacing={3}>
      <Stack direction="row" spacing={3}>
        <Stack spacing={1} sx={{ flex: '1 1 auto' }}>
          <Typography variant="h4">商品列表</Typography>
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <Button color="inherit" startIcon={<UploadIcon fontSize="var(--icon-fontSize-md)" />}>
              Import
            </Button>
            <Button color="inherit" startIcon={<DownloadIcon fontSize="var(--icon-fontSize-md)" />}>
              Export
            </Button>
          </Stack>
        </Stack>
        <div>
          <Button startIcon={<PlusIcon fontSize="var(--icon-fontSize-md)" />} variant="contained">
            Add
          </Button>
        </div>
      </Stack>
      <ProductFilters />
      <ProductTable
        count={paginatedCustomers.length}
        page={page}
        rows={paginatedCustomers}
        rowsPerPage={rowsPerPage}
      />
    </Stack>
  );
}

function applyPagination(rows: Product[], page: number, rowsPerPage: number): Product[] {
  return rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
}
