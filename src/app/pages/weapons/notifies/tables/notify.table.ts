import { Table } from 'src/app/core/components/organisms/table/models';

const notifyTable: Table = {
  id: 'notify-table',
  title: 'Notify Weapons',
  isLoading: false,
  actions: [
    {
      name: 'View Details',
      type: 'expand',
      actionType: '[Page] View Details',
    },
    {
      name: 'Edit',
      type: 'edit',
      actionType: '[Page] Open Dialog With Form For Edit',
      formId: 'notify-form',
    },
  ],
  headerActions: [
    {
      name: 'Refresh',
      icon: 'refresh',
      type: 'refresh',
      actionType: '[Page] Refresh',
    },
    {
      name: 'Filter',
      icon: 'filter_list',
      type: 'filter',
      actionType: '[Page] Open Dialog Filter',
    },
    {
      name: 'Create',
      icon: 'add',
      label: 'Create Notify',
      type: 'create',
      actionType: '[Page] Open Dialog With Form',
      formId: 'notify-form',
    },
  ],
  columns: [],
  excludedColumns: ['id'],
  displayedColumns: [],
  dataSource: {
    url: 'http://localhost:3000/notifies',
    params: {},
    handler: 'weapon|notifies',
  },
  data: [],
  paginated: true,
  filterable: false,
  sortable: false,
  pagination: {
    pageSize: 10,
    pageNumber: 1,
    total: 0,
  },
};

export default notifyTable;
