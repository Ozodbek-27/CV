/*const button = document.getElementById('toggleTheme');
const body = document.body;

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    // Emoji o‘zgartirish: 🌙 ↔ ☀️
    if(body.classList.contains('dark-mode')) {
        button.textContent = "☀️";
    } else {
        button.textContent = "🌙";
    }
})*/

const button = document.getElementById('toggleTheme')
const body = document.body

button.addEventListener('click', e => {
	// Dark/Light mode toggle
	body.classList.toggle('dark-mode')

	if (body.classList.contains('dark-mode')) {
		button.textContent = '☀️'
	} else {
		button.textContent = '🌙'
	}

	// Ripple effect
	const circle = document.createElement('span')
	circle.classList.add('ripple')
	button.appendChild(circle)

	const rect = button.getBoundingClientRect()
	circle.style.left = `${e.clientX - rect.left}px`
	circle.style.top = `${e.clientY - rect.top}px`

	setTimeout(() => {
		circle.remove()
	}, 600) // animatsiya davomiyligi bilan bir xil
})
