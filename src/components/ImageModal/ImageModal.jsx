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

// Modal.setAppElement('#root');

export default function ImageModal({ isOpen, onRequestClose, img }) {
  if (!img) return null;

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles}>
      <img
        // className={css.modalImage}
        src={img.urls.regular}
        alt={img.alt_description}
      />
    </Modal>
  );
}