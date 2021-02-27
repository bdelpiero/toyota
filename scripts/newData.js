const fs = require("fs");

dealerships = [
  "Autos del Sur - Av. Cabrera (ex Sarmiento) 4189 - Bahía Blanca \n -                                Buenos Aires",
  "Autosiglo - Calle 44 nº 2186 (e/138 y 139) - La Plata - Buenos\n                                Aires",
  "Autosiglo - Av. Constitucion 7501 - Mar del Plata - Buenos Aires\n                            ",
  "Asahi Motors - Av. Pte Perón 8919 - Ituzaingó - GBA",
  "Del Pilar - Colectora Panamericana Ramal Pilar KM 51,200 - Pilar\n -                               GBA",
  "San Miguel - Av. Presidente Illia (ex Ruta 8) 4175 - San Miguel\n     -                           GBA",
  "Accesorios y Repuestos - Av. Juan B. Justo 3135 - Capital Federal\n   -                               Capital Federal",
  "BHASSA - Ruta Nacional 5 Km. 445 - Trenque Lauquen - Buenos\n                                Aires",
  "Catriel Mapú - Av. del Valle 4723 - Olavarría -  Buenos Aires\n                            ",
  "Catriel Mapú - Ruta 5 Km 263 - 9 de Julio - Buenos Aires",
  "Catriel Mapú - Av. Piazza 1287 - Azul - Buenos Aires",
  "Pichetti - Ruta 8 y 25 de Mayo - Arrecifes - Buenos Aires\n                            ",
  "Pichetti - Av. Venini 285 (Ruta 188 y San Luis) - Pergamino\n  -                               Buenos Aires",
  "Pichetti - Ruta 7 km 260,4 Esquina Edison - Junín - Buenos\n                                Aires",
  "Gustavo Ricciardi - Buenos Aires 862 - Lobos - Buenos Aires\n                            ",
  "Gustavo Ricciardi - Hipolito Irigoyen 40 - Lobos - Buenos Aires\n                            ",
  "Gustavo Ricciardi - Ruta 5 Km 97,5 - Mercedes - Buenos Aires\n                            ",
  "Sarthou - Av. Santa Fé 1087 - Acassuso - GBA",
  "Sarthou - Av. Crisólogo Larralde 1111 - Carupá, Tigre - GBA",
  "Treos - Av. del Libertador 1840/42 - Vicente López\n -                                GBA",
  "Treos - Carlos F. Melo 1950 - Vicente López - GBA",
  "Treos - Av. Dr. Ricardo Balbín 1640 - San Martín - GBA",
  "Toyota Panamericana - Colectora Este 29441 (Panamericana Km\n                                29.4) - El Talar - GBA",
  "Toyota Panamericana - Colectora Sur 1775 (Panamericana Km 73.5)\n                                - Campana - Buenos Aires",
  "Uzcudun - Av. Moreno 851 - Tres Arroyos - Buenos Aires",
  "Uzcudun - Av. 59 Esquina 22 - Necochea - Buenos Aires",
  "Uzcudun - Av. Avellaneda 1790 - Tandil - Buenos Aires",
  "Zento - Av. Hipolito Irigoyen 3202 - Lanús - GBA",
  "Zento - Av. Hipólito Yrigoyen 13123 - Adrogué - GBA",
  "Accesorios y Repuestos - Av. Scalabrini Ortíz 1502 - Capital\n                                Federal - Capital Federal",
  "CerritoCar - Cerrito 1568 - Capital Federal - Capital Federal",
  "Peru Automotores - Perú 470 -  Capital Federal - Capital Federal",
  "Peru Automotores - Venezuela 543 - Capital Federal\n  - Capital Federal                          ",
  "Federico - Av.Cabildo 4302/10 -  Capital Federal - Capital Federal",
  "Federico - Av. Cramer 3453 -  Capital Federal\n - Capital Federal                           ",
  "Federico - Ruiz Huidobro 2338 - Capital Federal\n     - Capital Federal                       ",
  "Jorge Ferro - Av del Libertador 6777 - Capital Federal\n  - Capital Federal                          ",
  "Jorge Ferro - Quesada 1965 - Capital Federal - Capital Federal",
  "Kansai - Rivadavia 8981 -  Capital Federal\n   - Capital Federal                         ",
  "Kansai - Av. Rivadavia 6102 - Capital Federal - Capital Federal",
  "Kansai - Donato Alvarez 1350 - Capital Federal\n   - Capital Federal                         ",
  "Kansai - Av. Córdoba 6006 - Capital Federal - Capital Federal",
  "Viola - Av. Montes de Oca 680  - Capital Federal\n   - Capital Federal                         ",
  "Viola - Av. Juan de Garay 2269 - Capital Federal - Capital Federal",
  "Toyota Nuñez - Av. Figueroa Alcorta 7576 - Capital Federal\n   - Capital Federal                        ",
  "Prana - Av. Francisco Beiró 3502 - Capital Federal\n    - Capital Federal                        ",
  "Prana - Av. Francisco Beiró 4431 - Capital Federal\n     - Capital Federal                       ",
  "Prana - Llavallol 3331 - Capital Federal - Capital Federal",
  "Del Parque - Alem Norte 250 - San Fernando del Valle de Catamarca - Catamarca",
  "Derka y Vargas - Belgrano 872 -  R.S. Peña - Chaco",
  "Derka y Vargas - Ruta Nicolas Avellaneda Km 11,6 - Resistencia - Chaco\n                            ",
  "Derka y Vargas - Avda. 25 de Mayo N° 1101 - Villa Angela - Chaco\n                            ",
  "Derka y Vargas - Ruta 89, km 74 - Charata - Chaco",
  "Autos del Sur - H. Irigoyen 1340 - Trelew - Chubut",
  "Autos del Sur - Av. Gales 1201 - Puerto Madryn - Chubut",
  "Autos del Sur - Gobernador Galina Ruta Nacional 259, Km. 7. - Esquel - Chubut",
  "Tsuyoi - Av. H. Irigoyen 1985 - Cdoro. Rivadavia - Chubut",
  "Audec - Ruta Prov. 40 cruce con Ruta 119 - Mercedes - Corrientes",
  "Audec - Av. Independencia 4280 - Corrientes - Corrientes",
  "Alem Motors - L. N. Alem 256 - Villa María - Córdoba",
  "Alem Motors - Ruta Nacional 158 Km 1. Las Higueras (5805) - Río Cuarto - Córdoba",
  "Centro Motor - Av. Colon 5077 - Córdoba - Córdoba",
  "Centro Motor - Av. Monseñor Pablo Cabrera 4611 - Córdoba - Córdoba",
  "Centro Motor - Pagani 1865  - Arroyito - Córdoba",
  "Milanesio - Av. Rosario de Santa Fe 2810 - San Francisco - Córdoba",
  "Ginza - Av. Juan Domingo Peron 1406 - Monte Maiz - Córdoba",
  "Haimovich - Av. Raúl L. Uranga 612 - Paraná - Entre Ríos",
  "Haimovich - Ruta Nacional 14 Km 250,5 - Estancia Grande - Entre Ríos",
  "Piñeyro y Moscatelli - 9 de Julio 1624 - Concepción del Uruguay - Entre Ríos",
  "Homu - Av. Gendarmería Nacional N° 860 - Formosa - Formosa",
  "Autolux - Ruta 9, Acceso Sur, Las Lomas. Por Colectora. - S. S. De Jujuy - Jujuy",
  "BHASSA - Av. Spinetto 1409 - Santa Rosa -  La Pampa",
  "BHASSA - Calle 13 N° 552 - Gral. Pico - La Pampa",
  "Bosetti Automotores - Ruta Nacional 38 intersección Ruta Provincial 5 - La Rioja - La Rioja",
  "Yacopini - Carril Rodriguez Peña 1600 - Godoy Cruz - Mendoza",
  "Yacopini - Av. San Martín 1902 - Godoy Cruz - Mendoza",
  "Yacopini - Av. Bartolomé Mitre 770 - San Rafael - Mendoza",
  "TM - Uruguay 5550 - Posadas - Misiones",
  "TM - Av. San Martin 2554, Lado E, Km 10 - Eldorado - Misiones",
  "Nippon Car - Av. Perticone 2095 - Neuquén - Neuquén",
  "Nippon Car - Elordi 320 - S.C. De Bariloche - Río Negro",
  "Nippon Car - Rivadavia 730 - S.C. De Bariloche - Río Negro",
  "Nippon Car - Av. Roca 673 - Gral. Roca - Río Negro",
  "Nippon Car - Sarmiento 662 - Gral. Roca - Río Negro",
  "Autolux - Av. Ex Combatientes de Malvinas 3571 - Salta - Salta",
  "Autolux - Calle Jujuy Esquina Arenales - Tartagal - Salta",
  "Señor Gonzalez - Saturnino Sarassa Este 850 (esquina Lateral Este de Av. Circunvalación) - San Juan - San Juan",
  "Alianz - Ruta 20 Km 4,3 - San Luis - San Luis",
  "Alianz - Avda. 25 de Mayo N° 1876 - Villa Mercedes - San Luis",
  "Tsuyoi - Perito Moreno y Urquiza - Rio Gallegos - Santa Cruz",
  "Tsuyoi - Rio Gallegos 805 - Las Heras - Santa Cruz",
  "Amiun - Av. Perón 4957 - Santa Fe - Santa Fe",
  "Amiun - Bv. Carlos Pellegrini 3092 - Santa Fe - Santa Fe",
  "Amiun - Av. Angela de la Casa 1887 - Rafaela - Santa Fe",
  "Amiun - Ruta A009 y calle 53 (Ruta nacional 11, Rotonda Sur) - Reconquista - Santa Fe",
  "Autorosario - Av.Eva Perón (ex Córdoba) 7811 / 7829 - Rosario -  Santa Fe",
  "Ginza - Av. Carballo 632 - Rosario - Santa Fe",
  "Ginza - Blvd. Avellaneda 2075 - Rosario - Santa Fe",
  "Mendez - Ovidio Lagos 202 - Venado Tuerto - Santa Fe",
  "Milanesio - Av. Falucho 1106 - San Jorge - Santa Fe",
  "Senna - Av. Belgrano (sur) 979 - Santiago del Estero - Santiago del Estero",
  "Celentano Motors - Héroes de Malvinas 4360 - Ushuaia - Tierra del Fuego",
  "Celentano Motors - Av. Islas Malvinas 2755 - Río Grande - Tierra del Fuego",
  "Line-Up - Av. Presidente Néstor Kirchner 3975 - S.M. de Tucumán - Tucumán",
];

