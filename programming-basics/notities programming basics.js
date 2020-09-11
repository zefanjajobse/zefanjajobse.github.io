/* this will run when the "stack" van javascript leeg is na de timout
(minimum time before execution, so if something else alread runs i'll wait) (kan ook op 0)
the stack if the current js file functions so after the whole file is done running */
setTimeout(() => {
    
}, 0);

/* http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D */
/* use async if code is slow so the browser has time to render the elements in the mean time */

/* 
 first excersize in-class programming basics
 if area == 2 hexagons: fill a cell with 1 and fill second cell with firstcell+1 
 
for surrounding hexagons, if contains 1 add 1 to search and check again,
if non found near place number
 */
/* create a canvas in html first 
<canvas id="canvas" witdth="500" height="500"> </canvas>

then select the area in javascript*/
var block = document.querySelector("canvas");

/* get the selected area as 2d items */
var canvas = block.getContext("2d");

/* make a square: location - width/height*/
canvas.fillStyle = 'green';
canvas.fillRect(100, 100, 100, 100);

/* make a border: */
canvas.strokeStyle = 'green'; /* #FF000 works or "red" */
canvas.strokeRect(50, 50, 50, 50);

/* clearRect to show the background through the canvas */
canvas.clearRect(50,50,10,10);

/* create a path and move to different points like a pen */
canvas.beginPath();
canvas.moveTo(10, 10); /*only moves without making a line */

canvas.lineTo(50,50); /* draws a line from where it was to the new location */
canvas.lineTo(50,10);
canvas.lineTo(10,10);

canvas.fill(); /* fills the path with a color */
canvas.stroke(); /* only makes the line instead */

canvas.rotate(Math.PI/4); /*rotate the object by a certain amount */

canvas.translate(50,0); /* moves the canvas 50 pixels to the right */

canvas.save(); /* saves the current canvas' state */
canvas.restore(); /* restores the transformations so it doesnt affect the next object if nothing is saves
else is will restore the saved state */

canvas.strokeStyle = "red";
/* and */
canvas.fillStyle = "blue";
/* only affect the item below the statement */

/* places text on the given position */
canvas.fillText("hello world", 50, 100);
canvas.strokeText("outline version", 100,60);

