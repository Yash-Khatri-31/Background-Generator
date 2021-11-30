var h3 = document.querySelector('h3')
var color1 = document.querySelector('.color1')
var color2 = document.querySelector('.color2')
var body = document.getElementById('body')
var button = document.getElementById('button')

bgcolor();

function bgcolor(){
    body.style.background = 'linear-gradient(to right ,' + color1.value + ',' + color2.value + ')';
    h3.textContent = body.style.background;
 }

color1.addEventListener('input' , bgcolor);

color2.addEventListener('input' , bgcolor);

button.addEventListener("click" , function(){
    color1.value = '#' + Math.floor(Math.random()*16777215).toString(16);
    color2.value = '#' + Math.floor(Math.random()*16777215).toString(16);

    bgcolor();
})
// background is in the body tag of the css. How do we access that.

