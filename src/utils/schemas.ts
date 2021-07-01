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
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .png", (value) => {
      return value && (
        ["image/jpeg", "image/jpg", "image/webp", "image/bmp", "image/png"].includes(value.type)
      )
    })
});

export const profileSchema = registerSchema.shape({
  confirm_password: yup.string(),
  password: yup.string(),
  userImage: yup.mixed()
    .test("type", "Only the following formats are accepted: .jpeg, .jpg, .bmp, .png", (value) => {
      return !value || value && (
        ["image/jpeg", "image/jpg", "image/webp", "image/bmp", "image/png"].includes(value.type)
      )
    })
});