// console.log(
//   dealerships[dealerships.length - 1].split(" - ").map((w) => {
//     return w.trim();
//   })
// );

// dealerships.forEach((d) => {
//   print = d.split(" - ").map((w) => {
//     return w.trim();
//   });
//   if (print.length != 4) console.log(print.join(","));
//   // console.log(print.length);
// });

let toyotaInfo = {};

// si la provincia o la ciudad no existe, las crea
function addDealership({ province, city, dealershipName }) {
  // console.log(dealership);
  toyotaInfo[province] = toyotaInfo[province] || {};
  toyotaInfo[province][city] = toyotaInfo[province][city] || [];
  toyotaInfo[province][city] = [...toyotaInfo[province][city], dealershipName];
}

dealerships.forEach((dealership) => {
  // get data from each dealership and remove extra spaces
  const data = dealership
    .split(" - ")
    .map((word) => word.replace(/\s+/g, " ").trim());

  console.log(data[3]);

  // edge case: GBA (shoulb be "Buenos Aires")
  const province = data[3] == "GBA" ? "Buenos Aires" : data[3];
  const city = data[2];
  const dealershipName = data[0];

  addDealership({ province, city, dealershipName });
});

const toyotaJSON = JSON.stringify(toyotaInfo);
fs.writeFile("toyotaInfo.json", toyotaJSON, function (err, result) {
  if (err) console.log("error", err);
});
