var Colors = ["blue", "green", "purple", "red"];
function newBox() {
	var box = {
		length: Math.floor(Math.random() * 10) + 1,
		width: Math.floor(Math.random() * 20) + 1,
		height: Math.floor(Math.random() * 5) + 1,
		color: Colors[Math.floor(Math.random() * Colors.length)],
		grams: Math.floor(Math.random() * 40) + 1,
		contents: [],

		//YOUR METHODS BELOW

		paint : function (){
			paint.Colors = 'paint'
		},

		getVolume : function (){
			var cube = box.height * box.length * box.width
			return cube
		},

		

		//YOUR METHODS END HERE
	}


	return box;
}

var boxOne = newBox();
console.log(boxOne);

var boxTwo = newBox(); //becauase 'var box' is in local scope
console.log(boxTwo);



var compareVolumes = function(xOne,xTwo){
	
	if (boxOne.getVolume > boxTwo.getVolume) {

		console.log ("Box two is bigger")
		} else {
		console.log ("Box one is bigger")
		}
				
};


compareVolumes(boxOne,boxTwo)











