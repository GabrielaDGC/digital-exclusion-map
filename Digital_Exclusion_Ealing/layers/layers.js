ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([508444.746803, 177902.383594, 523146.565697, 186020.491406]);
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
                title: '<img src="styles/legend/Walkingcatchment_1.png" /> Walking catchment'
            });
var format_Selectedneighbourhood_2 = new ol.format.GeoJSON();
var features_Selectedneighbourhood_2 = format_Selectedneighbourhood_2.readFeatures(json_Selectedneighbourhood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Selectedneighbourhood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selectedneighbourhood_2.addFeatures(features_Selectedneighbourhood_2);
var lyr_Selectedneighbourhood_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selectedneighbourhood_2, 
                style: style_Selectedneighbourhood_2,
                popuplayertitle: 'Selected neighbourhood',
                interactive: true,
                title: '<img src="styles/legend/Selectedneighbourhood_2.png" /> Selected neighbourhood'
            });
var format_Ealingactors_3 = new ol.format.GeoJSON();
var features_Ealingactors_3 = format_Ealingactors_3.readFeatures(json_Ealingactors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Ealingactors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ealingactors_3.addFeatures(features_Ealingactors_3);
var lyr_Ealingactors_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ealingactors_3, 
                style: style_Ealingactors_3,
                popuplayertitle: 'Ealing actors',
                interactive: true,
    title: 'Ealing actors<br />\
    <img src="styles/legend/Ealingactors_3_0.png" /> Community space<br />\
    <img src="styles/legend/Ealingactors_3_1.png" /> Faith/Cultural institution<br />\
    <img src="styles/legend/Ealingactors_3_2.png" /> Health/Social care<br />\
    <img src="styles/legend/Ealingactors_3_3.png" /> Local business<br />\
    <img src="styles/legend/Ealingactors_3_4.png" /> Local government office<br />' });
var group_NELC = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'NELC'});
var group_Leicester = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Leicester'});
var group_Haringey = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Haringey'});
var group_Ealing = new ol.layer.Group({
                                layers: [lyr_Walkingcatchment_1,lyr_Selectedneighbourhood_2,lyr_Ealingactors_3,],
                                fold: 'open',
                                title: 'Ealing'});
var group_Greenwich = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Greenwich'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walkingcatchment_1.setVisible(true);lyr_Selectedneighbourhood_2.setVisible(true);lyr_Ealingactors_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Ealing];
lyr_Walkingcatchment_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'actor_name': 'actor_name', 'category': 'category', });
lyr_Selectedneighbourhood_2.set('fieldAliases', {'fid': 'fid', 'lsoa21cd': 'lsoa21cd', 'lsoa21nm': 'lsoa21nm', 'msoa21cd': 'msoa21cd', 'msoa21nm': 'msoa21nm', 'lad22cd': 'lad22cd', 'lad22nm': 'lad22nm', 'Age': 'Age', 'Population': 'Population', 'Deprivation': 'Deprivation', });
lyr_Ealingactors_3.set('fieldAliases', {'id': 'id', 'actor_name': 'actor_name', 'Category': 'Category', 'Parking': 'Parking', 'Social act': 'Social act', 'Support': 'Support', 'Updated we': 'Updated we', 'E-booking': 'E-booking', 'Training o': 'Training o', 'Other': 'Other', 'WiFi': 'WiFi', 'Devices av': 'Devices av', 'Accessible': 'Accessible', });
lyr_Walkingcatchment_1.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'actor_name': 'TextEdit', 'category': 'TextEdit', });
lyr_Selectedneighbourhood_2.set('fieldImages', {'fid': '', 'lsoa21cd': '', 'lsoa21nm': '', 'msoa21cd': '', 'msoa21nm': '', 'lad22cd': '', 'lad22nm': '', 'Age': '', 'Population': '', 'Deprivation': '', });
lyr_Ealingactors_3.set('fieldImages', {'id': 'TextEdit', 'actor_name': 'TextEdit', 'Category': 'TextEdit', 'Parking': 'TextEdit', 'Social act': '', 'Support': 'TextEdit', 'Updated we': '', 'E-booking': 'TextEdit', 'Training o': '', 'Other': 'TextEdit', 'WiFi': 'TextEdit', 'Devices av': '', 'Accessible': 'TextEdit', });
lyr_Walkingcatchment_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'actor_name': 'no label', 'category': 'no label', });
lyr_Selectedneighbourhood_2.set('fieldLabels', {'fid': 'hidden field', 'lsoa21cd': 'hidden field', 'lsoa21nm': 'hidden field', 'msoa21cd': 'hidden field', 'msoa21nm': 'hidden field', 'lad22cd': 'hidden field', 'lad22nm': 'hidden field', 'Age': 'inline label - visible with data', 'Population': 'inline label - visible with data', 'Deprivation': 'inline label - visible with data', });
lyr_Ealingactors_3.set('fieldLabels', {'id': 'hidden field', 'actor_name': 'no label', 'Category': 'no label', 'Parking': 'inline label - visible with data', 'Social act': 'inline label - visible with data', 'Support': 'inline label - visible with data', 'Updated we': 'inline label - visible with data', 'E-booking': 'inline label - visible with data', 'Training o': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'WiFi': 'inline label - visible with data', 'Devices av': 'inline label - visible with data', 'Accessible': 'inline label - visible with data', });
lyr_Ealingactors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});