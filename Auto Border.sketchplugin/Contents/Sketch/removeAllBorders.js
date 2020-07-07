var onRun = function(context) {
	const UI = require("sketch/ui");
	const sketch = require('sketch')
	const document = sketch.getSelectedDocument();
	const selectedPage = document.selectedPage;

	//removes borders with matching name from current page
    const nativeLayers = selectedPage.sketchObject.children();
    nativeLayers.forEach(nativelayer => {
        const layer = sketch.fromNative(nativelayer);
        if (layer.name ==  'Border-AutoBorder') {
            layer.remove()
        }
	UI.message("💯 Removal success! All Borders with the name 'Border-AutoBorder' have been deleted.");

	});

});