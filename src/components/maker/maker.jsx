import React, { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ FileInput, authService, cardRepository }) => {
	const historyState = useHistory().state
	const [cards, setCards] = useState({})
	const [userId, setUserId] = useState(historyState && historyState.id);

	const history = useHistory()
	const onLogout = () => {
		authService.logout()
	}

	useEffect(() => {
		authService.onAuthChange(user => {
			if (user) {
				setUserId(user.uid)
			} else {
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

		cardRepository.saveCard(userId, card)
	}

	const deleteCard = card => {
		setCards(cards => {
			const updated = {...cards};
			delete updated[card.id];
			return updated;
		})

		cardRepository.removeCard(userId, card)
	}

	return (
		<section className={styles.maker}>
			<Header onLogout = {onLogout}/>
			<div className={styles.container}>
				<Editor  FileInput= {FileInput} cards = {cards} addCard = {createOrupdateCard} updateCard = {createOrupdateCard} deleteCard = {deleteCard}/>
				<Preview cards = {cards}/>
			</div>
			<Footer />
		</section>
	)
};

export default Maker;