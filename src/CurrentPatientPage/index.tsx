import React from "react";
import { Typography } from "@material-ui/core";

import GenderIcon from "../components/GenderIcon";
import Entries from "./Entries";

import { setCurrentPatient, useStateValue } from "../state";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";

const PatientPage = () => {
  const [state, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  const currentPatient = state.currentPatient;
  if (!id) return null;

  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`).then(result => console.log(result.data));

    const fetchPatient = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );
        dispatch(setCurrentPatient(patientFromApi));

      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatient();
  }, []);

  // const [error, setError] = React.useState<string>();

  if (currentPatient) return (
    <div className="App">
      <Typography variant="h6">
        {currentPatient.name}
        <GenderIcon gender={currentPatient.gender} />
      </Typography>
      <Typography>ssn: {currentPatient.ssn}</Typography>
      {currentPatient?.occupation
        ? <Typography>occupation: {currentPatient.occupation}</Typography>
        : null
      }
      <br />
      <Entries entries={currentPatient.entries} />
    </div>
  );

  else return null;
};

export default PatientPage;