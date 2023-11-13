'use client'
import Modal from 'react-modal';

import styles from './style.module.scss';

interface ModalWindowProps {
	children?: React.ReactNode;
	isOpen: boolean;
	handelClose: (value: boolean) => void;
}

const customStyles = {
	overlay: {
		backgroundColor: 'rgba(0, 0, 0, 0.75)',
		zIndex: '10',
		display: "flex",
		justifyContent: 'center',
		alignItems: "center",
	},
};

export const ModalWindow = ({ children, isOpen, handelClose }: ModalWindowProps) => {

	const closeModal = () => {
		handelClose(false);
	}

	return (
		<Modal
			className={styles.modal}
			isOpen={isOpen}
			onRequestClose={closeModal}
			style={customStyles}
			contentLabel="Example Modal"
			ariaHideApp={false}
		>
			{children}
			<button className={styles.close} onClick={closeModal}>&#215;</button>
		</Modal>
	)
}
