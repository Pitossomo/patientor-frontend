import { TextField } from "../FormField";
import { Field } from "formik";

const HospitalFields = () => (
  <>
    <Field
      label="Discharge date"
      placeholder="YYYY-MM-DD"
      name="discharge.date"
      component={TextField}
    />

    <Field
      label="Discharge criteria"
      placeholder="Discharge criteria"
      name="discharge.criteria"
      component={TextField}
    />
  </>
);

export default HospitalFields;