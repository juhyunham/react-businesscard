import React from 'react';
import styles from './header.module.css'

const Header = ({onLogout}) => (
	<header className={styles.header}>
		{onLogout && <button type="button" className={styles.logout} onClick={onLogout}>Logout</button>}
		<h1 className={styles.title} >Business Card Maker</h1>
	</header>
);

export default Header;