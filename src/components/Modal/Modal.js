import ModalComponent from './styles';

const Modal = ({ open, onClose, children }) => {
	return (
		<ModalComponent open={open} onClose={onClose}>
			{children}
		</ModalComponent>
	);
};

export default Modal;