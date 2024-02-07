require([
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/widgets/Legend", // Importing Legend
    "dojo/domReady!"
], function(WebScene, SceneView, Legend) { // Adding WebScene, SceneViewLegend and Legend to the function parameters


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

    view.when(function() {
        // Fully loading the view and then adding the legend
        var legend = new Legend({
            view: view
        });
        view.ui.add(legend, "bottom-right");
    });
});
