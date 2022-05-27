import { Box, Typography } from "@material-ui/core";
import EntryBox from "../components/Entry.tsx/Entry";
import { Entry } from "../types";

const Entries = ({ entries }: { entries: Entry[] }) => {
  if (entries.length === 0) return null;

  return <Box>
    <br />
    <Typography variant="h6">entries</Typography>
    <Box> {entries.map(entry =>
      <EntryBox key={entry.id} entry={entry} />
    )} </Box>
  </Box>;
};

export default Entries;