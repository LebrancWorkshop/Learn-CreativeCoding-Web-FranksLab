const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 100, 100);
