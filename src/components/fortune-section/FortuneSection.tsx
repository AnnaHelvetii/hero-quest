import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "./FortuneSection.module.scss";
import pic from "./../../img/img.svg";
import giftIcon from "./../../img/white-icons/gift.svg";
import Button from "../button/Button";
import { PRIZES } from "./../../data";
import type { FortunePrize } from "./../../types";

export const FortuneSection: React.FC = () => {
	const cardWidth = 120;
	const gap = 4;
	const fullCardStep = cardWidth + gap;
	const [isSpinning, setIsSpinning] = useState(false);
	const [winner, setWinner] = useState<FortunePrize | null>(null);
	const [offset, setOffset] = useState(0);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const extendedPrizes = useMemo(() => {
		return Array(50).fill(PRIZES).flat();
	}, []);

	useEffect(() => {
		if (wrapperRef.current) {
			const wrapperWidth = wrapperRef.current.offsetWidth;
			const targetIndex = 3;
			const initialOffset = (targetIndex * fullCardStep) - (wrapperWidth / 2 - cardWidth / 2);
			setOffset(initialOffset);
		}
	}, [fullCardStep]);

	const handleSpin = () => {
		if (isSpinning || !wrapperRef.current) return;

		setIsSpinning(true);
		setWinner(null);

		const randomIndex = Math.floor(Math.random() * PRIZES.length);
		const winningPrize = PRIZES[randomIndex];
		const currentIteration = Math.floor(offset / (PRIZES.length * fullCardStep));
		const extraSpins = 4;
		const targetItemIndex = (currentIteration + extraSpins) * PRIZES.length + randomIndex;
		const wrapperWidth = wrapperRef.current.offsetWidth;
		const finalOffset = (targetItemIndex * fullCardStep) - (wrapperWidth / 2 - cardWidth / 2);

		setOffset(finalOffset);
		setTimeout(() => {
			setIsSpinning(false);
			setWinner(winningPrize);
		}, 4000);
	};

	return (
		<main className={styles.fortuneSection}>
			<section className={styles.wheelSection}>
				<div className={styles.wheelTop}>
					<div className={styles.wheelText}>
						<p className={styles.wheelTitle}>Колесо Фортуны</p>
						<p className={styles.wheelSubTitle}>
							Испытайте удачу раз в день и выигрывайте бонусы для VPN!
						</p>
					</div>
					<img src={pic} />
				</div>

				<div className={styles.rouletteWrapper} ref={wrapperRef}>
					<div className={styles.pointerContainer}></div>
					<ul
						className={styles.wheelList}
						style={{
							transform: `translateX(${-offset}px)`,
							transition: isSpinning
								? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)'
								: 'none'
						}}
					>
						{extendedPrizes.map((prize, index) => (
							<li key={index} className={styles.listItem}>
								<p className={styles.itemPrize}>{prize.label}</p>
								<img src={prize.img} alt={prize.label} />
								<p className={styles.itemPrizeValue}>{prize.value}</p>
							</li>
						))}
					</ul>
				</div>

				<div className={styles.wheelBottom}>
					<Button onClick={handleSpin} disabled={isSpinning}>
						<span>Испытать удачу</span>
						<img src={giftIcon} alt="gift" />
					</Button>
					<p className={styles.footerText}>
						Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный 1 день подписки!
					</p>
					<div className={styles.daysBlock}>
						{[1, 2, 3, 4, 5, 6, 7].map(
							day => <p className={styles.day} key={day}>{day}</p>
						)}
					</div>
				</div>
			</section>
			<section className={styles.infoSection}></section>

			{winner && !isSpinning && (
				<div className={styles.modalOverlay} onClick={() => setWinner(null)}>
					<div className={styles.modalContent}>
						<h2>Ваш приз!</h2>
						<img src={winner.img} alt="prize" />
						<p>{winner.label} {winner.value}</p>
					</div>
				</div>
			)}
		</main>
	);
};
