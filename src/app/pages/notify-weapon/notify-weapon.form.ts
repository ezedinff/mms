import {Form} from "../../mms-common/models/form";

const NotifyWeaponForm: Form = {
  title: " Weapon Notify Form",
  elements: [
    {
      name: "singleData",
      type: "formArray",
      placeholder: "single data input",
      defaultValue: "",
      formArrayItems: [
        {
          name: "type",
          type: "select",
          placeholder: "type",
          defaultValue: "",
          size: 4,
          options: [
              {value: "xxxWeapon", label: "xxx Weapon type"},
              {value: "yyyWeapon", label: "yyy weapon type"}
          ],
          validations: [{ type: 'required', value: true }],
        },
        {
          name: "quantity",
          type: "number",
          size: 4,
          placeholder: "Quantity",
          defaultValue: "",
          validations: [{ type: 'required', value: true }],
        },
        {
          name: 'name',
          type: "select",
          placeholder: "name",
          defaultValue: "",
          size: 4,
          refer: "type",
          options: [
            {value: "xxxWeapon", label: "xxx weapon", referredValue: "xxxWeapon" },
            {value: "xyzWeapon", label: "xyz weapon", referredValue: "xxxWeapon"},
            {value: "yyyWeapon", label: "yyy weapon", referredValue: "yyyWeapon"},
            {value: "ykzWeapon", label: "ykz weapon", referredValue: "yyyWeapon"},
          ],
          validations: [{ type: 'required', value: true }],
        },
      ]
    },
    {
      name: "description",
      type: "text",
      size: 12,
      placeholder: "Description",
      defaultValue: "",
      validations: [{ type: 'required', value: true }],
    },
    {
      name: 'document_attachment',
      type: "file",
      placeholder: "Document Attachment",
      defaultValue: "",
      validations: [{ type: 'required', value: true }],
    }
  ]
}

export default NotifyWeaponForm;
