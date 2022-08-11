import { Form } from 'src/app/core/components/organisms/form/models';

const notifyItemForm: Form = {
  id: 'notify-item-form',
  title: 'Notify Item',
  elements: [
    {
      name: 'weaponType',
      type: 'select',
      placeholder: 'Weapon Type',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'Weapon', label: 'Weapon' },
        { value: 'Bullet', label: 'Bullet' },
        { value: 'Other', label: 'Other' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'weaponName',
      type: 'text',
      placeholder: 'Weapon Name',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'Quantity',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
  ],
  isPrePopulated: false,
  dataSource: {
    url: 'http://localhost:3000/notifyItems?notifyId=[Id]',
    handler: 'weapon|getNotifyItems',
  },
  submit: {
    url: 'http://localhost:3000/notifyItems',
    handler: 'weapon|createNotifyItem',
  },
};

export default notifyItemForm;
