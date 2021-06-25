import { Button } from "@material-ui/core";
import FormElements from "./FormElements";
import { useFormik } from 'formik';

const PluggableForm: React.FC<any> = ({ config }) => {
  const { fields, submit } = config;
  const formik = useFormik({
    initialValues: {
      email: 'foobar@example.com',
      password: 'foobar',
    },
    validationSchema: config.rules,
    onSubmit: (values) => {
      handleSubmit(values)
    }
  });

  const handleSubmit = (values: any) => {
    console.log(values)
  }

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-container" onChange={formik.handleChange}>
        {fields?.map((item: any, i: number) => (
            <FormElements
              config={item}
              helperText={formik.errors['email']}
              value={formik.values['email']}
            />
        ))}
      </div>
      <Button type="submit" {...submit.props}>{submit.label || "Submit"}</Button>
    </form>
  );
};

export default PluggableForm;
