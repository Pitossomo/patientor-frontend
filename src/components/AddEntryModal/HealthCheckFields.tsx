import React from "react";
import { RatingOption, SelectField } from "../FormField";
import { HealthCheckRating } from "../../types";

const ratingOptions: RatingOption[] = [
  { value: HealthCheckRating.Healthy, label: "Healthy" },
  { value: HealthCheckRating.LowRisk, label: "Low Risk" },
  { value: HealthCheckRating.HighRisk, label: "High Risk" },
  { value: HealthCheckRating.CriticalRisk, label: "Critical Risk" },
];

const HealthCheckFields = () =>
  <>
    <SelectField label="Health Check Rating" name="healthCheckRating" options={ratingOptions} />
  </>;

export default HealthCheckFields;