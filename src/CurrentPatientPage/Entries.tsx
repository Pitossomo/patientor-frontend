import { Box, Typography } from "@material-ui/core";
import { useStateValue } from "../state";
import { Entry } from "../types";

const Entries = ({ entries }: { entries: Entry[] }) => {
  const [{ diagnoses },] = useStateValue();

  if (entries.length === 0) return null;

  return <Box>
    <br />
    <Typography variant="h6">entries</Typography>
    <Box>
      {entries.map((entry, i) =>
        <Box key={`entry${i}`}>
          <Typography>{entry.date} <i>{entry.description}</i></Typography>
          {
            entry.diagnosisCodes
              ? <ul>
                {entry.diagnosisCodes.map((code, j) =>
                  <li key={`code${i}${j}`}>
                    {code} {diagnoses[code].name}
                  </li>
                )}
              </ul>
              : null
          }
        </Box>
      )}
    </Box>
  </Box>;
};

export default Entries;