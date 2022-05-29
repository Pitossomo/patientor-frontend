import { Box, Typography } from "@material-ui/core";
import { useStateValue } from "../../state";
import { Entry } from "../../types";
import EntryTypeSymbol from "./EntryTypeSymbol";

const EntryBox = ({ entry }: { entry: Entry }) => {
  const [{ diagnoses },] = useStateValue();

  return <Box sx={{ border: 1, borderRadius: 4 }}>
    <Typography>
      {entry.date}
      <EntryTypeSymbol entry={entry} />
    </Typography>
    <Typography><i>{entry.description}</i></Typography>
    {
      entry.diagnosisCodes
        ? <ul>
          {entry.diagnosisCodes.map((code, j) =>
            <li key={`${entry.id}-${j}`}>
              {code} {diagnoses[code].name}
            </li>
          )}
        </ul>
        : null
    }
    <Typography>diagnose by {entry.specialist}</Typography>
  </Box>;
};

export default EntryBox;