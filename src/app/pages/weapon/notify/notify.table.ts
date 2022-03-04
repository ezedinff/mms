import { Action } from 'src/app/mms-common/organisms/table/table.component';
import { TableState } from 'src/app/store/models/table.state';

const baseApiUrl = 'http://localhost:3000';
const dataSourceUrl = `${baseApiUrl}/notifies`;
const actions: Array<Action> = [
  { name: 'createNew.expand', type: 'expand', path: 'notifies' },
  { name: 'createNew.edit', type: 'edit' },
];

const notifyTableState: TableState = {
  id: 'notify table',
  title: 'notifyItem.listofweaponsthathavebeennotified',
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
      type: 'notifyItems',
      links: {
        getPath: `${baseApiUrl}/notifyItems?notifiesId=[id]`,
        createPath: `${baseApiUrl}/notifyItems`,
        updatePath: `${baseApiUrl}/notifyItems/[id]`,
        deletePath: `${baseApiUrl}/notifyItems/[id]`,
      },
      relationType: 'many',
    },
  ],
};

// set this state to the store
// effect will fetch the data from the api and set it to the store

export default notifyTableState;
