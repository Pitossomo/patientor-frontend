import { Field } from "formik";
import { validateRequiredDate, validateRequiredValue } from "../../utils";
import { TextField } from "../FormField";

const OccupationalHealthcareFields = () => (
  <>
    <Field
      label="Employer name"
      placeholder="Employer name"
      name="employerName"
      component={TextField}
      validate={validateRequiredValue}
    />

    <Field
      label="Sick Leave Start Date"
      placeholder="Sick Leave Start Date"
      name="sickLeave.startDate"
      component={TextField}
      validate={validateRequiredDate}
    />

    <Field
      label="Sick Leave End Date"
      placeholder="Sick Leave End Date"
      name="sickLeave.endDate"
      component={TextField}
      validate={validateRequiredValue}
    />

  </>
);

export default OccupationalHealthcareFields;