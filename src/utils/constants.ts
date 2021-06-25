import { loginSchema } from './schemas';

export const signin = {
  fields: [
    {
      field: "textbox",
      name: "email",
      label: "Email",
      type: "email",
      helperText: "",
      class: [],
      disabled: false,
      props: {}
    },
    {
      field: "textbox",
      name: "password",
      label: "Password",
      type: "password",
      class: [],
    },
  ],
  submit: {
    label: "Submit",
    props: {
      variant: "contained"
    }
  },
  rules: loginSchema,
  cancel: {},
};
