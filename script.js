require([
    "esri/WebScene",
    "esri/views/SceneView",
    "esri/widgets/Legend", // Ensure Legend is imported here
    "dojo/domReady!"
], function(WebScene, SceneView, Legend) { // Add Legend to the function parameters


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
        // This ensures the view is fully loaded before adding the legend
        var legend = new Legend({
            view: view
        });
        view.ui.add(legend, "bottom-right");
    });
});
