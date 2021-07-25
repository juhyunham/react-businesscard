import React from 'react';
import CardAddFrom from '../card_add_form/card_add_form';
import CardEditFrom from '../card_edit_form/card_edit_form';
import styles from './editor.module.css'

const Editor = ({ cards , addCard}) => (
	<section className={styles.editor}>
		<h1 className={styles.title}>Card Maker</h1>
		<ul>
		{ cards.map((card) => {
			return <CardEditFrom key={card.id} card = {card}/>
		})}
		<CardAddFrom onAdd = {addCard}/>
		</ul>
	</section>
)

export default Editor;
