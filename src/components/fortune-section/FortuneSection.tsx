import React, { useState, useRef, useEffect, useMemo } from "react";
import styles from "./FortuneSection.module.scss";
import pic from "./../../img/img.svg";
import giftIcon from "./../../img/white-icons/gift.svg";
import redGiftIcon from "./../../img/accent-icons/small-red-gift.svg";
import Button from "../button/Button";
import { PRIZES } from "./../../data";
import type { FortunePrize } from "./../../types";

export const FortuneSection: React.FC = () => {
	const cardWidth = 120;
	const gap = 4;
	const fullCardStep = cardWidth + gap;
	const wrapperRef = useRef<HTMLDivElement>(null);
	const extendedPrizes = useMemo(() => {
		return Array(50).fill(PRIZES).flat();
	}, []);
	const [isSpinning, setIsSpinning] = useState(false);
	const [winner, setWinner] = useState<FortunePrize | null>(null);
	const [offset, setOffset] = useState(0);
	const [showTimer, setShowTimer] = useState(false);
	const [currentDay, setCurrentDay] = useState(1);
	const [timeLeft, setTimeLeft] = useState({ hours: 24, minutes: 0, seconds: 0 });
	const formatTime = (num: number) => num.toString().padStart(2, '0').split('');

	useEffect(() => {
		if (!showTimer) return;
		const interval = setInterval(() => {
			setTimeLeft(prev => {
				if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
				if (prev.minutes > 0) return { ...prev, minutes: 59, seconds: 59 };
				return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
			});
		}, 1000);
		return () => clearInterval(interval);
	}, [showTimer]);

	const handleCollectReward = () => {
		setShowTimer(false);
	};

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
			setShowTimer(true);
			setCurrentDay(prev => prev >= 7 ? 1 : prev + 1);
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

				{!showTimer ? (
					<div className={styles.rouletteWrapper} ref={wrapperRef}>
						<div className={styles.pointerContainer}></div>
						<ul className={styles.wheelList} style={{
							transform: `translateX(${-offset}px)`,
							transition: isSpinning ? 'transform 4s cubic-bezier(0.15, 0, 0.15, 1)' : 'none'
						}}>
							{extendedPrizes.map((prize, index) => (
								<li key={index} className={styles.listItem}>
									<p className={styles.itemPrize}>{prize.label}</p>
									<img src={prize.img} alt={prize.label} />
									<p className={styles.itemPrizeValue}>{prize.value}</p>
								</li>
							))}
						</ul>
					</div>
				) : (
					<div className={styles.timerWrapper}>
						<div className={styles.timerUnit}>
							<div className={styles.digitsRow}>
								{formatTime(timeLeft.hours).map((digit, i) => (
									<span key={i} className={styles.digitBox}>{digit}</span>
								))}
							</div>
							<p className={styles.timerName}>часы</p>
						</div>
						<div className={styles.timerDivider}>:</div>
						<div className={styles.timerUnit}>
							<div className={styles.digitsRow}>
								{formatTime(timeLeft.minutes).map((digit, i) => (
									<span key={i} className={styles.digitBox}>{digit}</span>
								))}
							</div>
							<p className={styles.timerName}>минуты</p>
						</div>
						<div className={styles.timerDivider}>:</div>
						<div className={styles.timerUnit}>
							<div className={styles.digitsRow}>
								{formatTime(timeLeft.seconds).map((digit, i) => (
									<span key={i} className={styles.digitBox}>{digit}</span>
								))}
							</div>
							<p className={styles.timerName}>секунды</p>
						</div>
					</div>
				)}

				<div className={styles.wheelBottom}>
					{!showTimer ? (
						<Button onClick={handleSpin} disabled={isSpinning}>
							<span>Испытать удачу</span>
							<img src={giftIcon} />
						</Button>
					) : (
						<Button onClick={handleCollectReward} className={styles.collectButton}>
							<span>Забрать Награду</span>
							<img src={redGiftIcon} />
						</Button>
					)}
					<p className={styles.footerText}>
						Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный 1 день подписки!
					</p>
					<div
						className={styles.daysBlock}
						style={{
							'--progress-step': currentDay <= 7 ? currentDay - 1 : 0
						} as React.CSSProperties}
					>
						{[1, 2, 3, 4, 5, 6, 7].map(day => (
							<p className={styles.day} key={day}>{day}</p>
						))}
					</div>
				</div>
			</section>

			<section className={styles.infoSection}>
				<div className="statusButton">Доступен</div>
				<div className={styles.infoBlock}>
					<p className={styles.infoTitle}>Расскажи о Hiro</p>
					<p className={styles.infolText}>
						Просто напиши пост/статью о нас в крупном канале или на своей странице в соцсетях со ссылкой на нас.
						Пришли ссылку на пост/статью — и мы начислим тебе от 15 до 90 дней VPN бесплатно! Чем больше охват, тем длиннее подарок!
					</p>
					<Button>
						<span>Отправить ссылки</span>
					</Button>
				</div>
			</section>

			{winner && !isSpinning && (
				<div className={styles.modalOverlay} onClick={() => setWinner(null)}>
					<div className={styles.modalContent}>
						<h2>{winner.reveal}</h2>
						<div className={styles.modalMain}>
							<p className={styles.modalText}>{winner.label}</p>
							<img src={winner.img} alt="prize" />
							<p className={styles.value}>{winner.value}</p>
						</div>
						{winner.info && (
							<p className={styles.modalText}>{winner.info}</p>
						)}
						<Button>
							<p className={styles.buttonText}>Продолжить</p>
						</Button>
					</div>
				</div>
			)}
		</main>
	);
};
