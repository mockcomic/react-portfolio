import React, { useState } from 'react';

import { validateEmail } from '../../utils/helper';

function ContactForm() {
	const [formState, setFormState] = useState({
		name: '',
		email: '',
		message: '',
	});

	const [errorMessage, setErrorMessage] = useState('');
	const { name, email, message } = formState;

	const handleSubmit = e => {
		e.preventDefault();
		if (!errorMessage) {
			console.log('Submit Form', formState);
		}
	};

	const handleChange = e => {
		if (e.target.name === 'email') {
			const isValid = validateEmail(e.target.value);
			if (!isValid) {
				setErrorMessage('Please enter a valid email.');
			} else {
				setErrorMessage('');
			}
		} else {
			if (!e.target.value.length) {
				setErrorMessage(`${e.target.name} is required.`);
			} else {
				setErrorMessage('');
			}
		}
		if (!errorMessage) {
			setFormState({ ...formState, [e.target.name]: e.target.value });
			console.log('Handle Form', formState);
		}
	};

	return (
		<div className=''>
			<div >
				<form  onSubmit={handleSubmit}>
					<div>
						<label>Name:</label>
						<input  className="input" type="text"
							type="text"
							name="name"
							defaultValue={name}
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label>Email address:</label>
						<input className="input" type="email"
							type="email"
							name="email"
							defaultValue={email}
							onBlur={handleChange}
						/>
					</div>
					<div>
						<label>Message:</label>
						<textarea
							className="textarea is-large" type="text"
							name="message"
							rows="5"
							defaultValue={message}
							onBlur={handleChange}
						/>
					</div>
					<br></br>
					<button className = 'button is-primary' data-testid="button" type="submit">
						Submit
					</button>

					{errorMessage && (
						<div>
							<p className="notification is-danger">{errorMessage}</p>
						</div>
					)}
				</form>
			</div>























		</div>
	);
}

export default ContactForm;
