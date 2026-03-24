ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-39941.009791, 7052300.684674, 11771.821578, 7103754.520226]);
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
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
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
var format_NELCactors_2 = new ol.format.GeoJSON();
var features_NELCactors_2 = format_NELCactors_2.readFeatures(json_NELCactors_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NELCactors_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NELCactors_2.addFeatures(features_NELCactors_2);
var lyr_NELCactors_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NELCactors_2, 
                style: style_NELCactors_2,
                popuplayertitle: 'NELC actors',
                interactive: true,
    title: 'NELC actors<br />\
    <img src="styles/legend/NELCactors_2_0.png" /> Community space<br />\
    <img src="styles/legend/NELCactors_2_1.png" /> Faith/Cultural institution<br />\
    <img src="styles/legend/NELCactors_2_2.png" /> Health/Social care<br />\
    <img src="styles/legend/NELCactors_2_3.png" /> Local business<br />\
    <img src="styles/legend/NELCactors_2_4.png" /> Local government office<br />' });
var format_Selectedneighbourhood_3 = new ol.format.GeoJSON();
var features_Selectedneighbourhood_3 = format_Selectedneighbourhood_3.readFeatures(json_Selectedneighbourhood_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Selectedneighbourhood_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Selectedneighbourhood_3.addFeatures(features_Selectedneighbourhood_3);
var lyr_Selectedneighbourhood_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Selectedneighbourhood_3, 
                style: style_Selectedneighbourhood_3,
                popuplayertitle: 'Selected neighbourhood',
                interactive: false,
                title: '<img src="styles/legend/Selectedneighbourhood_3.png" /> Selected neighbourhood'
            });
var group_NELC = new ol.layer.Group({
                                layers: [lyr_Walkingcatchment_1,lyr_NELCactors_2,lyr_Selectedneighbourhood_3,],
                                fold: 'open',
                                title: 'NELC'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walkingcatchment_1.setVisible(true);lyr_NELCactors_2.setVisible(true);lyr_Selectedneighbourhood_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_NELC];
lyr_Walkingcatchment_1.set('fieldAliases', {'ID': 'ID', 'CENTER_LON': 'CENTER_LON', 'CENTER_LAT': 'CENTER_LAT', 'AA_MINS': 'AA_MINS', 'AA_MODE': 'AA_MODE', 'TOTAL_POP': 'TOTAL_POP', });
lyr_NELCactors_2.set('fieldAliases', {'id': 'id', 'Actor_name': 'Actor_name', 'Category': 'Category', 'Parking': 'Parking', 'Accessible': 'Accessible', 'Update_web': 'Update_web', 'E-booking': 'E-booking', 'Open_hours': 'Open_hours', 'Free_cours': 'Free_cours', 'Support': 'Support', 'Social_act': 'Social_act', 'Device_loa': 'Device_loa', 'WiFi': 'WiFi', 'Device_use': 'Device_use', 'Other': 'Other', });
lyr_Selectedneighbourhood_3.set('fieldAliases', {'fid': 'fid', 'LSOA21CD': 'LSOA21CD', 'LSOA21NM': 'LSOA21NM', 'LSOA21NMW': 'LSOA21NMW', 'BNG_E': 'BNG_E', 'BNG_N': 'BNG_N', 'LAT': 'LAT', 'LONG': 'LONG', 'GlobalID': 'GlobalID', });
lyr_Walkingcatchment_1.set('fieldImages', {'ID': '', 'CENTER_LON': '', 'CENTER_LAT': '', 'AA_MINS': '', 'AA_MODE': '', 'TOTAL_POP': '', });
lyr_NELCactors_2.set('fieldImages', {'id': 'TextEdit', 'Actor_name': 'TextEdit', 'Category': 'TextEdit', 'Parking': 'TextEdit', 'Accessible': 'TextEdit', 'Update_web': 'TextEdit', 'E-booking': 'TextEdit', 'Open_hours': 'TextEdit', 'Free_cours': 'TextEdit', 'Support': 'TextEdit', 'Social_act': 'TextEdit', 'Device_loa': 'TextEdit', 'WiFi': 'TextEdit', 'Device_use': 'TextEdit', 'Other': 'TextEdit', });
lyr_Selectedneighbourhood_3.set('fieldImages', {'fid': '', 'LSOA21CD': '', 'LSOA21NM': '', 'LSOA21NMW': '', 'BNG_E': '', 'BNG_N': '', 'LAT': '', 'LONG': '', 'GlobalID': '', });
lyr_Walkingcatchment_1.set('fieldLabels', {'ID': 'no label', 'CENTER_LON': 'no label', 'CENTER_LAT': 'no label', 'AA_MINS': 'no label', 'AA_MODE': 'no label', 'TOTAL_POP': 'no label', });
lyr_NELCactors_2.set('fieldLabels', {'id': 'hidden field', 'Actor_name': 'no label', 'Category': 'no label', 'Parking': 'inline label - visible with data', 'Accessible': 'inline label - visible with data', 'Update_web': 'inline label - visible with data', 'E-booking': 'inline label - visible with data', 'Open_hours': 'inline label - visible with data', 'Free_cours': 'inline label - visible with data', 'Support': 'inline label - visible with data', 'Social_act': 'inline label - visible with data', 'Device_loa': 'inline label - visible with data', 'WiFi': 'inline label - visible with data', 'Device_use': 'inline label - visible with data', 'Other': 'inline label - visible with data', });
lyr_Selectedneighbourhood_3.set('fieldLabels', {'fid': 'no label', 'LSOA21CD': 'no label', 'LSOA21NM': 'no label', 'LSOA21NMW': 'no label', 'BNG_E': 'no label', 'BNG_N': 'no label', 'LAT': 'no label', 'LONG': 'no label', 'GlobalID': 'no label', });
lyr_Selectedneighbourhood_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});