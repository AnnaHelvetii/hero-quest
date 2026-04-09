import React from 'react';
import styles from "./FortuneTimer.module.scss";

interface TimerProps {
	timeLeft: { hours: number; minutes: number; seconds: number };
}

export const FortuneTimer: React.FC<TimerProps> = ({ timeLeft }) => {
	const formatDigits = (num: number) => num.toString().padStart(2, '0').split('');

	const renderUnit = (value: number, label: string) => (
		<div className={styles.timerUnit}>
			<div className={styles.digitsRow}>
				{formatDigits(value).map((digit, i) => (
					<span key={i} className={styles.digitBox}>{digit}</span>
				))}
			</div>
			<p className={styles.timerName}>{label}</p>
		</div>
	);

	return (
		<div className={styles.timerWrapper}>
			{renderUnit(timeLeft.hours, "часы")}
			<div className={styles.timerDivider}>:</div>
			{renderUnit(timeLeft.minutes, "минуты")}
			<div className={styles.timerDivider}>:</div>
			{renderUnit(timeLeft.seconds, "секунды")}
		</div>
	);
};
