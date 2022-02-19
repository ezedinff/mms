import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';

const baseApiUrl = 'http://localhost:3000';
const dataSourceUrl = `${baseApiUrl}/approves`;
const actions: Array<Action> = [
  { name: 'Expand', type: 'expand', path: 'approves' },
  { name: 'Edit', type: 'edit' },
];

const approveTableState: TableState = {
  id: 'request table',
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
      type: 'approveItems',
      links: {
        getPath: `${baseApiUrl}/approveItems?approvesId=[id]`,
        createPath: `${baseApiUrl}/approveItems`,
        updatePath: `${baseApiUrl}/approveItems/[id]`,
        deletePath: `${baseApiUrl}/approveItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};

export default approveTableState;
