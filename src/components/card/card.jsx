import React from 'react';
import styles from './card.module.css'

const defaultIMG = null 
const Card = ({ card }) => {
	const { name, company, title, email, message, theme, fileURL } = card
	const url = fileURL || defaultIMG;

	return (
		<li className={`${styles.card} ${getStyles(theme)}`}>
			{ !url && <div className={styles.empty_avatar}> No Img </div>}
			{ url && <img className={styles.avatar} src={url} alt="profile" /> }
			<div className={styles.info}>
				<h2 className={styles.name}>{name}</h2>
				<p className={styles.company}>{company}</p>
				<p className={styles.title}>{title}</p>
				<p className={styles.email}>{email}</p>
				<p className={styles.message}>{message}</p>
			</div>
		</li>
	);
};

const getStyles = (theme) => {
	switch(theme) {
		case `dark`:
			return styles.dark;
		case `light`:
			return styles.light;
		case `colorful`:
			return styles.colorful;
		default:
			throw new Error(`unknown theme: ${theme}`)
	}
}

export default Card;