const switchers = document.querySelectorAll('.switcher');

switchers.forEach(item => {
	item.addEventListener('click', function() {
		switchers.forEach(item => item.parentElement.classList.remove('is-active'))
		this.parentElement.classList.add('is-active')
	})
})


// form validation secton

// for signup field

const email = document.getElementById("signup-email");
console.log(email);
