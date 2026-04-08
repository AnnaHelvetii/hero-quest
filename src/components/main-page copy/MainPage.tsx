import React, { useState } from "react";
import styles from "./MainPage.module.scss";
import cross from "./../../img/white-icons/cross.svg";
import { QUESTS_DATA } from "../../data";
import { FortuneSection } from "../fortune-section/FortuneSection";

export const MainPage: React.FC = () => {
	const [completedIds, setCompletedIds] = useState<number[]>([]);

	const handleComplete = (id: number) => {
		if (!completedIds.includes(id)) {
			setCompletedIds((prev) => [...prev, id]);
		}
	};

	return (
		<div className={styles.mainContainer}>
			<div className={styles.mainWrapper}>
				<h1 className={styles.mainTitle}>Аккаунт</h1>
				<section className={styles.headerSection}>
					<span className={styles.subTitle}>Квесты</span>
					<img src={cross} alt="close" />
				</section>
				<FortuneSection />
				<section className={styles.shareListSection}>
					<ul className={styles.shareList}>
						{QUESTS_DATA.map((quest) => {
							const isCompleted = completedIds.includes(quest.id);

							return (
								<li key={quest.id} className={styles.shareListItem}>
									<div
										className={`${styles.statusButton} ${isCompleted ? styles.completed : ""}`}
									>
										{isCompleted ? "Выполнен" : quest.status}
									</div>

									<p className={styles.itemTitle}>{quest.title}</p>
									<p className={styles.itemText}>{quest.text}</p>

									{!isCompleted && (
										<div
											className={styles.itemButton}
											onClick={() => handleComplete(quest.id)}
										>
											<p>{quest.buttonText}</p>
											{quest.icon && <img src={quest.icon} alt={quest.title} />}
										</div>
									)}
								</li>
							);
						})}
					</ul>
				</section>
			</div>
		</div>
	);
};
