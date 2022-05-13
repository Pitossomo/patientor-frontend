import React from "react";
import { Box, Typography } from "@material-ui/core";

import HealthRatingBar from "../components/HealthRatingBar";
import { useParams } from "react-router-dom";
// import GenderIcon from "../components/GenderIcon";

const PatientPage = () => {
  const { id } = useParams<{ id: string }>();
  console.log(id);
  // const [{ currentPatient }, dispatch] = useStateValue();
  // const [error, setError] = React.useState<string>();
  const currentPatient = {
    "id": "d2773822-f723-11e9-8f0b-362b9e155667",
    "name": "Dana Scully",
    "dateOfBirth": "1974-01-05",
    "ssn": "050174-432N",
    "gender": "female",
    "occupation": "Forensic Pathologist"
  };

  return (
    <div className="App">
      <Box>
        <Typography variant="h6">
          {currentPatient.name}
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
};

export default PatientPage;