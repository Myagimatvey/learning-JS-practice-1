import { findUser } from './objects-methods'

const inputSearchUser = document.querySelector('[data-search-user-input]')
const buttonSearchUser = document.querySelector('[data-search-user-button]')


buttonSearchUser.addEventListener('click', () => {
	const userId = Number(inputSearchUser.value)
	const user = findUser(userId)

	if(isNaN(userId)) {
		alert('необходимо ввести число')
		return
	}

	if(!!user) {
		console.log(user)
		return;
	}

	alert('Пользователь не найден')
})



