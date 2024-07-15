const canvas = document.getElementById('canvas');
const SizeFont = document.getElementById('size');
const DecreaseFont = document.getElementById('decrease');
const IncreaseFont = document.getElementById('increase');
const colorElement = document.getElementById('color');
const clearElement = document.getElementById('Close');
const ctx = canvas.getContext("2d");



let Size = 10;
let color = "black";
let x;
let y;
let isPressed = false;


const DrawCircle = (x , y) => {
  ctx.beginPath();
  ctx.arc(x , y , Size , 0 , Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

const DrowLine = (x , y , x2 , y2) => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth= Size * 2; 
  ctx.stroke();
}

canvas.addEventListener('mousedown', (e) => {
  isPressed = true;
  x = e.offsetX;
  y = e.offsetY;
});

canvas.addEventListener('mouseup' , (e) => {
  isPressed = false;
  x = undefined;
  y = undefined;
});

canvas.addEventListener('mousemove', (e) => {



  if (isPressed) {
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    DrawCircle(x2, y2);
    DrowLine(x, y, x2, y2);
    x = x2;
    y = y2;
  }
});


IncreaseFont.addEventListener('click', () => {  
    if (Size >= 50) return;
    Size += 5;  
    SizeFont.innerHTML = `${Size}`;
   
});


DecreaseFont.addEventListener('click', () => {
    if (Size <= 10) return;  // If size is less than or equal to 10, do nothing.
    Size -= 5;  
    SizeFont.innerHTML = `${Size}`;
});

colorElement.addEventListener('change',(e)=> {
  color = e.target.value;
});

clearElement.addEventListener('click',(e)=> {
ctx.clearRect(0, 0, canvas.width, canvas.height);

});


