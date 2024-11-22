var een = document.getElementById("item1");
var twee = document.getElementById("item2");
var drie = document.getElementById("item3");
var body = document.body;

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

een.onclick = function() {
    een.style.background = getRandomColor();
}

twee.onclick = function(event) {
    twee.style.display = "none";
    event.stopPropagation();
}

body.onclick = function() {
    twee.style.display = "block";
}

drie.onclick = function() {
    if (drie.style.height == '400px') {
        drie.style.height = '200px';
        drie.style.width = '200px';
    } else {
        drie.style.height = '400px';
        drie.style.width = '400px';
    }
}