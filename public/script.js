window.onload = function () {
    //idが"canvas"である領域に地図を表示させる
    var map = new OpenLayers.Map("canvas");
    var mapnik = new OpenLayers.Layer.OSM();
    map.addLayer(mapnik);
    //地図の中心座標(緯度経度)を設定する
    var lonLat = new OpenLayers.LonLat(139.622549, 35.468217)
        .transform(new OpenLayers.Projection("EPSG:4326"), new OpenLayers.Projection("EPSG:900913"));
    map.setCenter(lonLat, 15);
}