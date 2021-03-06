import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';
import requestWeaponForm from './request-weapon.form';

const baseApiUrl = 'http://localhost:3000';
const dataSourceUrl = `${baseApiUrl}/requestWeapons`;
const actions: Array<Action> = [
  { name: 'Expand', type: 'expand', path: 'request-for-weapon' },
  { name: 'Edit', type: 'edit' },
  {
    name: 'Approve',
    type: 'approve',
    urlToPopulateForm: `${baseApiUrl}/requestWeapons/[id]`,
    form: requestWeaponForm.requestApprovalForm,
    submittedUrl: `${baseApiUrl}/requestWeaponApprovals`,
  },
  { name: 'Reject', type: 'reject' },
];

const requestForWeaponTable: TableState = {
  id: 'request table',
  title: 'List of weapons that have been requested',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id'],
  links: {
    getPath: dataSourceUrl,
    createPath: `${dataSourceUrl}`,
    updatePath: `${dataSourceUrl}/[id]`,
    deletePath: `${dataSourceUrl}/[id]`,
  },
  actions,
  relations: [
    {
      type: 'requestWeaponItems',
      links: {
        getPath: `${baseApiUrl}/requestWeaponItems?requestWeaponsId=[id]`,
        createPath: `${baseApiUrl}/requestWeaponItems`,
        updatePath: `${baseApiUrl}/requestWeaponItems/[id]`,
        deletePath: `${baseApiUrl}/requestWeaponItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};

const requestItemsForWeaponTable: TableState = {
  id: 'request items table',
  title: 'List of weapons items that are in the request',
  pageNumber: 0,
  pageSize: 5,
  totalItems: 0,
  data: [],
  excludedColumns: ['id', 'requestWeaponsId'],
  links: {
    getPath: `${baseApiUrl}/requestWeaponItems`,
    createPath: `${baseApiUrl}/requestWeaponItems`,
    updatePath: `${baseApiUrl}/requestWeaponItems/[id]`,
    deletePath: `${baseApiUrl}/requestWeaponItems/[id]`,
  },
  actions: actions.slice(1, 2),
  relations: [],
  childOf: {
    requestWeaponsId: 0,
  },
};

export default { requestForWeaponTable, requestItemsForWeaponTable };
