export const signin = {
  fields: [
    {
      field: "textbox",
      name: "email",
      label: "Email",
      type: "email",
      class: [],
      props: {
        disabled: false,
      }
    },
    {
      field: "textbox",
      name: "password",
      label: "Password",
      type: "password",
      class: [],
      props: {}
    },
  ],
};


export const register = {
  fields: [
    {
      field: "textbox",
      name: "firstname",
      label: "FirstName",
      type: "text",
      props: {}
    },
    {
      field: "textbox",
      name: "lastname",
      label: "LastName",
      type: "text",
      props: {}
    },
    {
      field: "textbox",
      name: "email",
      label: "Email",
      type: "email",
      class: [],
      props: {
        disabled: false,
      }
    },
    {
      field: "textbox",
      name: "phone",
      label: "Phone Number",
      type: "phone",
    },
    {
      field: "textbox",
      name: "address",
      label: "Address",
      type: "text",
    },
    {
      field: "textbox",
      name: "password",
      label: "Password",
      type: "password",
    },
    {
      field: "textbox",
      name: "confirm_password",
      label: "Confirm Password",
      type: "password",
    }
  ]
};
