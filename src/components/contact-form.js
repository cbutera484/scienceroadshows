import React from "react";

class ContactForm extends React.Component {
	render () {
		return (
			<form name="contact" method="POST" netlify>
				<div>
					<label htmlFor="name">Name:</label>
					<input type="text" id="name" name="user_name" />
				</div>
				<div>
					<label htmlFor="mail">E-mail:</label>
					<input type="email" id="mail" name="user_mail" />
				</div>
				<div>
					<label htmlFor="msg">Message:</label>
					<textarea id="msg" name="user_message" />
				</div>
				<div className="button">
					<button type="submit">Send</button>
				</div>
			</form>
		);
	}
}

export default ContactForm;
