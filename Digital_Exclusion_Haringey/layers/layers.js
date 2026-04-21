ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([529282.674018, 188085.618281, 538307.168300, 193068.798802]);
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
var format_Haringeyactors_3 = new ol.format.GeoJSON();
var features_Haringeyactors_3 = format_Haringeyactors_3.readFeatures(json_Haringeyactors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Haringeyactors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Haringeyactors_3.addFeatures(features_Haringeyactors_3);
var lyr_Haringeyactors_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Haringeyactors_3, 
                style: style_Haringeyactors_3,
                popuplayertitle: 'Haringey actors',
                interactive: true,
    title: 'Haringey actors<br />\
    <img src="styles/legend/Haringeyactors_3_0.png" /> Community space<br />\
    <img src="styles/legend/Haringeyactors_3_1.png" /> Faith/Cultural institution<br />\
    <img src="styles/legend/Haringeyactors_3_2.png" /> Health/Social care<br />\
    <img src="styles/legend/Haringeyactors_3_3.png" /> Local business<br />\
    <img src="styles/legend/Haringeyactors_3_4.png" /> Local government office<br />' });
var group_NELC = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'NELC'});
var group_Leicester = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Leicester'});
var group_Haringey = new ol.layer.Group({
                                layers: [lyr_Walkingcatchment_1,lyr_Selectedneighbourhoods_2,lyr_Haringeyactors_3,],
                                fold: 'open',
                                title: 'Haringey'});
var group_Ealing = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Ealing'});
var group_Greenwich = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Greenwich'});

lyr_OpenStreetMap_0.setVisible(true);lyr_Walkingcatchment_1.setVisible(true);lyr_Selectedneighbourhoods_2.setVisible(true);lyr_Haringeyactors_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Haringey];
lyr_Walkingcatchment_1.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', 'actor_name': 'actor_name', 'category': 'category', 'parking': 'parking', 'accessibility_ramp': 'accessibility_ramp', 'an_updated_webpage': 'an_updated_webpage', 'required_e-booking': 'required_e-booking', 'opening_hours': 'opening_hours', 'WiFi (free)': 'WiFi (free)', 'PCs_to_use': 'PCs_to_use', 'digital_devices_loan': 'digital_devices_loan', });
lyr_Selectedneighbourhoods_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'Lat': 'Lat', 'Long': 'Long', 'GlobalID': 'GlobalID', 'easting': 'easting', 'northing': 'northing', 'Population': 'Population', 'Age': 'Age', 'Deprivation': 'Deprivation', 'auxiliary_storage_labeling_positionx': 'auxiliary_storage_labeling_positionx', 'auxiliary_storage_labeling_positiony': 'auxiliary_storage_labeling_positiony', 'auxiliary_storage_labeling_lineanchorpercent': 'auxiliary_storage_labeling_lineanchorpercent', 'auxiliary_storage_labeling_lineanchorclipping': 'auxiliary_storage_labeling_lineanchorclipping', 'auxiliary_storage_labeling_lineanchortype': 'auxiliary_storage_labeling_lineanchortype', 'auxiliary_storage_labeling_lineanchortextpoint': 'auxiliary_storage_labeling_lineanchortextpoint', });
lyr_Haringeyactors_3.set('fieldAliases', {'id': 'id', 'Actor_name': 'Actor_name', 'Category': 'Category', 'Parking': 'Parking', 'Accesible': 'Accesible', 'Update_web': 'Update_web', 'E-booking': 'E-booking', 'Open_times': 'Open_times', 'Other': 'Other', 'Support': 'Support', 'Device_use': 'Device_use', 'WiFi': 'WiFi', });
lyr_Walkingcatchment_1.set('fieldImages', {'qc_id': 'Range', 'id': 'TextEdit', 'actor_name': 'TextEdit', 'category': 'TextEdit', 'parking': 'TextEdit', 'accessibility_ramp': 'TextEdit', 'an_updated_webpage': 'TextEdit', 'required_e-booking': 'TextEdit', 'opening_hours': 'TextEdit', 'WiFi (free)': 'TextEdit', 'PCs_to_use': 'TextEdit', 'digital_devices_loan': 'TextEdit', });
lyr_Selectedneighbourhoods_2.set('fieldImages', {'fid': '', 'id': '', 'Name': '', 'Lat': '', 'Long': '', 'GlobalID': '', 'easting': '', 'northing': '', 'Population': '', 'Age': '', 'Deprivation': '', 'auxiliary_storage_labeling_positionx': 'Hidden', 'auxiliary_storage_labeling_positiony': 'Hidden', 'auxiliary_storage_labeling_lineanchorpercent': '', 'auxiliary_storage_labeling_lineanchorclipping': '', 'auxiliary_storage_labeling_lineanchortype': '', 'auxiliary_storage_labeling_lineanchortextpoint': '', });
lyr_Haringeyactors_3.set('fieldImages', {'id': 'TextEdit', 'Actor_name': 'TextEdit', 'Category': 'TextEdit', 'Parking': 'TextEdit', 'Accesible': 'TextEdit', 'Update_web': 'TextEdit', 'E-booking': 'TextEdit', 'Open_times': 'TextEdit', 'Other': 'TextEdit', 'Support': 'TextEdit', 'Device_use': 'TextEdit', 'WiFi': 'TextEdit', });
lyr_Walkingcatchment_1.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', 'actor_name': 'no label', 'category': 'no label', 'parking': 'no label', 'accessibility_ramp': 'no label', 'an_updated_webpage': 'no label', 'required_e-booking': 'no label', 'opening_hours': 'no label', 'WiFi (free)': 'no label', 'PCs_to_use': 'no label', 'digital_devices_loan': 'no label', });
lyr_Selectedneighbourhoods_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Name': 'hidden field', 'Lat': 'hidden field', 'Long': 'hidden field', 'GlobalID': 'hidden field', 'easting': 'hidden field', 'northing': 'hidden field', 'Population': 'inline label - visible with data', 'Age': 'inline label - visible with data', 'Deprivation': 'inline label - visible with data', 'auxiliary_storage_labeling_lineanchorpercent': 'hidden field', 'auxiliary_storage_labeling_lineanchorclipping': 'hidden field', 'auxiliary_storage_labeling_lineanchortype': 'hidden field', 'auxiliary_storage_labeling_lineanchortextpoint': 'hidden field', });
lyr_Haringeyactors_3.set('fieldLabels', {'id': 'hidden field', 'Actor_name': 'no label', 'Category': 'no label', 'Parking': 'inline label - visible with data', 'Accesible': 'inline label - visible with data', 'Update_web': 'inline label - visible with data', 'E-booking': 'inline label - visible with data', 'Open_times': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Support': 'inline label - visible with data', 'Device_use': 'inline label - visible with data', 'WiFi': 'inline label - visible with data', });
lyr_Haringeyactors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});