const block = document.querySelector("canvas");
const canvas = block.getContext("2d");

canvas.strokeRect(50,50,100,100);

canvas.beginPath();
canvas.moveTo(75,75);

canvas.lineTo(125,75);
canvas.lineTo(125,125);
canvas.lineTo(75,75);
canvas.fill();
