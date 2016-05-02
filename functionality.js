var light = document.getElementsByClassName('stopLight'); 
var light = light[0];

var red = document.getElementsByClassName('red'); 
var yellow = document.getElementsByClassName('stopLight'); 
var green = document.getElementsByClassName('stopLight'); 

console.log("Light: ", light);

light.onclick = function(){
	red[0].setAttribute("style", "background: blue");
	console.log('CLICKED YELLOW!: ', yellow);
}