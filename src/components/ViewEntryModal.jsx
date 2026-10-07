import Modal from "./Modal";
import EntryDetails from "./EntryDetails";

const ViewEntryModal = ({ entry, onClose }) => {
  return (
    <Modal onClose={onClose}>
      <EntryDetails
        entry={entry}
        onClose={onClose}
      />
    </Modal>
  );
};

export default ViewEntryModal;