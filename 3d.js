let d = new Date();
alert("Visiting this page in : " + d);

//-------------------leaflet----------------


const mymap = L.map(document.getElementById('mapa'), {
        center: [42.74701,-29.75799],
        zoom: 3,
        zoomControl: false
    });

    var coordDIV = document.createElement('div');
    coordDIV.id = 'mapCoordDIV';
    coordDIV.style.position = 'absolute';
    coordDIV.style.bottom = '1px';
    coordDIV.style.left = '150px';
    coordDIV.style.zIndex = '900';
    coordDIV.style.color = '#404040';
    coordDIV.style.fontFamily = 'Calibri';
    coordDIV.style.fontSize = '10pt';
    coordDIV.style.fontWeight = 'bold';
    coordDIV.style.backgroundColor = '#fff';
    coordDIV.style.opacity = '0.6';


    document.getElementById('mapa').appendChild(coordDIV);

//---------------------------------------capturar movimentos do cursor-------------------------------------------------
    mymap.on('mousemove', function(e){
        var lat = e.latlng.lat.toFixed(3);
        var lon = e.latlng.lng.toFixed(3);
        document.getElementById('mapCoordDIV').innerHTML = 'Coordenadas: ' + lat + ' , ' + lon;
        });
//----------------------basemap_original-----------------------------------------------
L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png').addTo(mymap);

        
//-------------------------------Base maps---------------------------------------------------------
        var Ortofotomapa= L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',{ attribution:'<a href="https://www.esri.com/en-us/home"</a>©️ESRI_Imaginary' });

        var OpenStreet = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {attribution:'<a href="https://www.openstreetmap.org/#map=17/-21.00148/-44.99806"</a>©️OpenStreetMap'});

        var CartoDB = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',});

        var basemaps = {
                'Mapa Branco': CartoDB,
                'Imagem Satélite': Ortofotomapa,
                'Open Street Map': OpenStreet,
                
            };




//-----------------ligar/desligar-------------------------
L.control.layers(basemaps,).addTo(mymap);
//-----------------zoombar-------------------
var zoom_bar = new L.Control.ZoomBar({position: 'topleft'}).addTo(mymap);

//--------------------------------escala------------------------------
L.control.scale().addTo(mymap);




//-------------------camadas------------------------------------------



//markers
const icon_point=L.icon({ iconUrl:'contents/search.svg', iconSize:[30,25]});

var melgaco=L.marker([42.11401,-8.26001],{icon: icon_point}).addTo(mymap);
melgaco.bindPopup("<h3>Melgaço Municipality, Portugal</h3><p>DEM's generated from LiDAR data<br>Swath Profiles</p>").openPopup();

var estarreja=L.marker([40.75444,-8.56945],{icon: icon_point}).addTo(mymap);
estarreja.bindPopup("<h3>Estarreja City, Portugal</h3><p>Diagram Blocks<br>Swath Profiles</p>").openPopup();

var serra_arestal=L.marker([40.78910,-8.35881],{icon: icon_point}).addTo(mymap);
serra_arestal.bindPopup("<h3>Serra do Arestal, Portugal</h3><p>Diagram Blocks<br>Swath Profiles</p>").openPopup();
//var estareja_arestal= ir buscar o polígono limite da área de estudo

var veneza=L.marker([45.43341,12.33916],{icon: icon_point}).addTo(mymap);
veneza.bindPopup("<h3>Venice City, Italy</h3><p>Generating Surface Digital Models<br>Extruding features into 3D<br>Dinamic Sights from the local in Video</p>").openPopup();

var ny=L.marker([40.71746,-73.99193],{icon: icon_point}).addTo(mymap);
ny.bindPopup("<h3>New York City, USA</h3><p>Generating Surface Digital Models from LiDAR raw data<br>Extruding features into 3D<br>Dinamic Sights from the local in Video</p>").openPopup();

var grand_junction=L.marker([39.16478,-108.49117],{icon: icon_point}).addTo(mymap);
grand_junction.bindPopup("<h3>Grand Junction, USA</h3><p>Generating DEM's like DTM, Slopes, Elevations and Canopy Height Model from raw LiDAR data</p>").openPopup();

var noruega=L.marker([58.26560,6.85318],{icon: icon_point}).addTo(mymap);
noruega.bindPopup("<h3>Norway</h3><p>Grouping DTM of 10m x 10m from Geonorge<br>Generating Curved Swath Profiles across South Coast<br>Extruding features into 3D</p>").openPopup();

