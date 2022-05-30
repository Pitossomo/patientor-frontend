import { TextField } from "@material-ui/core";
import { Field } from "formik";

const HospitalFields = () => (
  <>
    <Field
      label="Discharge date"
      placeholder="Discharge date"
      name="dischargeDate"
      component={TextField}
    />

    <Field
      label="Discharge criteria"
      placeholder="Discharge criteria"
      name="dischargeCriteria"
      component={TextField}
    />
  </>
)

export default HospitalFields