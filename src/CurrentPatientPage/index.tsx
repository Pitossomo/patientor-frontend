import React, { useState } from "react";
import { Box, Typography } from "@material-ui/core";

import HealthRatingBar from "../components/HealthRatingBar";
import { useParams } from "react-router-dom";
import GenderIcon from "../components/GenderIcon";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { Patient } from "../types";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  const [currentPatient, setCurrentPatient] = useState<Patient | undefined>(undefined);
  console.log(id);

  if (!id) return null;

  React.useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`).then(result => console.log(result.data));

    const fetchPatient = async () => {
      try {
        const { data: patientFromApi } = await axios.get<Patient>(
          `${apiBaseUrl}/patients/${id}`
        );

        console.log(patientFromApi);

        setCurrentPatient(patientFromApi);
      } catch (e) {
        console.error(e);
      }
    };
    void fetchPatient();
  }, []);

  // const [error, setError] = React.useState<string>();

  if (currentPatient) return (
    <div className="App">
      <Box>
        <Typography variant="h6">
          {currentPatient.name}
          <GenderIcon gender={currentPatient.gender} />
        </Typography>
        <Typography>ssn: {currentPatient.ssn}</Typography>
        {currentPatient?.occupation
          ? <Typography>occupation: {currentPatient.occupation}</Typography>
          : null
        }
      </Box>

      <HealthRatingBar showText={false} rating={1} />
    </div>
  );

  else return null;
};

export default PatientPage;