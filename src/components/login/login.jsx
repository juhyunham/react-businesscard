import React from 'react';
import Header from '../header/header'
import Footer from '../footer/footer'
import styles from './login.module.css'

const Login = ({ authService }) => {
	const onLogin = (event) => {
		authService
			.login(event.target.textContent)
	}

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