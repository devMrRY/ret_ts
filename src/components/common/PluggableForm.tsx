import { Button } from "@material-ui/core";
import FormElements from "./FormElements";
import { useFormik } from 'formik';

const PluggableForm: React.FC<any> = ({ config, valueProps }) => {
  const { fields, submit } = config;
  const formik = useFormik({
    initialValues: valueProps,
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
      <div className="theme-form-container" onChange={formik.handleChange}>
        {fields?.map((item: any, i: number) => (
          <div key={i} className="theme-form-item">
            <FormElements
              config={item}
              variant="contained"
              helperText={formik.errors[item.name]}
              value={formik.values[item.name]}
            />
          </div>
        ))}
      </div>
      <div className="theme-btn-container">
        <Button type="submit" {...submit.props}>{submit.label}</Button>
      </div>
    </form>
  );
};

export default PluggableForm;
