import React, { useEffect } from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './login.module.css'
import { useHistory } from 'react-router-dom';

const Login = ({ authService }) => {
	const history = useHistory()
	const goToMaker = (userId) => {
		history.push({
			pathname: '/maker',
			state: { id : userId }
		});
	}	

	const onLogin = (event) => {
		authService
			.login(event.target.textContent)
			.then(data => goToMaker(data.user.uid));
	}

	useEffect(() => {
		authService
			.onAuthChange(user=> {
				user && goToMaker(user.id)
			});
	})

	return (
		<section>
			<Header />
			<section className={styles.login}>
				<h1>Login</h1>
				<ul className={styles.list}>
					<li className={styles.item}><button className={styles.button} onClick={onLogin} type="button">Google</button></li>	
					<li className={styles.item}><button className={styles.button} onClick={onLogin} type="button">Github</button></li>	
				</ul>
			</section>
			<Footer />
		</section>
	)
}

export default Login;