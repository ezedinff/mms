import { Form } from 'src/app/core/components/organisms/form/models';
import notifyItemForm from './notify-item.form';

const notifyForm: Form = {
  id: 'notify-form',
  title: 'Notify Weapon Form',
  elements: [
    {
      name: 'notifyItems',
      type: 'formArray',
      placeholder: 'Notify Items',
      defaultValue: '',
      formArrayItems: notifyItemForm.elements,
    },
    {
      name: 'weaponDescription',
      type: 'text',
      placeholder: 'Weapon Description',
      defaultValue: '',
      size: 12,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'Attachments',
      defaultValue: '',
    },
  ],
  isPrePopulated: false,
  dataSource: {
    hasChild: true,
    child: {
      name: 'notifyItems',
      url: 'http://localhost:3000/notifyItems',
    },
    handler: 'weapon|getNotifyItems',
  },
  submit: {
    url: 'http://localhost:3000/notifies',
    handler: 'weapon|createNotify',
  },
};

export default notifyForm;
