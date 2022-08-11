import { Menu } from '../molecules/side-nav-item/menu';

export const menus: Array<Menu> = [
  {
    name: 'Dashboard',
    icon: 'dashboard',
    link: '/admin/dashboard',
    open: false,
    trans: 'menus.dashboard',
  },
  {
    name: 'Weapon',
    icon: 'view_in_ar',
    open: true,
    trans: 'menus.weapon',
    sub: [
      {
        name: 'Notify Weapon',
        icon: '',
        link: '/admin/weapons/notifies',
        open: false,
        trans: 'menus.notifyWeapon',
      },
      {
        name: 'Inventory',
        icon: '',
        link: '/admin/weapons/inventories',
        open: false,
        trans: 'menus.inventory',
      },
      {
        name: 'Request',
        icon: '',
        link: '/admin/weapons/requests',
        open: false,
        trans: 'menus.request',
      },
      {
        name: 'Report Damages',
        icon: '',
        link: '/admin/weapons/damages',
        open: false,
        trans: 'menus.reportDamages',
      },
    ],
  },
  {
    name: 'User Management',
    icon: 'person',
    link: '/admin/user-management',
    open: false,
    trans: 'menus.userManagement',
  },
];
