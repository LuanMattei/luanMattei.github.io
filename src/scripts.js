
const toggleCheckbox = document.getElementById('theme-toggle');
const body = document.body;
const header = document.querySelector('header');
const projectItems = document.querySelectorAll('.project-item');
const footer = document.querySelector('footer');

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('theme') === 'light') {
        body.classList.add('light-mode');
        toggleCheckbox.checked = true;
    }
});


toggleCheckbox.addEventListener('change', () => {
    body.classList.toggle('light-mode');
    header.classList.toggle('light-mode');
    projectItems.forEach(item => item.classList.toggle('light-mode'));
    footer.classList.toggle('light-mode');
    
    document.querySelector('.theme-text').textContent = body.classList.contains('light-mode') ? 'Modo Claro' : 'Modo Escuro';

    localStorage.setItem('theme', body.classList.contains('light-mode') ? 'light' : 'dark');
});
