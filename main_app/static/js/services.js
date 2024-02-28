document.addEventListener('DOMContentLoaded', () => {
    
	// Валидация формы на Главной странице

	let form_btn = document.getElementById('form_btn');
	let first_name = document.getElementById('first_name');
	let email = document.getElementById('email');
	let message = document.getElementById('message');
	
	let errorFirstNameElement = document.getElementById('first_name_error');
	let errorEmailElement = document.getElementById('email_error');
	let errorMessageElement = document.getElementById('message_error');

	let name_error = false;
	let email_error = false;
	let message_error = false;


	function validateForm() {
		if (first_name.value === '' || email.value === '' || message.value === '' || name_error || email_error || message_error) {
			form_btn.disabled = true;
		} else {
			form_btn.disabled = false;
		}
	}

	validateForm();
	
	first_name.addEventListener('input', function() {
		if (first_name.value === '' || first_name === "none") {
			first_name.style.border = '1px solid rgba(225, 94, 103, 0.622)';
			errorFirstNameElement.innerHTML = '<span style="color: rgba(225, 94, 103, 0.622);">How do I address you?</span>';
			name_error = true;
		} else {
			errorFirstNameElement.innerHTML = '';
			first_name.style.border = '1px solid rgb(104, 220, 129)';
			name_error = false;
		}
		validateForm();
	});


	email.addEventListener('input', function() {
		if (validateEmail(email.value)) {
			errorEmailElement.innerHTML = '';
			email.style.border = '1px solid rgb(104, 220, 129)';
			email_error = false;
		} else {
			email.style.border = '1px solid rgba(228, 10, 24, 0.622)';
			errorEmailElement.innerHTML = '<span style="color: rgba(225, 94, 103, 0.622);">Oops, I have not found your e-mail in the field...</span>';
			email_error = true;
		}
		validateForm();
	});


	message.addEventListener('input', function() {
		if (message.value === '' || message === "none") {
			message.style.border = '1px solid rgba(228, 10, 24, 0.622)';
			errorMessageElement.innerHTML = '<span style="color: rgba(225, 94, 103, 0.622);">Describe the problem and I promise, I will suggest the best solution!</span>';
			message_error = true;
		} else {
			errorMessageElement.innerHTML = '';
			message.style.border = '1px solid rgb(104, 220, 129)';
			message_error = false;
		}
		validateForm();
	});



	function validateEmail(email) {
		return email.match(
			/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		  );
	}


})