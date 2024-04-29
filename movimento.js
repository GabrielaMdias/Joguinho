const canvas = document.getElementById("MeuCanvas");
const ctx = canvas.getContext("2d");

const image = new Image();
image.src = "areonave.png";


const newWidth = 70;
const newHeight = 70;


let x = 50;
let y = canvas.height - newHeight;


const finalX = 60;
const finalY = 60;

function moveImage(timestamp) {
    
    const deltaX = (finalX - x) / 100; 
    const deltaY = (finalY - y) / 100;

    x += deltaX;
    y += deltaY;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, x, y, newWidth, newHeight);

    if (y <= finalY) {
        cancelAnimationFrame(moveImage);
    } else {
        requestAnimationFrame(moveImage);
    }
}
image.onload = function() {
    requestAnimationFrame(moveImage);
}