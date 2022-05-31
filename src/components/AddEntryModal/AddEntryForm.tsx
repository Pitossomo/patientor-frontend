import React from "react";
import { useStateValue } from "../../state";
import { Field, Form, Formik } from "formik";

import { DiagnosisSelection, EntryTypeOption, SelectField, TextField } from "../FormField";
import { EntryType, EntryWithoutId } from "../../types";
import { Button, Grid } from "@material-ui/core";
import HospitalFields from "./HospitalFields";
import { validateRequiredDate, validateRequiredValue } from "../../utils";
import HealthCheckFields from "./HealthCheckFields";
import OccupationalHealthcareFields from "./OccupationalHealthcareFields";

interface Props {
  onSubmit: (values: EntryWithoutId) => void;
  onCancel: () => void
}

const typeOptions: EntryTypeOption[] = [
  { value: EntryType.HealthCheck, label: "Health Check" },
  { value: EntryType.Hospital, label: "Hospital" },
  { value: EntryType.OccupationalHealthcare, label: "Occupational Healthcare" },
];

const AddEntryForm = ({ onSubmit, onCancel }: Props) => {
  const [{ diagnoses }] = useStateValue();

  return (
    <Formik
      initialValues={{
        type: "Hospital",
        description: "",
        date: "",
        specialist: "",
        diagnosisCodes: [],
        discharge: {
          date: "",
          criteria: ""
        }
      }}
      onSubmit={onSubmit}
    >
      {({ values, isValid, dirty, setFieldValue, setFieldTouched }) => {
        return (
          <Form className="form ui">
            <SelectField label="Type" name="type" options={typeOptions} />

            <Field
              label="Description"
              placeholder="Description"
              name="description"
              component={TextField}
              validate={validateRequiredValue}
            />

            <Field
              label="Specialist"
              placeholder="Specialist"
              name="specialist"
              component={TextField}
              validate={validateRequiredValue}
            />

            <Field
              label="Date"
              placeholder="YYYY-MM-DD"
              name="date"
              component={TextField}
              validate={validateRequiredDate}
            />

            <DiagnosisSelection
              setFieldValue={setFieldValue}
              setFieldTouched={setFieldTouched}
              diagnoses={Object.values(diagnoses)}
            />

            {values.type === EntryType.Hospital && <HospitalFields />}
            {values.type === EntryType.HealthCheck && <HealthCheckFields />}
            {values.type === EntryType.OccupationalHealthcare && <OccupationalHealthcareFields />}

            <Grid>
              <Grid item>
                <Button
                  color="secondary"
                  variant="contained"
                  style={{ float: "left" }}
                  type="button"
                  onClick={onCancel}
                >
                  Cancel
                </Button>
              </Grid>
              <Grid item>
                <Button
                  style={{
                    float: "right",
                  }}
                  type="submit"
                  variant="contained"
                  disabled={!dirty || !isValid}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
          </Form>
        );
      }}
    </Formik>
  );
};

export default AddEntryForm;