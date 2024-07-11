const balls = document.querySelectorAll('.little-boal');
const fullBoal = document.getElementById('full-boal');
const LeterKnow = document.getElementById('boal');
const leter = document.getElementById('liter');
let counter = 0;

balls.forEach(ball => {
    ball.addEventListener('click', () => {
        ball.classList.toggle('active');
        
        if (ball.classList.contains('active')) {
            counter++;
        } else {
            counter--;
        }

        fullBoal.style.height = `${40.875 * counter}px`;
        fullBoal.innerHTML = `<h2>${12.5 * counter}%</h2>`;
        
        LeterKnow.innerHTML = `
            <div class="liter" id="liter">
                <p>${(2 - 0.25 * counter).toFixed(2)}L</p>
                <small>Remained</small>
            </div>
        `;
        
        const newLeter = document.getElementById('liter');
        newLeter.style.marginBottom = `${35.953125 * counter}px`;
        if (newLeter.style.marginBottom === `287.625px`) {
            newLeter.style.display = 'none';
        }
    });
});
