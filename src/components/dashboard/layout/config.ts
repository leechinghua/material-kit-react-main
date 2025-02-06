import type { NavItemConfig } from '@/types/nav';
import { paths } from '@/paths';

export const navItems = [
  { key: 'overview', title: '商品列表', href: paths.dashboard.overview, icon: 'chart-pie' },
  { key: 'customers', title: '會員列表', href: paths.dashboard.customers, icon: 'users' },
  { key: 'integrations', title: '商品組合收藏', href: paths.dashboard.integrations, icon: 'plugs-connected' },
  // { key: 'settings', title: 'Settings', href: paths.dashboard.settings, icon: 'gear-six' },
  { key: 'account', title: '會員中心', href: paths.dashboard.account, icon: 'user' },
  { key: 'error', title: 'Error', href: paths.errors.notFound, icon: 'x-square' },
] satisfies NavItemConfig[];
