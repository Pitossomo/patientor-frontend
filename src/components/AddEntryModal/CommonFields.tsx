import { TextField } from "@material-ui/core";
import { Field } from "formik";
import { useStateValue } from "../../state";
import { EntryType } from "../../types";
import { DiagnosisSelection, EntryTypeOption, SelectField } from "../FormField";

const typeOptions: EntryTypeOption[] = [
  { value: EntryType.HealthCheck, label: "Health Check" },
  { value: EntryType.Hospital, label: "Hospital" },
  { value: EntryType.OccupationalHealthcare, label: "Occupational Healthcare" },
];

interface Props {
}

const CommonFields = (): Props => {
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
      placeholder="Date"
      name="date"
      component={TextField}
    />
  </>
}

export default CommonFields