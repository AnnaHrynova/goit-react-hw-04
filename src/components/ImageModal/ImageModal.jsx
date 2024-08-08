import Modal from "react-modal";
// import css from "./ImageModal.module.css";

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

export default function ImageModal({ isOpen, onClose, img }) {
  if (!img) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} style={customStyles}>
      <img
        // className={css.modalImage}
        src={img.urls.regular}
        alt={img.alt_description}
      />
    </Modal>
  );
}