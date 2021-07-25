import React, { useEffect , useState } from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './maker.module.css';
import Editor from '../editor/editor';
import Preview from '../preview/preview';

const Maker = ({ authService }) => {
	const [cards, setCards] = useState([
		{
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
		{
			id: 2,
			name: `hamju2`,
			company: `ebay`,
			theme: `light`,
			title: `Frontend Developer`,
			email: `judev0227@gamil.com`,
			message: `I like Coding`,
			fileName: `hamju`,
			fileURL: null
		},
		{
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
	])
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
	})

	return (
		<section className={styles.maker}>
			<Header onLogout = {onLogout}/>
			<div className={styles.container}>
				<Editor cards = {cards}/>
				<Preview cards = {cards}/>
			</div>
			<Footer />
		</section>
	)
};

export default Maker;