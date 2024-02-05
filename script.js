require([
    "esri/WebScene",
    "esri/views/SceneView",
    "dojo/domReady!"
], function(WebScene, SceneView) {

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

});