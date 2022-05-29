import React from "react";
import { Button, Typography } from "@material-ui/core";

import GenderIcon from "../components/GenderIcon";
import Entries from "./Entries";

import { setCurrentPatient, useStateValue } from "../state";
import { useParams } from "react-router-dom";
import axios from "axios";
import { apiBaseUrl } from "../constants";
import { EntryWithoutId, Patient } from "../types";
import AddEntryModal from "../components/AddEntryModal";

const PatientPage = () => {
  const [{ currentPatient }, dispatch] = useStateValue();
  const { id } = useParams<{ id: string }>();

  const [modalOpen, setModalOpen] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string>();

  if (!id) return null;

  const openModal = (): void => setModalOpen(true);

  const closeModal = (): void => {
    setModalOpen(false);
    setError(undefined);
  };

  const submitNewEntry = async (entryValues: EntryWithoutId) => {
    try {
      const { data: savedEntry } = await axios.post<Patient>(
        `${apiBaseUrl}/patients/${id}/entries`,
        entryValues
      );
      if (currentPatient) console.log('addEntry', savedEntry); //dispatch(addEntry(newEntry, currentPatient.id));
      closeModal();

    } catch (e: unknown) {
      if (axios.isAxiosError(e)) {
        console.error(e?.response?.data || "Unrecognized axios error");
        setError(String(e?.response?.data?.error || "Unrecognized axios error"));
      } else {
        console.error("Unknown error", e);
        setError("Unknown error");
      }
    }
  };

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
      <AddEntryModal
        modalOpen={modalOpen}
        onSubmit={submitNewEntry}
        error={error}
        onClose={closeModal}
      />
      <Button variant="contained" onClick={() => openModal()}>
        Add New Entry
      </Button>
    </div>
  );

  else return null;
};

export default PatientPage;