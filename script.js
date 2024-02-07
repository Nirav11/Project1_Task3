require([
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/widgets/Legend", // Make sure to include the Legend module here
    "dojo/domReady!"
], function(WebScene, SceneView, Legend) { // Include Legend in the function parameters

    var scene = new WebScene({
        portalItem: {
            id: "17ce5d59ad754cb79c3fa8f6512e8db8"
        }
    });

    var view = new SceneView({
        container: "viewDiv",
        map: scene,
        viewingMode: 'global'
    });
  
    var legend = new Legend({
        view: view
    });
    view.ui.add(legend, "bottom-right");
});
