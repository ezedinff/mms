import { Form } from 'src/app/mms-common/models/form';
const approveItemForm: Form = {
  title: 'Approve Item',
  elements: [
    {
      name: 'type',
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
      name: 'name',
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
};
const approveForm: Form = {
  title: 'Request Approval',
  elements: [
    {
      name: 'approveItems',
      type: 'formArray',
      placeholder: 'Approve Items',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'type',
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
          name: 'name',
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
    },
    {
      name: 'approveattachments',
      type: 'file',
      placeholder: 'Approve Attachments',
      defaultValue: '',
    },
  ],
};

export default { approveItemForm, approveForm };
