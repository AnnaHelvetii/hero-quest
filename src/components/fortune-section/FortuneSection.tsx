import styles from "./FortuneSection.module.scss";
import pic from "./../../img/img.svg";
import discountImg from "./../../img/cards/card-1.svg";
import freeImg from "./../../img/cards/card-2.svg";
import tryLaterImg from "./../../img/cards/card-3.svg";
import giftIcon from "./../../img/white-icons/gift.svg";
import Button from "../button/Button";


export const FortuneSection = () => {
	return (
		<main className={styles.fortuneSection}>
			<section className={styles.wheelSection}>
				<div className={styles.wheelTop}>
					<div className={styles.wheelText}>
						<p className={styles.wheelTitle}>Колесо Фортуны</p>
						<p className={styles.wheelText}>
							Испытайте удачу раз в день и выигрывайте бонусы для VPN!
						</p>
					</div>
					<img src={pic} />
				</div>
				<ul className={styles.wheelList}>
					<li className={styles.listItem}>
						<p>Бесплатные</p>
						<img src={freeImg} />
						<p>3 дня</p>
					</li>
					<li className={styles.listItem}>
						<p>Скидка</p>
						<img src={discountImg} />
						<p>50%</p>
					</li>
					<li className={styles.listItem}>
						<p>Скидка</p>
						<img src={discountImg} />
						<p>30%</p>
					</li>
					<li className={styles.listItem}>
						<p>Бесплатные</p>
						<img src={freeImg} />
						<p>6 часов</p>
					</li>
					<li className={styles.listItem}>
						<p>Скидка</p>
						<img src={discountImg} />
						<p>20%</p>
					</li>
					<li className={styles.listItem}>
						<p>Попробуйте</p>
						<img src={tryLaterImg} />
						<p>завтра</p>
					</li>
					<li className={styles.listItem}>
						<p>Скидка</p>
						<img src={discountImg} />
						<p>10%</p>
					</li>
				</ul>
				<Button>
					<span>Испытать удачу</span>
					<img src={giftIcon} />
				</Button>
				<p>Крути колесо 7 дней подряд без пропусков и получи на 7-й день гарантированный 1 день подписки!</p>
				<div className={styles.daysBlock}>
					<p>1</p>
					<p>2</p>
					<p>3</p>
					<p>4</p>
					<p>5</p>
					<p>6</p>
					<p>7</p>
				</div>
			</section>
			<section className={styles.infoSection}></section>
		</main>
	);
};