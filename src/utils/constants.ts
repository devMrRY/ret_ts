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


export const register: any = {
  fields: [
    {
      field: "textbox",
      name: "firstname",
      label: "FirstName",
      type: "text",
      variant: "outlined",
      props: {}
    },
    {
      field: "textbox",
      name: "lastname",
      variant: "outlined",
      label: "LastName",
      type: "text",
      props: {}
    },
    {
      field: "textbox",
      name: "email",
      label: "Email",
      variant: "outlined",
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
      variant: "outlined",
      type: "phone",
    },
    {
      field: "textbox",
      name: "address",
      label: "Address",
      variant: "outlined",
      type: "text",
    },
    {
      field: "textbox",
      name: "password",
      label: "Password",
      variant: "outlined",
      type: "password",
    },
    {
      field: "textbox",
      name: "confirm_password",
      label: "Confirm Password",
      variant: "outlined",
      type: "password",
    },
    {
      field: "file",
      name: "userImage",
      label: "User Image",
      type: "file",
    }
  ]
};

export const profile:any = {
  fields: [
    ...register.fields.filter((item:any) => !["password", "confirm_password", "userImage"].includes(item.name))
  ]
}