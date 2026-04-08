import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, }: Props) {
	return (
		<button
			className={styles.customButton}>
			{children}
		</button>
	);
}