import React from "react";
import styles from "./FortuneModal.module.scss";
import Button from "../button/Button";
import type { FortunePrize } from "../../types";

interface FortuneModalProps {
	winner: FortunePrize;
	onClose: () => void;
}

export const FortuneModal: React.FC<FortuneModalProps> = ({ winner, onClose }) => {
	return (
		<div className={styles.modalOverlay} onClick={onClose}>
			<div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
				<h2>{winner.reveal}</h2>

				<div className={styles.modalMain}>
					<p className={styles.modalText}>{winner.label}</p>
					<img src={winner.img} alt="prize" />
					<p className={styles.value}>{winner.value}</p>
				</div>

				{winner.info && (
					<p className={styles.modalTextSub}>{winner.info}</p>
				)}

				<Button onClick={onClose}>
					<span className={styles.buttonText}>Продолжить</span>
				</Button>
			</div>
		</div>
	);
};
