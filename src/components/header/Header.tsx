import styles from './Header.module.scss';
import logo from './../../img/logo.svg';
import arrow from './../../img/white-icons/arrow.svg';
import burger from './../../img/white-icons/ico.svg';

export const Header = () => {
	return (
		<div className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img 
					className={styles.menuMobile} 
					src={burger} 
					alt='show menu' 
				/>
				<img src={logo} alt="logo" />
				<div className={styles.headerLeft}>
					<span className={styles.headerLink}>FAQ</span>
					<span className={styles.headerLink}>Тарифы</span>
				</div>
				<button className={styles.headerButton}>Скачать</button>
				<div className={styles.headerRight}>
					<span className={styles.headerLink}>Блог</span>
					<span className={`${styles.headerLink} ${styles.account}`}>Аккаунт</span>
				</div>
				<div className={styles.chooseLang}>
					<span>РУ</span>
					<img src={arrow} alt="choose language" />
				</div>
			</div>
		</div>
	)
};