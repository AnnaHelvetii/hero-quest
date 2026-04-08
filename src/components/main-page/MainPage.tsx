import styles from "./MainPage.module.scss";
import cross from "./../../img/white-icons/cross.svg";
import { QUESTS_DATA } from "../../helpers";
import { FortuneSection } from "../fortune-section/FortuneSection";

export const MainPage: React.FC = () => {
	return (
		<div className={styles.mainContainer}>
			<h1 className={styles.mainTitle}>Аккаунт</h1>

			<section className={styles.headerSection}>
				<span>Квесты</span>
				<img src={cross} alt="close" />
			</section>
			<FortuneSection />
			<section className={styles.shareListSection}>
				<h2 className={styles.title}>Активные</h2>
				<ul className={styles.shareList}>
					{QUESTS_DATA.map((quest) => (
						<li key={quest.id} className={styles.shareListItem}>
							<div className={styles.statusButton}>
								{quest.status}
							</div>
							<p className={styles.itemTitle}>{quest.title}</p>
							<p className={styles.itemText}>{quest.text}</p>
							<div className={styles.itemButton}>
								<p>{quest.buttonText}</p>
								{quest.icon && <img src={quest.icon} alt={quest.title} />}
							</div>
						</li>
					))}
				</ul>
			</section>
		</div>
	)
}