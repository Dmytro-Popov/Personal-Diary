import Modal from "./Modal";
import EntryDetails from "./EntryDetails";

const ViewEntryModal = ({ entry, onClose, onDelete }) => {
  return (
    <Modal onClose={onClose}>
      <EntryDetails
        entry={entry}
        onClose={onClose}
        onDelete={onDelete}
      />
    </Modal>
  );
};

export default ViewEntryModal;