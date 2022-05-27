import { State } from "./state";
import { Diagnosis, Patient } from "../types";

export type Action =
  | {
    type: "SET_PATIENT_LIST";
    payload: Patient[];
  }
  | {
    type: "ADD_PATIENT";
    payload: Patient;
  }
  | {
    type: "SET_CURRENT_PATIENT";
    payload: Patient;
  }
  | {
    type: "SET_DIAGNOSES";
    payload: Diagnosis[];
  };

export const setPatientList = (patientListFromApi: Patient[]): Action => {
  return { type: "SET_PATIENT_LIST", payload: patientListFromApi };
};

export const addPatient = (newPatient: Patient): Action => {
  return { type: "ADD_PATIENT", payload: newPatient };
};

export const setCurrentPatient = (currentPatient: Patient): Action => {
  return { type: "SET_CURRENT_PATIENT", payload: currentPatient };
};

export const setDiagnosesList = (diagnosesListFromApi: Diagnosis[]): Action => {
  return { type: "SET_DIAGNOSES", payload: diagnosesListFromApi };
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PATIENT_LIST":
      return {
        ...state,
        patients: {
          ...action.payload.reduce(
            (memo, patient) => ({ ...memo, [patient.id]: patient }),
            {}
          ),
          ...state.patients
        }
      };
    case "ADD_PATIENT":
      return {
        ...state,
        patients: {
          ...state.patients,
          [action.payload.id]: action.payload
        }
      };
    case "SET_CURRENT_PATIENT":
      return {
        ...state,
        currentPatient: action.payload
      };
    case "SET_DIAGNOSES":
      const newDiagnoses: { [code: string]: Diagnosis } = {};
      action.payload.forEach(diagnosis => newDiagnoses[diagnosis.code] = diagnosis);
      return {
        ...state,
        diagnoses: {
          ...state.diagnoses,
          ...newDiagnoses
        }
      };
    default:
      return state;
  }
};
