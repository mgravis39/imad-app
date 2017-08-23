console.log('Loaded!');
alert('Loaded main.js');
var element = document.getElementById('index-class');
element.innerHTML = 'New Text is being Loaded';

// Move the Image
var marginLeft = 0;
function moveRight () {
    marginLeft = marginLeft + 10;
     img.style.marginLeft = marginLeft + 'px';
}
var img = document.getElementById('madi');
img.onclick = function () {
    img.style.marginLeft = '50px';
    var intervel = setInterval(moveRight, 100);
    };