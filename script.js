const button = document.getElementById('toggleTheme')
const body = document.body

button.addEventListener('click', () => {
	body.classList.toggle('dark-mode') // dark-mode ni yoqadi/o‘chirishadi
})
