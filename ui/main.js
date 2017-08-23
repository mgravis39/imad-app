console.log('Loaded!');
alert('Loaded main.js');
var element = document.getElementById('index-class');
element.innerHTML = 'New Text is being Loaded';

// Move the Image
var img = document.getElementById('madi');
img.onClick = function () {
    img.style.marginLeft = '50px';
    
    };