const switchers = document.querySelectorAll('.switcher');

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


// form validation secton
// for signup field
const form = $("#form-signup");
const email = $("#signup-email");
const password = $("#signup-password");
const confirmPassword = $("#signup-password-confirm");
const errorMessage = $("#ërror");

