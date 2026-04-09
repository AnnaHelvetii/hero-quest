import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ children, className, ...props }: Props) {
	return (
		<button
			className={`${styles.customButton} ${className || ""}`}
			{...props} 
		>
			{children}
		</button>
	);
}
