var light = document.getElementsByClassName('stopLight')[0]; 

var red = document.getElementsByClassName('red')[0]; 
var yellow = document.getElementsByClassName('yellow')[0]; 
var green = document.getElementsByClassName('green')[0]; 

var lightNum = 0; 

light.onclick = function(){
	if (lightNum === 0) {
		red.setAttribute("style", "background: none");	
		green.setAttribute("style", "background: green");
		lightNum++	
	} else if (lightNum === 1) {
		green.setAttribute("style", "background: none");
		yellow.setAttribute("style", "background: yellow");
		lightNum ++
	} else {
		red.setAttribute("style", "background: red");	
		yellow.setAttribute("style", "background: none");
		lightNum = 0;
	}
}