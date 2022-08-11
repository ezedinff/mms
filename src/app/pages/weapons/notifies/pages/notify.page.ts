import { Page } from 'src/app/core/components/templates/pages/models';
import notifyForm from '../forms/notify.form';
import notifyTable from '../tables/notify.table';

const notifyPage: Page = {
  id: 'notify',
  title: 'Notify Weapon',
  pageType: 'default',
  forms: [notifyForm],
  tables: [notifyTable],
};

export default notifyPage;
