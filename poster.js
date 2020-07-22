(function () {
  "use strict";

  Cesium.Ion.defaultAccessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNDhhNGY5MS1iZjMzLTRmZmUtYjE0Ny1kY2NjN2NlNmU0NTEiLCJpZCI6MTA3LCJpYXQiOjE0ODkxNTg0ODB9.b1pvDdm-eKF1QaCOhp_I8v8KCD51dTDcWryUkmp_yfg';

  var viewer = new Cesium.Viewer('cesiumContainer', {
    scene3DOnly: true,
    selectionIndicator: false,
    baseLayerPicker: false,
    navigationHelpButton: false,
    geocoder: false,
    homeButton: false,
    timeline: false,
    animation: false,
    fullscreenButton: false,
    useBrowserRecommendedResolution: false,
    resolutionScale: 2.0,
    terrainProvider: Cesium.createWorldTerrain({
      requestWaterMask: true
    }),
    imageryProvider: new Cesium.IonImageryProvider({
      assetId: 2635
    }),
    //skyAtmosphere: false,
    skyBox: new Cesium.SkyBox({
      sources : {
        positiveX : 'http://127.0.0.1:8080/MilkyWay/Unity1-north.png',
        negativeX : 'http://127.0.0.1:8080/MilkyWay/Unity3-south.png',
        positiveY : 'http://127.0.0.1:8080/MilkyWay/Unity5-top.png',
        negativeY : 'http://127.0.0.1:8080/MilkyWay/Unity6-bottom.png',
        positiveZ : 'http://127.0.0.1:8080/MilkyWay/Unity2-east.png',
        negativeZ : 'http://127.0.0.1:8080/MilkyWay/Unity4-west.png'
      }
    }),
    //skyBox : new Cesium.SkyBox({
    //  sources : {
    //    positiveX : 'http://127.0.0.1:8080/MilkyWay/positiveX.png',
    //    negativeX : 'http://127.0.0.1:8080/MilkyWay/negativeX.png',
    //    positiveY : 'http://127.0.0.1:8080/MilkyWay/positiveY.png',
    //    negativeY : 'http://127.0.0.1:8080/MilkyWay/negativeY.png',
    //    positiveZ : 'http://127.0.0.1:8080/MilkyWay/positiveZ.png',
    //    negativeZ : 'http://127.0.0.1:8080/MilkyWay/negativeZ.png'
    //  }
    //}),
  });

  viewer.scene.globe.enableLighting = true;
  viewer.scene.globe.atmosphereBrightnessShift = 0.0;
  viewer.scene.globe.atmosphereHueShift = 0.0;
  viewer.scene.globe.atmosphereSaturationShift = 0.0;

  //Add basic drag and drop functionality
  viewer.extend(Cesium.viewerDragDropMixin);

  //Show a pop-up alert if we encounter an error when processing a dropped file
  viewer.dropError.addEventListener(function(dropHandler, name, error) {
    console.log(error);
    window.alert(error);
  });

}());
