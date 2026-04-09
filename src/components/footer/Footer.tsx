import React from "react";
import styles from "./Footer.module.scss";
import smallLogo from "./../../img/small-logo.svg";
import tgLogo from "./../../img/accent-icons/telegram.svg";
import { INFO_LINKS, DOWNLOAD_LINKS, PAYMENT_METHODS } from "../../data";

export const Footer: React.FC = () => {
	return (
		<footer className="mainContainer">
			<div className={styles.footerWrapper}>
				<div className={styles.footerColumns}>
					<div className={styles.footerColumn}>
						<img src={smallLogo} alt="logo" />
						<ul className={styles.linkList}>
							{INFO_LINKS.map((link) => (
								<li key={link} className={styles.link}>{link}</li>
							))}
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<p className={styles.columnTitle}>Скачать</p>
						<ul className={styles.linkList}>
							{DOWNLOAD_LINKS.map(({ label, icon }) => (
								<li key={label} className={styles.link}>
									{icon && <img src={icon} alt={label} />}
									<p>{label}</p>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<p className={styles.columnTitle}>Способы оплаты</p>
						<ul className={styles.linkList}>
							{PAYMENT_METHODS.map(({ label, icon }) => (
								<li key={label} className={styles.link}>
									{icon && <img src={icon} alt={label} />}
									<p>{label}</p>
								</li>
							))}
						</ul>
					</div>

					<div className={styles.footerColumn}>
						<p className={styles.columnTitle}>поддержка 24/7</p>
						<ul className={styles.linkList}>
							<li className={styles.tgButton}>
								<p>Telegram</p>
								<img src={tgLogo} alt="telegram" />
							</li>
							<li className={styles.link}>Публичная оферта</li>
							<li className={styles.link}>Пользовательское соглашение</li>
						</ul>
					</div>
				</div>
				<div className={styles.copyright}>
					<p>© 2025 Wolle Development Limited. Все права защищены.</p>
				</div>
			</div>
		</footer>
	);
};