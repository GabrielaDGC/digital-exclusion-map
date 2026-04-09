ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([452296.058607, 295726.134582, 464925.570460, 303642.510168]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Walkingcatchment_1 = new ol.format.GeoJSON();
var features_Walkingcatchment_1 = format_Walkingcatchment_1.readFeatures(json_Walkingcatchment_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Walkingcatchment_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Walkingcatchment_1.addFeatures(features_Walkingcatchment_1);
var lyr_Walkingcatchment_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Walkingcatchment_1, 
                style: style_Walkingcatchment_1,
                popuplayertitle: 'Walking catchment',
                interactive: false,
    title: 'Walking catchment<br />\
    <img src="styles/legend/Walkingcatchment_1_0.png" /> 10 min<br />\
    <img src="styles/legend/Walkingcatchment_1_1.png" /> 15 min<br />\
    <img src="styles/legend/Walkingcatchment_1_2.png" /> 20 min<br />' });
var format_Selectedneighbourhoods_2 = new ol.format.GeoJSON();
var features_Selectedneighbourhoods_2 = format_Selectedneighbourhoods_2.readFeatures(json_Selectedneighbourhoods_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Selectedneighbourhoods_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selectedneighbourhoods_2.addFeatures(features_Selectedneighbourhoods_2);
var lyr_Selectedneighbourhoods_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selectedneighbourhoods_2, 
                style: style_Selectedneighbourhoods_2,
                popuplayertitle: 'Selected neighbourhoods',
                interactive: true,
                title: '<img src="styles/legend/Selectedneighbourhoods_2.png" /> Selected neighbourhoods'
            });
var format_Leicesteractors_3 = new ol.format.GeoJSON();
var features_Leicesteractors_3 = format_Leicesteractors_3.readFeatures(json_Leicesteractors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Leicesteractors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Leicesteractors_3.addFeatures(features_Leicesteractors_3);
var lyr_Leicesteractors_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Leicesteractors_3, 
                style: style_Leicesteractors_3,
                popuplayertitle: 'Leicester actors',
                interactive: true,
    title: 'Leicester actors<br />\
    <img src="styles/legend/Leicesteractors_3_0.png" /> Community space<br />\
    <img src="styles/legend/Leicesteractors_3_1.png" /> Faith/Cultural institution<br />\
    <img src="styles/legend/Leicesteractors_3_2.png" /> Health/Social care<br />\
    <img src="styles/legend/Leicesteractors_3_3.png" /> Local business<br />\
    <img src="styles/legend/Leicesteractors_3_4.png" /> Local government office<br />' });
var group_Leicester = new ol.layer.Group({
                                layers: [lyr_Walkingcatchment_1,lyr_Selectedneighbourhoods_2,lyr_Leicesteractors_3,],
                                fold: 'open',
                                title: 'Leicester'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walkingcatchment_1.setVisible(true);lyr_Selectedneighbourhoods_2.setVisible(true);lyr_Leicesteractors_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Leicester];
lyr_Walkingcatchment_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_Selectedneighbourhoods_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Overview': 'Overview', 'Age': 'Age', 'Deprivation': 'Deprivation', 'Population': 'Population', });
lyr_Leicesteractors_3.set('fieldAliases', {'id': 'id', 'Actor_name': 'Actor_name', 'Category': 'Category', 'Parking': 'Parking', 'Accessible': 'Accessible', 'Open_hours': 'Open_hours', 'Support': 'Support', 'Social_act': 'Social_act', 'Device_loa': 'Device_loa', 'WiFi': 'WiFi', 'Device_use': 'Device_use', 'Free_cours': 'Free_cours', });
lyr_Walkingcatchment_1.set('fieldImages', {'ID': 'TextEdit', 'CENTER_LON': 'TextEdit', 'CENTER_LAT': 'TextEdit', 'AA_MINS': 'Range', 'AA_MODE': 'TextEdit', 'TOTAL_POP': 'TextEdit', });
lyr_Selectedneighbourhoods_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Name': 'TextEdit', 'Overview': 'TextEdit', 'Age': '', 'Deprivation': '', 'Population': '', });
lyr_Leicesteractors_3.set('fieldImages', {'id': 'TextEdit', 'Actor_name': 'TextEdit', 'Category': 'TextEdit', 'Parking': 'TextEdit', 'Accessible': 'TextEdit', 'Open_hours': 'TextEdit', 'Support': 'TextEdit', 'Social_act': 'TextEdit', 'Device_loa': 'TextEdit', 'WiFi': 'TextEdit', 'Device_use': 'TextEdit', 'Free_cours': 'TextEdit', });
lyr_Walkingcatchment_1.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_Selectedneighbourhoods_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'Overview': 'hidden field', 'Age': 'inline label - visible with data', 'Deprivation': 'inline label - visible with data', 'Population': 'inline label - visible with data', });
lyr_Leicesteractors_3.set('fieldLabels', {'id': 'hidden field', 'Actor_name': 'no label', 'Category': 'no label', 'Parking': 'inline label - visible with data', 'Accessible': 'inline label - visible with data', 'Open_hours': 'inline label - visible with data', 'Support': 'inline label - visible with data', 'Social_act': 'inline label - visible with data', 'Device_loa': 'inline label - visible with data', 'WiFi': 'inline label - visible with data', 'Device_use': 'inline label - visible with data', 'Free_cours': 'inline label - visible with data', });
lyr_Leicesteractors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});