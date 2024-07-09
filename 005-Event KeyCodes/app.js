const container = document.getElementById('container');
const InfoKey = document.getElementById('info-press');
const EventBtn = document.getElementById('event');
const keyCode = document.getElementById('keyCode');
const Code = document.getElementById('code');

document.addEventListener('keypress', () => {
   container.classList.add('remove');
   InfoKey.classList.remove('remove');
});

window.addEventListener('keydown', (event) => {
    EventBtn.innerHTML = `<p>${event.key}</p>`;
    keyCode.innerHTML = `<p>${event.keyCode}</p>`;
    Code.innerHTML = `<p>${event.code}</p>`;
});
