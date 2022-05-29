import { Dialog, DialogContent, DialogTitle, Divider } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { EntryWithoutId } from "../../types";
import AddEntryForm from "./AddEntryForm";

interface Props {
  modalOpen: boolean;
  onClose: () => void;
  onSubmit: (entryValues: EntryWithoutId) => void;
  error?: string;
}

const AddEntryModal = ({ modalOpen, onSubmit, onClose, error }: Props) => (
  <Dialog fullWidth={true} open={modalOpen} onClose={() => onClose()}>
    <DialogTitle>Add a new entry</DialogTitle>
    <Divider />
    <DialogContent>
      {error && <Alert severity="error">{`Error: ${error}`}</Alert>}
      <AddEntryForm onSubmit={onSubmit} onCancel={onClose} />
    </DialogContent>
  </Dialog>
);

export default AddEntryModal;