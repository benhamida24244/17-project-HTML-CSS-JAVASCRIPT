const btn = document.querySelector('.menu');
const header = document.querySelector('.container');
const about = document.querySelector('.about');
const portfolio = document.querySelector('.portfolio');
const footer = document.querySelector('.footer');
const servesise = document.querySelector('.services');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    header.classList.toggle('active');
    about.classList.toggle('active');
    portfolio.classList.toggle('active');
    footer.classList.toggle('active');
    servesise.classList.toggle('active');
});
