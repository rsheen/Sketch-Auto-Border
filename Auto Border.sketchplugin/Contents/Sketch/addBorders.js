var onRun = function(context) {
	const UI = require("sketch/ui");
	const sketch = require('sketch')
	const document = sketch.getSelectedDocument()

	var selection = context.selection;
	if(selection.count() == 0){
		console.log(selection)
		UI.message("No layers selected. Please select layers you'd like to add borders to.");
		return
	}


	for (var i = 0; i < document.selectedLayers.length; i++) {  
	    const layer = document.selectedLayers.layers[i]
	    if( 'Artboard'!=layer.type )  continue
	    //assigning variables
	    let ShapePath = sketch.ShapePath
	    let Rectangle = sketch.Rectangle
	    let myArtboard = layer

	    //getting artboard's width and height
	    var width = myArtboard.frame.width
	    var height = myArtboard.frame.height

	    //creating rectangle border
		let myRect = new ShapePath({
		  name: 'Border-AutoBorder',
		  frame: new Rectangle(0,0,width,height),
		  parent: myArtboard,
		  style: { 
		  	borders: ['#000']
		  }
		})
	    	//sketch.export(layer, options)    
	}

	UI.message("✅ Borders have been created with the name 'Border-AutoBorder'");

};
          