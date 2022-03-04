import { Form } from 'src/app/mms-common/models/form';
const notifyItemForm: Form = {
  title: 'notifyWeapon.form.notifyItems',
  elements: [
    {
      name: 'weaponType',
      type: 'select',
      placeholder: 'notifyWeapon.form.weaponType',
      defaultValue: '',
      size: 4,
      options: [
        { value: 'Weapon', label: 'notifyWeapon.form.options.Weapon' },
        { value: 'Bullet', label: 'notifyWeapon.form.options.Bullet' },
        { value: 'Other', label: 'notifyWeapon.form.options.Other' },
      ],
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'weaponName',
      type: 'text',
      placeholder: 'notifyWeapon.form.weaponName',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'quantity',
      type: 'number',
      placeholder: 'notifyWeapon.form.quantity',
      defaultValue: '',
      size: 4,
      validations: [{ type: 'required', value: true }],
    },
  ],
};
const notifyForm: Form = {
  title: 'notifyWeapon.form.notifyWeapon',
  elements: [
    {
      name: 'notifyItems',
      type: 'formArray',
      placeholder: 'notifyWeapon.form.notifyItems',
      defaultValue: '',
      formArrayItems: [
        {
          name: 'weaponType',
          type: 'select',
          placeholder: 'notifyWeapon.form.weaponType',
          defaultValue: '',
          size: 4,
          options: [
            { value: 'Weapon', label: 'notifyWeapon.form.options.Weapon' },
            { value: 'Bullet', label: 'notifyWeapon.form.options.Bullet' },
            { value: 'Other', label: 'notifyWeapon.form.options.Other' },
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'weaponName',
          type: 'text',
          placeholder: 'notifyWeapon.form.weaponName',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'quantity',
          type: 'number',
          placeholder: 'notifyWeapon.form.quantity',
          defaultValue: '',
          size: 4,
          validations: [{ type: 'required', value: true }],
        },
      ],
    },
    {
      name: 'weaponDescription',
      type: 'text',
      placeholder: 'notifyWeapon.form.weaponDescription',
      defaultValue: '',
      size: 12,
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'attachments',
      type: 'file',
      placeholder: 'notifyWeapon.form.attachments',
      defaultValue: '',
    },
  ],
};

export default { notifyItemForm, notifyForm };
