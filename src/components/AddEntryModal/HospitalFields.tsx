import { TextField } from "../FormField";
import { Field } from "formik";
import { validateRequiredDate, validateRequiredValue } from "../../utils";

const HospitalFields = () => (
  <>
    <Field
      label="Discharge date"
      placeholder="YYYY-MM-DD"
      name="discharge.date"
      component={TextField}
      validate={validateRequiredDate}
    />

    <Field
      label="Discharge criteria"
      placeholder="Discharge criteria"
      name="discharge.criteria"
      component={TextField}
      validate={validateRequiredValue}
    />
  </>
);

export default HospitalFields;