

const body = document.body;
const button = document.querySelector('.mode-button');

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
button.textContent = body.classList.contains('dark-mode') ? 'DARK MODE' : 'LIGHT MODE';
});


