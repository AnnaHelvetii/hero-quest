import React, { useState, useRef, useEffect, useMemo, useCallback } from "react";
import styles from "./FortuneSection.module.scss";
import Button from "../button/Button";
import { FortuneTimer } from "../fortune-timer/FortuneTimer";
import { FortuneModal } from "../fortune-modal/FortuneModal";
import { PRIZES } from "./../../data";
import type { FortunePrize } from "./../../types";
import pic from "./../../img/img.svg";
import giftIcon from "./../../img/white-icons/gift.svg";
import redGiftIcon from "./../../img/accent-icons/small-red-gift.svg";

const CARD_WIDTH = 120;
const GAP = 4;
const FULL_STEP = CARD_WIDTH + GAP;

export const FortuneSection: React.FC = () => {
	const [isSpinning, setIsSpinning] = useState(false);
	const [winner, setWinner] = useState<FortunePrize | null>(null);
	const [offset, setOffset] = useState(0);
	const [showTimer, setShowTimer] = useState(false);
	const [currentDay, setCurrentDay] = useState(1);
	const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });

	const wrapperRef = useRef<HTMLDivElement>(null);
	const extendedPrizes = useMemo(() => Array(50).fill(PRIZES).flat(), []);

	useEffect(() => {
		if (!showTimer) return;
		const interval = setInterval(() => {
			setTimeLeft(prev => {
				if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
				if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
				return { hours: Math.max(0, prev.hours - 1), minutes: 59, seconds: 59 };
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [showTimer]);

	useEffect(() => {
		if (wrapperRef.current) {
			const wrapperWidth = wrapperRef.current.offsetWidth;
			const initialOffset = (3 * FULL_STEP) - (wrapperWidth / 2 - CARD_WIDTH / 2);
			setOffset(initialOffset);
		}
	}, [showTimer]);

	const handleSpin = useCallback(() => {
		if (isSpinning || !wrapperRef.current) return;
		setIsSpinning(true);
		setWinner(null);

		const randomIndex = Math.floor(Math.random() * PRIZES.length);
		const winningPrize = PRIZES[randomIndex];
		const currentIteration = Math.floor(offset / (PRIZES.length * FULL_STEP));
		const targetItemIndex = (currentIteration + 4) * PRIZES.length + randomIndex;
		const finalOffset = (targetItemIndex * FULL_STEP) - (wrapperRef.current.offsetWidth / 2 - CARD_WIDTH / 2);

		setOffset(finalOffset);

		setTimeout(() => {
			setIsSpinning(false);
			setWinner(winningPrize);
			setShowTimer(true);
			setCurrentDay(prev => (prev >= 7 ? 1 : prev + 1));
		}, 4000);
	}, [isSpinning, offset]);

	return (
		<main className={styles.fortuneSection}>
			<section className={styles.wheelSection}>
				<header className={styles.wheelTop}>
					<div className={styles.wheelText}>
						<p className={styles.wheelTitle}>Колесо Фортуны</p>
						<p className={styles.wheelSubTitle}>Испытайте удачу раз в день и выигрывайте бонусы для VPN!</p>
					</div>
					<img src={pic} alt="Promo" />
				</header>

				{!showTimer ? (
					<div className={styles.rouletteWrapper} ref={wrapperRef}>
						<div className={styles.pointerContainer} />
						<ul className={styles.wheelList} style={{
							transform: `translateX(${-offset}px)`,
							transition: isSpinning ? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)' : 'none'
						}}>
							{extendedPrizes.map((prize, idx) => (
								<li key={idx} className={styles.listItem}>
									<p className={styles.itemPrize}>{prize.label}</p>
									<img src={prize.img} alt={prize.label} />
									<p className={styles.itemPrizeValue}>{prize.value}</p>
								</li>
							))}
						</ul>
					</div>
				) : (
					<FortuneTimer timeLeft={timeLeft} />
				)}

				<footer className={styles.wheelBottom}>
					<Button
						onClick={showTimer ? () => setShowTimer(false) : handleSpin}
						className={showTimer ? styles.collectButton : ""}
						disabled={isSpinning}
					>
						<span>{showTimer ? "Забрать Награду" : "Испытать удачу"}</span>
						<img src={showTimer ? redGiftIcon : giftIcon} alt="icon" />
					</Button>

					<p className={styles.footerText}>Крути колесо 7 дней подряд и получай бонусы!</p>

					<div className={styles.daysBlock} style={{ '--progress-step': currentDay - 1 } as React.CSSProperties}>
						{[1, 2, 3, 4, 5, 6, 7].map(day => (
							<p className={styles.day} key={day}>{day}</p>
						))}
					</div>
				</footer>
			</section>
			<section className={styles.infoSection}>
				<div className="statusButton">Доступен</div>
				<div className={styles.infoBlock}>
					<p className={styles.infoTitle}>Расскажи о Hiro</p>
					<p className={styles.infolText}>
						{[
							"Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.",
							"Пришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно!",
							"Чем больше охват, тем длиннее подарок!"
						].map((line, index) => (
							<React.Fragment key={index}>
								{line}
								<br />
							</React.Fragment>
						))}
					</p>
					<Button>
						<span>Отправить ссылки</span>
					</Button>
				</div>
			</section>

			{winner && !isSpinning && (
				<FortuneModal winner={winner} onClose={() => setWinner(null)} />
			)}
		</main>
	);
};
