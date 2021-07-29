import React , { useRef , useState } from 'react';
import Button from '../button/button';
import styles from './card_add_form.module.css';

const CardAddForm = ({ FileInput, onAdd }) => {
	const formRef = useRef();
	const nameRef = useRef(); 
	const companyRef = useRef(); 
	const themeRef = useRef(); 
	const titleRef = useRef(); 
	const emailRef = useRef(); 
	const messageRef = useRef();
	const [ file, setFile ] = useState({
		fileName: null,
		fileURL: null
	})

	const onFileChange = file => {
		setFile({
			fileName: file.name,
			fileURL: file.url
		})
	}

	const onSubmit = (event) => {
		event.preventDefault();
		
		const card = {
			id: Date.now(),
			name : nameRef.current.value || '',
			company : companyRef.current.value || '',
			theme : themeRef.current.value,
			title : titleRef.current.value || '',
			email : emailRef.current.value || '',
			message : messageRef.current.value || '',
			fileName: file.fileName || '',
			fileURL: file.fileURL || ''
		}

		formRef.current.reset()
		setFile({
			fileName: null,
			fileURL: null
		})
		onAdd(card)
	}

	return (
	<form ref={formRef} className={styles.form}>
		<input ref={nameRef} className={styles.input} type="text" name="message" placeholder="name" />
		<input ref={companyRef} className={styles.input} type="text" name="message" placeholder="company" />
		<select ref={themeRef} className={styles.select} name="theme" placeholder="message">
			<option placeholder="light">light</option>
			<option placeholder="dark">dark</option>
			<option placeholder="colorful">colorful</option>
		</select>
		<input ref={titleRef}  className={styles.input} type="text" name="message" placeholder="title" />
		<input ref={emailRef}  className={styles.input}type="text" name="message" placeholder="email" />
		<textarea ref={messageRef}  className={styles.textarea} name="message" cols="30" rows="10" placeholder="message" ></textarea>
		<div className={styles.fileInput}>
			<FileInput name = {file.fileName} onFileChange = {onFileChange}	/>
			<Button name="Add" onClick={onSubmit} />
		</div>
	</form>
	)
};

export default CardAddForm;