ol.proj.proj4.register(proj4);
ol.proj.get("USER:100000").setExtent([14566257.788872, 4007639.146880, 23304341.507580, 8501510.773645]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sub_APR_aea_60_1 = new ol.format.GeoJSON();
var features_sub_APR_aea_60_1 = format_sub_APR_aea_60_1.readFeatures(json_sub_APR_aea_60_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'USER:100000'});
var jsonSource_sub_APR_aea_60_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sub_APR_aea_60_1.addFeatures(features_sub_APR_aea_60_1);
var lyr_sub_APR_aea_60_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sub_APR_aea_60_1, 
                style: style_sub_APR_aea_60_1,
                interactive: true,
    title: 'sub_APR_aea_60<br />\
    <img src="styles/legend/sub_APR_aea_60_1_0.png" /> АГИНСКИЙ БУРЯТСКИЙ А.О.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_1.png" /> АЛТАЙСКИЙ КРАЙ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_2.png" /> АМУРСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_3.png" /> ЕВРЕЙСКАЯ А.ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_4.png" /> ИРКУТСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_5.png" /> КАМЧАТСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_6.png" /> КЕМЕРОВСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_7.png" /> КОРЯКСКИЙ А.О.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_8.png" /> КРАСНОЯРСКИЙ КРАЙ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_9.png" /> КУРГАНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_10.png" /> МАГАДАНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_11.png" /> НОВОСИБИРСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_12.png" /> ОЗ.БАЙКАЛ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_13.png" /> ОЗ.ХАНКА<br />\
    <img src="styles/legend/sub_APR_aea_60_1_14.png" /> ОМСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_15.png" /> ПРИМОРСКИЙ КРАЙ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_16.png" /> РЕСПУБЛИКА АЛТАЙ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_17.png" /> РЕСПУБЛИКА БУРЯТИЯ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_18.png" /> РЕСПУБЛИКА САХА (ЯКУТИЯ)<br />\
    <img src="styles/legend/sub_APR_aea_60_1_19.png" /> РЕСПУБЛИКА ТУВА<br />\
    <img src="styles/legend/sub_APR_aea_60_1_20.png" /> РЕСПУБЛИКА ХАКАСИЯ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_21.png" /> САХАЛИНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_22.png" /> СВЕРДЛОВСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_23.png" /> ТОМСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_24.png" /> ТЮМЕНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_25.png" /> УСТЬ-ОРДЫНСКИЙ БУРЯТСКИЙ А.О.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_26.png" /> ХАБАРОВСКИЙ КРАЙ<br />\
    <img src="styles/legend/sub_APR_aea_60_1_27.png" /> ЧЕЛЯБИНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_28.png" /> ЧИТИНСКАЯ ОБЛ.<br />\
    <img src="styles/legend/sub_APR_aea_60_1_29.png" /> <br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sub_APR_aea_60_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sub_APR_aea_60_1];
lyr_sub_APR_aea_60_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NAME_CNTR': 'NAME_CNTR', 'Субъект': 'Субъект', 'Район': 'Район', });
lyr_sub_APR_aea_60_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'NAME_CNTR': 'Hidden', 'Субъект': 'TextEdit', 'Район': 'TextEdit', });
lyr_sub_APR_aea_60_1.set('fieldLabels', {'OBJECTID': 'no label', 'Субъект': 'inline label', 'Район': 'inline label', });
lyr_sub_APR_aea_60_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});