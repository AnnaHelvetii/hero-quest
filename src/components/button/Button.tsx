import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, ...props }: Props) {
	return (
		<button
			className={styles.customButton}
			{...props} 
		>
			{children}
		</button>
	);
}
