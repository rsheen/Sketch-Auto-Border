var onRun = function(context) {
	const UI = require("sketch/ui");
	const sketch = require('sketch')
	const document = sketch.getSelectedDocument()

	var selection = context.selection;
	if(selection.count() == 0){
		console.log(selection)
		UI.message("No layers selected. Please select layers you'd like to remove borders from.");
		return
	}
   	

	for (var i = 0; i < document.selectedLayers.length; i++) {  
	    var layer = document.selectedLayers.layers[i]
	    if( 'Artboard'!=layer.type )  continue
	    //assigning variables
	    let ShapePath = sketch.ShapePath
	    let Rectangle = sketch.Rectangle
	    let myArtboard = layer
	    let deleteLayer = null

	    var border = myArtboard.layers.find(l => l.name === 'Border-AutoBorder');

	    console.log(border.name)

	    //Removes Border
	    border.remove()

	}

	UI.message("🗑 Removal success! Borders with the name 'Border-AutoBorder' have been deleted");

};
          