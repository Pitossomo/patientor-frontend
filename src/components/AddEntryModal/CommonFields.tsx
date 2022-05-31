import { TextField } from "@material-ui/core";
import { Field } from "formik";
import { EntryType } from "../../types";
import { EntryTypeOption, SelectField } from "../FormField";

const typeOptions: EntryTypeOption[] = [
  { value: EntryType.HealthCheck, label: "Health Check" },
  { value: EntryType.Hospital, label: "Hospital" },
  { value: EntryType.OccupationalHealthcare, label: "Occupational Healthcare" },
];

const CommonFields = () => {
  return <>
    <SelectField label="Type" name="type" options={typeOptions} />

    <Field
      label="Description"
      placeholder="Description"
      name="description"
      component={TextField}
    />

    <Field
      label="Specialist"
      placeholder="Specialist"
      name="specialist"
      component={TextField}
    />

    <Field
      label="Date"
      placeholder="YYYY-MM-DD"
      name="date"
      component={TextField}
    />
  </>;
};

export default CommonFields;