var light = document.getElementsByClassName('stopLight'); 
var light = light[0];

var red = document.getElementsByClassName('red'); 
var yellow = document.getElementsByClassName('yellow'); 
var green = document.getElementsByClassName('green'); 

console.log("Light: ", light);

var lightNum = 0; 

light.onclick = function(){
	if (lightNum === 0) {
		red[0].setAttribute("style", "background: none");	
		green[0].setAttribute("style", "background: green");
		lightNum++	
	} else if (lightNum === 1) {
		green[0].setAttribute("style", "background: none");
		yellow[0].setAttribute("style", "background: yellow");
		lightNum ++
	} else {
		red[0].setAttribute("style", "background: red");	
		yellow[0].setAttribute("style", "background: none");
		lightNum = 0;
	}
	console.log('CLICKED YELLOW!: ', yellow);
}