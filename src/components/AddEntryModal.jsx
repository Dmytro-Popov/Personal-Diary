import EntryForm from "./EntryForm";
import Modal from "./Modal";

const AddEntryModal = ({ onClose, onSubmit }) => (
  <Modal onClose={onClose}>
    <EntryForm
      onSubmit={onSubmit}
      onCancel={onClose}
    />
  </Modal>
);

export default AddEntryModal;