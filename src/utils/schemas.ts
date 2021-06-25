import * as yup from "yup";

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const registerSchema = loginSchema.shape({
  firstname: yup.string().required("FirstName is required"),
  lastname: yup.string(),
  confirm_password: yup.string()
    .required("Confirm Password is required")
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  address: yup.string().required("Address is required"),
  phone: yup.string()
    .required("Phone Number is required"),
  userImage: yup.mixed()
    .required("User Image is required")
    // .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .pdf and .doc", (value) => {
    //   console.log(value)
    //   return value && (
    //     value[0].type === "image/jpeg" ||
    //     value[0].type === "image/jpg" ||
    //     value[0].type === "image/webp" ||
    //     value[0].type === "image/bmp" ||
    //     value[0].type === "image/png"
    //   )
    // })
});