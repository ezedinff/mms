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
      type: "text",
      size: 4,
      placeholder: "Weapon Type",
      defaultValue: "",
      validations: [{ type: 'required', value: true }],
    },
    {
        name: "quantity",
        type: "number",
        size: 4,
        placeholder: "quantity",
        defaultValue: "",
        validations: [{ type: 'required', value: true }],
      },
      {
        name: "name",
        type: "text",
        size: 4,
        placeholder: "weapon name",
        defaultValue: "",
        validations: [{ type: 'required', value: true }],
      },
    ]},
    
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
