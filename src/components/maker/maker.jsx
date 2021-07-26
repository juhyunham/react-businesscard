import React, { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState({
		'1' : {
			id: 1,
			name: `hamju`,
			company: `ebay`,
			theme: `dark`,
			title: `Frontend Developer`,
			email: `judev0227@gamil.com`,
			message: `I like Coding`,
			fileName: `hamju`,
			fileURL: null
		},
		'2' : {
			id: 2,
			name: `hamju2`,
			company: `ebay`,
			theme: `light`,
			title: `UI Developer`,
			email: `juham@ebay.com`,
			message: `저는 코딩을 좋아하고, 피자를 좋아하고, 강아지를 좋아합니다~~~`,
			fileName: `hamju`,
			fileURL: null
		},
		'3' : {
			id: 3,
			name: `hamju3`,
			company: `ebay`,
			theme: `colorful`,
			title: `Frontend Developer`,
			email: `judev0227@gamil.com`,
			message: `I like Coding`,
			fileName: `hamju`,
			fileURL: null
		}
	})

	const history = useHistory()
	const onLogout = () => {
		authService.logout()
	}

	useEffect(() => {
		authService.onAuthChange(user => {
			if (!user) {
				history.push(`/`)
			}
		})
	});

	const createOrupdateCard = card => {
		setCards(cards => {
			const updated = {...cards};
			updated[card.id] = card;
			return updated;
		})
	}

	const deleteCard = card => {
		setCards(cards => {
			const updated = {...cards};
			delete updated[card.id];
			return updated;
		})
	}

	return (
		<section className={styles.maker}>
			<Header onLogout = {onLogout}/>
			<div className={styles.container}>
				<Editor cards = {cards} addCard = {createOrupdateCard} updateCard = {createOrupdateCard} deleteCard = {deleteCard}/>
				<Preview cards = {cards}/>
			</div>
			<Footer />
		</section>
	)
};

export default Maker;