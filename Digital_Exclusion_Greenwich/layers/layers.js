ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:27700").setExtent([536684.086580, 170744.475192, 546290.208066, 176048.820895]);
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
var format_800mbuffer_1 = new ol.format.GeoJSON();
var features_800mbuffer_1 = format_800mbuffer_1.readFeatures(json_800mbuffer_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_800mbuffer_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_800mbuffer_1.addFeatures(features_800mbuffer_1);
var lyr_800mbuffer_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_800mbuffer_1, 
                style: style_800mbuffer_1,
                popuplayertitle: '800m buffer',
                interactive: false,
                title: '<img src="styles/legend/800mbuffer_1.png" /> 800m buffer'
            });
var format_HornPark_2 = new ol.format.GeoJSON();
var features_HornPark_2 = format_HornPark_2.readFeatures(json_HornPark_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_HornPark_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HornPark_2.addFeatures(features_HornPark_2);
var lyr_HornPark_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HornPark_2, 
                style: style_HornPark_2,
                popuplayertitle: 'Horn Park',
                interactive: true,
                title: '<img src="styles/legend/HornPark_2.png" /> Horn Park'
            });
var format_Greenwichactors_3 = new ol.format.GeoJSON();
var features_Greenwichactors_3 = format_Greenwichactors_3.readFeatures(json_Greenwichactors_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:27700'});
var jsonSource_Greenwichactors_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Greenwichactors_3.addFeatures(features_Greenwichactors_3);
var lyr_Greenwichactors_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Greenwichactors_3, 
                style: style_Greenwichactors_3,
                popuplayertitle: 'Greenwich-actors',
                interactive: true,
    title: 'Greenwich-actors<br />\
    <img src="styles/legend/Greenwichactors_3_0.png" /> Community space<br />\
    <img src="styles/legend/Greenwichactors_3_1.png" /> Faith/Cultural institution<br />\
    <img src="styles/legend/Greenwichactors_3_2.png" /> Health/Social care<br />\
    <img src="styles/legend/Greenwichactors_3_3.png" /> Local business<br />\
    <img src="styles/legend/Greenwichactors_3_4.png" /> Local government office<br />' });
var group_Greenwich = new ol.layer.Group({
                                layers: [lyr_800mbuffer_1,lyr_HornPark_2,lyr_Greenwichactors_3,],
                                fold: 'open',
                                title: 'Greenwich'});

lyr_OpenStreetMap_0.setVisible(true);lyr_800mbuffer_1.setVisible(true);lyr_HornPark_2.setVisible(true);lyr_Greenwichactors_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Greenwich];
lyr_800mbuffer_1.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'actor_name': 'actor_name', 'category': 'category', 'Parking': 'Parking', 'Accessibility_ramp': 'Accessibility_ramp', 'an_updated_website': 'an_updated_website', 'opening_hours': 'opening_hours', });
lyr_HornPark_2.set('fieldAliases', {'fid': 'fid', 'lsoa21cd': 'lsoa21cd', 'lsoa21nm': '<b>Horn Park</b><br>', 'msoa21cd': 'msoa21cd', 'msoa21nm': 'msoa21nm', 'lad22cd': 'lad22cd', 'lad22nm': 'lad22nm', 'Population': 'Population', 'Age': 'Age', 'Deprivation': 'Deprivation', });
lyr_Greenwichactors_3.set('fieldAliases', {'fid': 'fid', 'actor_name': 'actor_name', 'Category': 'Category', 'Parking': 'Parking', 'Accessible': 'Accessible', 'Update webpage': 'Update webpage', 'Open hours': 'Open hours', 'Other': 'Other', 'Social activities': 'Social activities', 'Training or course': 'Training or course', });
lyr_800mbuffer_1.set('fieldImages', {'qc_id': 'Range', 'fid': 'Range', 'actor_name': 'TextEdit', 'category': 'TextEdit', 'Parking': 'TextEdit', 'Accessibility_ramp': 'TextEdit', 'an_updated_website': 'TextEdit', 'opening_hours': 'TextEdit', });
lyr_HornPark_2.set('fieldImages', {'fid': 'TextEdit', 'lsoa21cd': 'TextEdit', 'lsoa21nm': 'TextEdit', 'msoa21cd': 'TextEdit', 'msoa21nm': 'TextEdit', 'lad22cd': 'TextEdit', 'lad22nm': 'TextEdit', 'Population': 'TextEdit', 'Age': 'TextEdit', 'Deprivation': 'TextEdit', });
lyr_Greenwichactors_3.set('fieldImages', {'fid': 'TextEdit', 'actor_name': 'TextEdit', 'Category': 'TextEdit', 'Parking': 'TextEdit', 'Accessible': 'TextEdit', 'Update webpage': 'TextEdit', 'Open hours': 'TextEdit', 'Other': 'TextEdit', 'Social activities': 'TextEdit', 'Training or course': 'TextEdit', });
lyr_800mbuffer_1.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'actor_name': 'no label', 'category': 'no label', 'Parking': 'no label', 'Accessibility_ramp': 'no label', 'an_updated_website': 'no label', 'opening_hours': 'no label', });
lyr_HornPark_2.set('fieldLabels', {'fid': 'hidden field', 'lsoa21cd': 'hidden field', 'lsoa21nm': 'hidden field', 'msoa21cd': 'hidden field', 'msoa21nm': 'hidden field', 'lad22cd': 'hidden field', 'lad22nm': 'hidden field', 'Population': 'inline label - visible with data', 'Age': 'inline label - visible with data', 'Deprivation': 'inline label - visible with data', });
lyr_Greenwichactors_3.set('fieldLabels', {'fid': 'hidden field', 'actor_name': 'no label', 'Category': 'no label', 'Parking': 'inline label - visible with data', 'Accessible': 'inline label - visible with data', 'Update webpage': 'inline label - visible with data', 'Open hours': 'inline label - visible with data', 'Other': 'inline label - visible with data', 'Social activities': 'inline label - visible with data', 'Training or course': 'inline label - visible with data', });
lyr_Greenwichactors_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});