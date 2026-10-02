/*
 * Eight individual retail units represented as a continuous frontage strip.
 * The polygons have deliberately exaggerated depth to make touch selection
 * easier. Positions remain provisional pending authoritative unit data.
 */
window.UNION_STREET_CENTRAL_FRONTAGES = frontageStrip(
  [-2.1002491,57.1460151],
  [-2.1019941,57.1455120],
  [0.0001540,-0.0001600],
  [
    unit("trinity-northern-diamond", "osm-way-132130886", "Northern Diamond", "Union Street frontage — address to be confirmed", 0.7, "occupied", "Occupant and position confirmed locally; postal address to be confirmed"),
    unit("trinity-frontage-3", "osm-way-132130886", "Primark", "143–149 Union Street", 1.8, "occupied", "Occupant and address from OSM; frontage extent provisional"),
    unit("trinity-frontage-2", "osm-way-132130886", "Vacant Unit", "155 Union Street", 0.8, "being-occupied", "Address and vacancy status confirmed locally; frontage extent provisional"),
    unit("trinity-frontage-1", "osm-way-132130886", "Poundland", "3–7 Union Bridge", 1.2, "occupied", "Occupant and address confirmed locally; frontage extent provisional"),
    unit("trinity-frontage-5", "osm-way-132130886", "HMV", "11 Union Bridge", 1.2, "occupied", "Occupant and address confirmed locally; frontage extent provisional"),
    unit("bridge-frontage-1", "osm-way-378937853", "Vacant Unit", "157–159 Union Street", 0.8, "available", "Vacancy and address confirmed locally; frontage extent provisional"),
    unit("bridge-frontage-2", "osm-way-378937853", "Greggs", "161 Union Street", 0.8, "occupied", "Occupant and address confirmed locally; frontage extent provisional"),
    unit("bridge-frontage-3", "osm-way-378937853", "Barclays", "163–165 Union Street", 0.8, "occupied", "Occupant and address confirmed locally; frontage extent provisional")
  ]
);

/* Two side-by-side ground-floor units within OSM way 314091322. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-314091322-unit-130",
    "osm-way-314091322",
    "Vacant Unit",
    "130 Union Street, AB10 1JJ",
    "being-occupied",
    [
      [-2.1005788,57.1462827],
      [-2.1004707,57.1461754],
      [-2.1003505,57.1462081],
      [-2.1004602,57.1463167],
      [-2.1005788,57.1462827]
    ],
    "Address and vacancy from OSM; internal dividing line is provisional"
  ),
  buildingUnit(
    "building-314091322-unit-132",
    "osm-way-314091322",
    "TAG Heuer",
    "132 Union Street, AB10 1JJ",
    "filled",
    [
      [-2.1006974,57.1462486],
      [-2.1005908,57.1461426],
      [-2.1004707,57.1461754],
      [-2.1005788,57.1462827],
      [-2.1006974,57.1462486]
    ],
    "Occupant and address from OSM; internal dividing line is provisional"
  )
);

/* Two ground-floor units within OSM way 314091333. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-314091333-unit-118",
    "osm-way-314091333",
    "German Döner Kebab",
    "118 Union Street, AB10 1JJ",
    "filled",
    [
      [-2.1000871,57.1464455],
      [-2.1000216,57.1462978],
      [-2.0999324,57.1463221],
      [-2.0999835,57.1464577],
      [-2.1000871,57.1464455]
    ],
    "Occupant and address confirmed locally; western edge shared with 120 without overlap"
  ),
  buildingUnit(
    "building-314091333-unit-114-116",
    "osm-way-314091333",
    "Beaverbrooks",
    "114–116 Union Street, AB10 1JJ",
    "occupied",
    [
      [-2.0999835,57.1464577],
      [-2.0999324,57.1463221],
      [-2.0998432,57.1463464],
      [-2.0998372,57.1463493],
      [-2.0998344,57.1463523],
      [-2.0998324,57.1463548],
      [-2.0998316,57.1463583],
      [-2.0998318,57.1463621],
      [-2.0998328,57.1463657],
      [-2.0998799,57.1464699],
      [-2.0999835,57.1464577]
    ],
    "Occupant and address from OSM; OSM address typo corrected from 114–1166; internal dividing line is provisional"
  )
);

/* Two unequal occupied units within OSM way 314091334 (120–122 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-314091334-unit-120",
    "osm-way-314091334",
    "Arcadia",
    "120 Union Street",
    "filled",
    [[-2.1000871,57.1464455],[-2.10016865,57.14641125],[-2.100034361794,57.146294317297],[-2.1000216,57.1462978],[-2.1000871,57.1464455]],
    "Occupied unit confirmed locally; dividing edge parallel to the wall alongside 122A"
  ),
  buildingUnit(
    "building-314091334-unit-122",
    "osm-way-314091334",
    "Bargain Buys",
    "122 Union Street",
    "occupied",
    [[-2.10016865,57.14641125],[-2.1002502,57.146377],[-2.1001264,57.1462692],[-2.100034361794,57.146294317297],[-2.10016865,57.14641125]],
    "Occupied unit confirmed locally; shared edge parallel to the wall alongside 122A"
  )
);

/* Two side-by-side ground-floor units within OSM way 314091321. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-314091321-unit-128",
    "osm-way-314091321",
    "Ramsdens",
    "128 Union Street, AB10 1JJ",
    "occupied",
    [
      [-2.1004602,57.1463167],
      [-2.1003500,57.1463484],
      [-2.1002385,57.1462387],
      [-2.1003505,57.1462081],
      [-2.1004602,57.1463167]
    ],
    "Occupant and address from OSM; internal dividing line is provisional"
  ),
  buildingUnit(
    "building-314091321-unit-122a",
    "osm-way-314091321",
    "Adams Watch Specialist",
    "122A Union Street, AB10 1JJ",
    "occupied",
    [
      [-2.1003500,57.1463484],
      [-2.1002502,57.1463770],
      [-2.1001264,57.1462692],
      [-2.1002385,57.1462387],
      [-2.1003500,57.1463484]
    ],
    "Occupant and address from OSM; eastern edge shared with 122 without overlap"
  )
);

/* Three side-by-side retail units within OSM way 636141916 (46–50 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  ...frontageStrip(
    [-2.0963745,57.1473209],
    [-2.0967988,57.1472038],
    [-0.0000900,0.0000950],
    [
      unit("building-636141916-unit-46", "osm-way-636141916", "Entertainment Exchange", "46 Union Street", 1, "occupied", "Occupant and address confirmed locally; internal dividing line is provisional"),
      unit("building-636141916-unit-48", "osm-way-636141916", "William Hill", "48 Union Street", 1, "occupied", "Occupant and address confirmed locally; internal dividing line is provisional"),
      unit("building-636141916-unit-50", "osm-way-636141916", "Ladbrokes", "50 Union Street", 1, "occupied", "Occupant and address confirmed locally; internal dividing line is provisional")
    ]
  ).features
);

/* Two Justice Street units within the shared OSM way 404583404 envelope. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-404583404-unit-1-3",
    "osm-way-404583404",
    "Grade A Barbers",
    "1–3 Justice Street",
    "occupied",
    [
      [-2.0922566,57.1486599],
      [-2.0921653,57.1486861],
      [-2.0921767,57.1486994],
      [-2.0921233,57.1487168],
      [-2.09208985,57.14872785],
      [-2.0920083107,57.1486552166],
      [-2.0920436,57.1486426],
      [-2.0921915,57.1485911],
      [-2.0922566,57.1486599]
    ],
    "Occupant and address confirmed locally; internal dividing line is provisional"
  ),
  buildingUnit(
    "building-404583404-unit-7-9",
    "osm-way-404583404",
    "Castlegate Collectibles",
    "7–9 Justice Street",
    "occupied",
    [
      [-2.09208985,57.14872785],
      [-2.0920564,57.1487389],
      [-2.0919389,57.1487799],
      [-2.091892,57.1486968],
      [-2.0920083107,57.1486552166],
      [-2.09208985,57.14872785]
    ],
    "Occupant and address confirmed locally; internal dividing line is provisional"
  )
);

/* Two VSA retail units within OSM way 314142350 (36–38 Castle Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit(
    "building-314142350-unit-36",
    "osm-way-314142350",
    "VSA",
    "36 Castle Street",
    "occupied",
    [
      [-2.0924916,57.1480602],
      [-2.0924008,57.1479694],
      [-2.0923702,57.1479383],
      [-2.09231,57.1479558],
      [-2.0922705,57.1479442],
      [-2.0922483637,57.1479501934],
      [-2.0923869,57.1480906],
      [-2.0924916,57.1480602]
    ],
    "Occupant and address confirmed locally; internal dividing line is provisional"
  ),
  buildingUnit(
    "building-314142350-unit-38",
    "osm-way-314142350",
    "VSA",
    "38 Castle Street",
    "occupied",
    [
      [-2.0923869,57.1480906],
      [-2.0922483637,57.1479501934],
      [-2.0922199,57.1479579],
      [-2.0921786,57.1479476],
      [-2.0921264,57.1479628],
      [-2.0922822,57.148121],
      [-2.0923869,57.1480906]
    ],
    "Occupant and address confirmed locally; internal dividing line is provisional"
  )
);

/* Two retail units within OSM way 314020857 (39–45 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314020857-unit-39", "osm-way-314020857", "Annie Mo’s", "39 Union Street", "occupied", [[-2.0955347,57.1471013],[-2.0957086,57.1472841],[-2.0958392,57.1472471],[-2.0955645805,57.1469619522],[-2.0954364,57.1469976],[-2.0955347,57.1471013]], "Occupant and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-314020857-unit-43-45", "osm-way-314020857", "Tesco Express", "43–45 Union Street", "occupied", [[-2.0958392,57.1472471],[-2.0958594,57.1472413],[-2.0960325,57.1471923],[-2.0959137,57.1470663],[-2.0958754,57.1470258],[-2.0958188,57.1469657],[-2.095722,57.1468631],[-2.0955473,57.1469116],[-2.0955885,57.1469553],[-2.0955645805,57.1469619522],[-2.0958392,57.1472471]], "Occupant and address confirmed locally; internal dividing line is provisional")
);

/* Two retail units within OSM way 314020864 (51–53 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314020864-unit-51", "osm-way-314020864", "VPZ", "51 Union Street", "occupied", [[-2.0962823,57.1471215],[-2.0963065,57.1471146],[-2.09641555,57.14708375],[-2.09631145,57.14695605],[-2.0961928,57.1469896],[-2.0961932,57.1470033],[-2.0962297,57.1470413],[-2.0962104,57.1470468],[-2.0961766,57.1470563],[-2.096248,57.1471312],[-2.0962592,57.1471281],[-2.0962823,57.1471215]], "Occupant and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-314020864-unit-53", "osm-way-314020864", "Mister C’s", "53 Union Street", "filled", [[-2.09641555,57.14708375],[-2.0965488,57.147046],[-2.0964301,57.1469225],[-2.09631145,57.14695605],[-2.09641555,57.14708375]], "Occupant and address confirmed locally; filled since the project baseline")
);

/* Vacant 59 and occupied 61–63 within the broad OSM way 314021130 envelope. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314021130-unit-59", "osm-way-314021130", "Vacant (Was World Buffet)", "59 Union Street", "available", [[-2.0968696,57.1469551],[-2.09698643,57.146922],[-2.09688387,57.14681957],[-2.0967696,57.1468527],[-2.0968696,57.1469551]], "Vacancy and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-314021130-unit-61-63", "osm-way-314021130", "Sports Direct", "61–63 Union Street", "occupied", [[-2.09698643,57.146922],[-2.0972201,57.1468558],[-2.0971124,57.1467533],[-2.09688387,57.14681957],[-2.09698643,57.146922]], "Occupant and address confirmed locally; internal dividing line is provisional")
);

/* Two equal occupied halves within OSM way 314776718; Rolex is east and Jamieson & Carry is west. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314776718-unit-west", "osm-way-314776718", "Rolex", "140 Union Street", "filled", [[-2.10102755,57.14618085],[-2.1009058,57.14605725],[-2.1007596,57.1460994],[-2.1008805,57.1462229],[-2.10102755,57.14618085]], "Eastern unit; occupant and address confirmed locally; filled since the project baseline"),
  buildingUnit("building-314776718-unit-east", "osm-way-314776718", "Jamieson & Carry", "142 Union Street", "occupied", [[-2.1011746,57.1461388],[-2.101052,57.1460151],[-2.1009058,57.14605725],[-2.10102755,57.14618085],[-2.1011746,57.1461388]], "Western unit; occupant and address confirmed locally")
);

/* Two occupied retail units within OSM way 404572403. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404572403-unit-121", "osm-way-404572403", "Poundworld", "121 Union Street", "occupied", [[-2.0992713,57.1462871],[-2.0993622,57.1462618],[-2.0992522,57.14614695],[-2.0991615,57.1461726],[-2.0992713,57.1462871]], "Occupant and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-404572403-unit-123", "osm-way-404572403", "Taco Bell", "123 Union Street", "occupied", [[-2.0993622,57.1462618],[-2.0994531,57.1462365],[-2.0993429,57.1461213],[-2.0992522,57.14614695],[-2.0993622,57.1462618]], "Occupant and address confirmed locally; internal dividing line is provisional")
);

/* Two unequal occupied units at 125 Union Street within OSM way 404572401. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404572401-unit-125-union-worx", "osm-way-404572401", "Union Worx", "125 Union Street", "filled", [[-2.09953262,57.14621438],[-2.0995667,57.1462049],[-2.0994425,57.1460792],[-2.099411515946,57.146087781207],[-2.09953262,57.14621438]], "Narrower unit confirmed locally; filled since the project baseline"),
  buildingUnit("building-404572401-unit-125-cancer-research", "osm-way-404572401", "Cancer Research UK", "125 Union Street", "occupied", [[-2.0994531,57.1462365],[-2.09953262,57.14621438],[-2.099411515946,57.146087781207],[-2.0993479,57.1461054],[-2.0993333,57.1461094],[-2.0993429,57.1461213],[-2.0994531,57.1462365]], "Wider occupied unit confirmed locally; dividing edge aligned with the building side walls")
);

/* Two occupied retail units within OSM way 314113005 (82–86 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314113005-unit-82", "osm-way-314113005", "Pro Mobile", "82 Union Street", "occupied", [[-2.0981669,57.1469551],[-2.0982424,57.1469325],[-2.09813885,57.14682635],[-2.0980615,57.1468481],[-2.0981669,57.1469551]], "Occupant and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-314113005-unit-86", "osm-way-314113005", "Timpson", "86 Union Street", "occupied", [[-2.0982424,57.1469325],[-2.0983179,57.1469099],[-2.0982162,57.1468046],[-2.09813885,57.14682635],[-2.0982424,57.1469325]], "Occupant and address confirmed locally; internal dividing line is provisional")
);

/* Two vacant retail units within OSM way 314113010 (88–92 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-314113010-unit-88", "osm-way-314113010", "Vacant", "88 Union Street", "available", [[-2.0983179,57.1469099],[-2.098395,57.1468864],[-2.09829475,57.1467827],[-2.0982162,57.1468046],[-2.0983179,57.1469099]], "Vacancy and address confirmed locally; internal dividing line is provisional"),
  buildingUnit("building-314113010-unit-92", "osm-way-314113010", "Vacant", "92 Union Street", "available", [[-2.098395,57.1468864],[-2.0984721,57.1468629],[-2.0983733,57.1467608],[-2.09829475,57.1467827],[-2.098395,57.1468864]], "Vacancy and address confirmed locally; internal dividing line is provisional")
);

/* Two occupied units within OSM way 404969666 (164–166 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404969666-unit-164", "osm-way-404969666", "The Noodle Library", "164 Union Street", "filled", [[-2.10397555,57.14523995],[-2.1038894,57.1452638],[-2.1039805,57.1453596],[-2.1040415,57.1453422],[-2.1040771,57.1453788],[-2.10410001103,57.145372267261],[-2.10397555,57.14523995]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-404969666-unit-166", "osm-way-404969666", "The Fade Factory", "166 Union Street", "occupied", [[-2.1040617,57.1452161],[-2.10397555,57.14523995],[-2.10410001103,57.145372267261],[-2.1041511,57.1453577],[-2.1041342,57.1453404],[-2.1041708,57.1453302],[-2.1040617,57.1452161]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage")
);

/* Two occupied units within OSM way 643330736 (234–236 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-643330736-unit-234", "osm-way-643330736", "Pret A Manger", "234 Union Street", "occupied", [[-2.1072079,57.14434705],[-2.1069422,57.1444207],[-2.1072569,57.1447597],[-2.10752744203,57.144686357549],[-2.1072079,57.14434705]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage"),
  buildingUnit("building-643330736-unit-236", "osm-way-643330736", "British Heart Foundation Home Store", "236 Union Street", "occupied", [[-2.1077914,57.1446148],[-2.1076239,57.1444353],[-2.1075655,57.1443724],[-2.1074736,57.1442734],[-2.1072079,57.14434705],[-2.10752744203,57.144686357549],[-2.1077914,57.1446148]], "Occupant and address from OSM; internal dividing line is provisional and orthogonal to the street frontage")
);

/* Three occupied ground-floor units within OSM way 723877512 (250–252B Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-723877512-unit-250", "osm-way-723877512", "Grampian Credit Union", "250 Union Street", "occupied", [[-2.107699431526,57.144210168749],[-2.1076012,57.144238],[-2.1076935,57.1443376],[-2.1077522,57.1444012],[-2.1078181,57.1443833],[-2.1077939,57.1443571],[-2.1077664,57.1443274],[-2.1077811,57.1443234],[-2.1078087,57.1443531],[-2.107831146232,57.144346996972],[-2.107699431526,57.144210168749]], "Occupant and address confirmed locally; internal dividing lines are provisional and orthogonal to the street frontage"),
  buildingUnit("building-723877512-unit-252a", "osm-way-723877512", "Seventh Heaven", "252A Union Street", "filled", [[-2.107798033523,57.144182731254],[-2.1077625,57.1441923],[-2.107699431526,57.144210168749],[-2.107831146232,57.144346996972],[-2.107924983373,57.144321483083],[-2.107798033523,57.144182731254]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-723877512-unit-252b", "osm-way-723877512", "Poke Me Nails", "252B Union Street", "filled", [[-2.1080024,57.1442693],[-2.1078973,57.144156],[-2.107798033523,57.144182731254],[-2.107924983373,57.144321483083],[-2.1079617,57.1443115],[-2.1079386,57.1442867],[-2.1080024,57.1442693]], "Occupant confirmed locally; filled since the project baseline")
);

/* Two occupied units within OSM way 404937895 (432–434 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404937895-unit-432", "osm-way-404937895", "Gavin Bain & Co", "432 Union Street", "occupied", [[-2.1098835,57.1436523],[-2.110066409786,57.143662262276],[-2.1099545,57.14354185],[-2.1098611,57.1435674],[-2.1098835,57.1436523]], "Occupant and address confirmed locally; rear lobe removed and outline simplified while retaining the shared boundary with 434"),
  buildingUnit("building-404937895-unit-434", "osm-way-404937895", "Sirene", "434 Union Street", "occupied", [[-2.110066409786,57.143662262276],[-2.1101588,57.1436377],[-2.1101167,57.1435916],[-2.1100479,57.1435163],[-2.1099545,57.14354185],[-2.110066409786,57.143662262276]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage")
);

/* Two occupied units within OSM way 404937888 (450–456 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404937888-unit-450", "osm-way-404937888", "Collies Property", "450 Union Street", "occupied", [[-2.110544,57.1435322],[-2.110638605813,57.143506989701],[-2.11052225,57.14338615],[-2.1104321,57.1434117],[-2.110544,57.1435322]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage"),
  buildingUnit("building-404937888-unit-452-456", "osm-way-404937888", "Caffè Nero", "452–456 Union Street", "occupied", [[-2.110638605813,57.143506989701],[-2.11072,57.1434853],[-2.1106124,57.1433606],[-2.11052225,57.14338615],[-2.110638605813,57.143506989701]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage")
);

/* Three occupied units within OSM way 964078545 (472–476 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-964078545-unit-472", "osm-way-964078545", "Aberdeen Whisky Shop", "472 Union Street", "filled", [[-2.111303636948,57.143450642476],[-2.1112735,57.1434589],[-2.1112904,57.1434771],[-2.111320522835,57.143468846343],[-2.111374902699,57.143527470672],[-2.1113073,57.1435452],[-2.1112394,57.1434721],[-2.1110296,57.1432461],[-2.111096866667,57.143227733333],[-2.111303636948,57.143450642476]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-964078545-unit-474", "osm-way-964078545", "Cup", "474 Union Street", "filled", [[-2.111439970659,57.143506733685],[-2.1114335,57.1435085],[-2.111237,57.143297],[-2.1111961,57.1433082],[-2.1113235,57.1434452],[-2.111303636948,57.143450642476],[-2.111320522835,57.143468846343],[-2.1113404,57.1434634],[-2.111395,57.1435222],[-2.111374902699,57.143527470672],[-2.111096866667,57.143227733333],[-2.111164133333,57.143209366667],[-2.111439970659,57.143506733685]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-964078545-unit-476", "osm-way-964078545", "The Everest", "476 Union Street", "occupied", [[-2.1113087,57.1432742],[-2.1113626,57.1433323],[-2.1113883,57.1433599],[-2.1115075,57.1434883],[-2.111439970659,57.143506733685],[-2.111164133333,57.143209366667],[-2.1112314,57.143191],[-2.1113087,57.1432742]], "Occupant and address confirmed locally; internal dividing lines are provisional and orthogonal to the street frontage")
);

/* Two occupied units within OSM way 964078546 (478–484 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-964078546-unit-478", "osm-way-964078546", "Johnsons Dry Cleaning", "478 Union Street", "occupied", [[-2.11151554197,57.143301049563],[-2.1114723,57.1433125],[-2.1114905,57.1433327],[-2.1113883,57.1433599],[-2.1113626,57.1433323],[-2.1113255,57.143293],[-2.1113087,57.1432742],[-2.1112314,57.143191],[-2.1113374,57.1431631],[-2.111380776576,57.143151540424],[-2.11151554197,57.143301049563]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage"),
  buildingUnit("building-964078546-unit-484", "osm-way-964078546", "The Assessment Centre", "484 Union Street", "occupied", [[-2.1116615,57.1432624],[-2.11151554197,57.143301049563],[-2.111380776576,57.143151540424],[-2.1115299,57.1431118],[-2.1116615,57.1432624]], "Occupant and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage")
);

/* Vacant 496 and occupied 500 within OSM way 404938286. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404938286-unit-496", "osm-way-404938286", "Vacant", "496 Union Street", "not-on-market", [[-2.111955739518,57.143219153136],[-2.1118232,57.1432542],[-2.1116632,57.1430758],[-2.11179225,57.14304095],[-2.111955739518,57.143219153136]], "Vacancy and address confirmed locally; internal dividing line is provisional and orthogonal to the street frontage"),
  buildingUnit("building-404938286-unit-500", "osm-way-404938286", "Kaizen", "500 Union Street", "filled", [[-2.111997,57.1430905],[-2.1120825,57.1431857],[-2.1120017,57.143207],[-2.111955739518,57.143219153136],[-2.11179225,57.14304095],[-2.1119213,57.1430061],[-2.111997,57.1430905]], "Occupant confirmed locally; filled since the project baseline")
);

/* Three occupied units within OSM way 404938287 (504–510 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404938287-unit-504", "osm-way-404938287", "Durty Murphys", "504 Union Street", "filled", [[-2.111997,57.1430905],[-2.1119213,57.1430061],[-2.112007566667,57.142982833333],[-2.112237243649,57.143233499965],[-2.1121491,57.1432572],[-2.1120825,57.1431857],[-2.111997,57.1430905]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-404938287-unit-506-508", "osm-way-404938287", "Tulloch Recruitment", "506–508 Union Street", "occupied", [[-2.112007566667,57.142982833333],[-2.112093833333,57.142959566667],[-2.112219312639,57.143096513236],[-2.1121694,57.1431099],[-2.112201,57.1431445],[-2.112250976462,57.143131070742],[-2.112323613332,57.143210345728],[-2.1122696,57.1432248],[-2.112237243649,57.143233499965],[-2.112007566667,57.142982833333]], "Occupant and address confirmed locally; internal dividing lines are provisional and orthogonal to the street frontage"),
  buildingUnit("building-404938287-unit-510", "osm-way-404938287", "Duncan and Todd Opticians", "510 Union Street", "occupied", [[-2.112093833333,57.142959566667],[-2.1121801,57.1429363],[-2.1122569,57.1430206],[-2.1122036,57.1430349],[-2.1122518,57.1430878],[-2.112219312639,57.143096513236],[-2.112093833333,57.142959566667]], "Occupant confirmed locally; main 510 frontage retained and the smaller attached polygon deselected")
);

/* Three occupied units within OSM way 998896032 (514–520 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-998896032-unit-514", "osm-way-998896032", "Belmont Kebab", "514 Union Street", "occupied", [[-2.112263500626,57.142936978054],[-2.1121801,57.1429363],[-2.112262750626,57.143019853054],[-2.112263500626,57.142936978054]], "Occupant confirmed locally; small triangular frontage between 510 and Social Bite"),
  buildingUnit("building-998896032-unit-516", "osm-way-998896032", "Social Bite", "516 Union Street", "occupied", [[-2.112346901252,57.142937656108],[-2.112263500626,57.142936978054],[-2.112262750626,57.143019853054],[-2.112346151252,57.143020531108],[-2.112346901252,57.142937656108]], "Occupant confirmed locally; short rectangular frontage matching the 520 unit alignment"),
  buildingUnit("building-998896032-unit-520", "osm-way-998896032", "Adder Freelance Studio", "520 Union Street", "occupied", [[-2.1124303,57.1429384],[-2.112346901252,57.142937656108],[-2.112345901252,57.143048156108],[-2.1124293,57.1430489],[-2.1124303,57.1429384]], "Occupant confirmed locally; rectangular frontage aligned with Social Bite")
);

/* Two occupied units within OSM way 404613674 (181–181B Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404613674-unit-181", "osm-way-404613674", "MERKUR Slots", "181 Union Street", "occupied", [[-2.1027838,57.1452959],[-2.1028855,57.14526805],[-2.1027669,57.14513065],[-2.1026479,57.1451351],[-2.1027838,57.1452959]], "Occupant and address confirmed locally; top-right frontage between Coral and Game District"),
  buildingUnit("building-404613674-unit-181b", "osm-way-404613674", "Coral", "181B Union Street", "occupied", [[-2.1028855,57.14526805],[-2.1029872,57.1452402],[-2.1028859,57.1451262],[-2.1027669,57.14513065],[-2.1028855,57.14526805]], "Occupant and address confirmed locally; top-left frontage immediately adjacent to Ann Summers")
);

/* Vacant ground-floor unit at 207A within OSM way 404573530; William Hill is upstairs. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404573530-unit-207a", "osm-way-404573530", "Vacant", "207A Union Street", "available", [[-2.1039308,57.1448574],[-2.1039151,57.1448427],[-2.104049,57.1447922],[-2.1041681,57.1449168],[-2.1041491,57.1449222],[-2.1040236,57.1449578],[-2.1039285,57.1448581],[-2.1039308,57.1448574]], "Vacancy and address confirmed locally; full ground-floor envelope, with William Hill upstairs")
);

/* Two occupied side-by-side units within OSM way 404573532 (215–217 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404573532-unit-215", "osm-way-404573532", "Silvan Mobile Repair", "215 Union Street", "occupied", [[-2.1044631,57.144833],[-2.1043721,57.1448589],[-2.1042817,57.1447615],[-2.1043725,57.1447367],[-2.1044631,57.144833]], "Occupant and address confirmed locally; frontage beside The Grill"),
  buildingUnit("building-404573532-unit-217", "osm-way-404573532", "Dark Fade", "217 Union Street", "occupied", [[-2.1045541,57.1448071],[-2.1044631,57.144833],[-2.1043725,57.1447367],[-2.104463,57.1447119],[-2.1045541,57.1448071]], "Occupant and address confirmed locally; side-by-side frontage with Silvan Mobile Repair")
);

/* Three vacant side-by-side units within OSM way 1214395880 (221–227 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-1214395880-unit-221", "osm-way-1214395880", "Vacant", "221 Union Street", "not-on-market", [[-2.104731,57.1447591],[-2.1048498,57.1447259333],[-2.104682786303,57.144562136337],[-2.1045862,57.1446021],[-2.1045919,57.1446134],[-2.104731,57.1447591]], "Vacancy and address confirmed locally; internal boundary follows the frontage rhythm"),
  buildingUnit("building-1214395880-unit-225", "osm-way-1214395880", "Vacant", "225 Union Street", "not-on-market", [[-2.1048498,57.1447259333],[-2.1049686,57.1446927667],[-2.104796543151,57.144515068168],[-2.104682786303,57.144562136337],[-2.1048498,57.1447259333]], "Vacancy and address confirmed locally; internal boundary follows the frontage rhythm"),
  buildingUnit("building-1214395880-unit-227", "osm-way-1214395880", "Vacant", "227 Union Street", "not-on-market", [[-2.1049686,57.1446927667],[-2.1050874,57.1446596],[-2.1049103,57.144468],[-2.104796543151,57.144515068168],[-2.1049686,57.1446927667]], "Vacancy and address confirmed locally; internal boundary follows the frontage rhythm")
);

/* Vacant 261 and occupied 263 within OSM way 1214395888. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-1214395888-unit-261", "osm-way-1214395888", "Vacant", "261 Union Street", "available", [[-2.1056594,57.1441277],[-2.1059406,57.1444213],[-2.10605345,57.1443892],[-2.105757219635,57.144079906845],[-2.1056594,57.1441277]], "Vacancy and address confirmed locally; dividing edge aligned with the neighbouring unit boundaries"),
  buildingUnit("building-1214395888-unit-263", "osm-way-1214395888", "Gidi Grill", "263 Union Street", "occupied", [[-2.105757219635,57.144079906845],[-2.10605345,57.1443892],[-2.1061663,57.1443571],[-2.1060527,57.1442377],[-2.1059644,57.1441448],[-2.1058565,57.1440314],[-2.105757219635,57.144079906845]], "Occupant and address confirmed locally; dividing edge aligned with the neighbouring unit boundaries")
);

/* Union Street-facing front-half unit within Braemar House; rear/side uses face Bon-Accord Street. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-1214395890-unit-269", "osm-way-1214395890", "So NYC Bagels & Brew", "269 Union Street", "occupied", [[-2.1063368,57.1443106],[-2.106132,57.1440974],[-2.106299618936,57.144050019712],[-2.106389397032,57.144142501793],[-2.106504720347,57.144261414541],[-2.106371483187,57.144300782497],[-2.1063368,57.1443106]], "Occupant and address confirmed locally; footprint mirrors Trailfinders across their shared boundary")
);

/* Capitol ground-floor retail frontage: top-left and top-right cells of a conceptual 3×2 plan. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-1215644296-unit-441", "osm-way-1215644296", "Vacant", "441 Union Street", "available", [[-2.1101737,57.1432833],[-2.1100426333,57.1433191333],[-2.10976705,57.1430271],[-2.10990185,57.14299305],[-2.1101737,57.1432833]], "Vacant ground-floor retail unit; top-left cell on the Union Street frontage"),
  buildingUnit("building-1215644296-unit-429", "osm-way-1215644296", "Stevensons", "429 Union Street", "occupied", [[-2.1099115667,57.1433549667],[-2.1097805,57.1433908],[-2.10949745,57.1430952],[-2.10963225,57.14306115],[-2.1099115667,57.1433549667]], "Occupied ground-floor retail unit; top-right cell on the Union Street frontage")
);

/* Two occupied units within OSM way 404933596 (409–411 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404933596-unit-409", "osm-way-404933596", "Jungle Berry", "409 Union Street", "filled", [[-2.1091758,57.1435558],[-2.1092723,57.1435295],[-2.1090298,57.1432575],[-2.1089925,57.1432166],[-2.108952,57.1432274],[-2.1089485,57.1432236],[-2.1088874,57.1432399],[-2.1090314,57.1433975],[-2.1090797,57.1434506],[-2.1091758,57.1435558]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-404933596-unit-411", "osm-way-404933596", "Pure", "411 Union Street", "occupied", [[-2.1092723,57.1435295],[-2.1092027,57.1435485],[-2.1093688,57.1435032],[-2.1092157,57.143335],[-2.1091236,57.1433597],[-2.1090602,57.1432901],[-2.1090923,57.1432815],[-2.1090625,57.1432488],[-2.1090298,57.1432575],[-2.1092723,57.1435295]], "Occupant and address confirmed locally")
);

/* Union Street retail cell at the eastern end of OSM way 404933589; remaining 475–485 area is deselected. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404933589-unit-475", "osm-way-404933589", "Gamersheek", "475 Union Street", "filled", [[-2.1108436,57.1431002],[-2.1109322667,57.1430759333],[-2.1107621333,57.1428939],[-2.1106668,57.1429115],[-2.1108436,57.1431002]], "Occupant confirmed locally; filled since the project baseline; remaining parent area deselected")
);

/* Two occupied units within OSM way 404999673 (339–345 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404999673-unit-339", "osm-way-404999673", "Ba Bai Cafe", "339 Union Street", "filled", [[-2.1071644,57.1440863],[-2.107267,57.1440578],[-2.1071628,57.1439512],[-2.1070602,57.1439797],[-2.1071644,57.1440863]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-404999673-unit-345", "osm-way-404999673", "Social Monkey", "345 Union Street", "filled", [[-2.107267,57.1440578],[-2.1073808,57.1440263],[-2.1072766,57.1439197],[-2.1071628,57.1439512],[-2.107267,57.1440578]], "Occupant confirmed locally; filled since the project baseline")
);

/* Explicit 333 and 335 frontage polygons with parallel side boundaries. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-463771008-unit-333", "osm-way-463771008", "Soul", "333 Union Street", "occupied", [[-2.1069604,57.1440152],[-2.1067503,57.1438004],[-2.1068165,57.1437813],[-2.1067999,57.1437648],[-2.1068398,57.1437537],[-2.1067165,57.143638],[-2.1065022,57.1437296],[-2.1065317,57.1437624],[-2.1064217,57.1437935],[-2.1066629,57.1440503],[-2.1066356,57.1440574],[-2.1066849,57.1441109],[-2.1067819,57.1440844],[-2.1067674,57.144069],[-2.1069604,57.1440152]], "Occupant confirmed locally; boundary with 335 aligned to the block's unit edges"),
  buildingUnit("building-404999671-unit-335", "osm-way-404999671", "Vacant", "335 Union Street", "being-occupied", [[-2.1070586,57.1441156],[-2.1069604,57.1440152],[-2.1067503,57.1438004],[-2.1068165,57.1437813],[-2.106855,57.1437701],[-2.1070552,57.1439746],[-2.1071644,57.1440863],[-2.1070586,57.1441156]], "Being-filled vacancy confirmed locally; both side boundaries aligned to the block's unit edges")
);

/* Two occupied units within OSM way 404999676 (347–349 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404999676-unit-347", "osm-way-404999676", "8848", "347 Union Street", "occupied", [[-2.1073808,57.1440263],[-2.1074612,57.144004],[-2.1071185,57.143658],[-2.1070362,57.143682],[-2.1070645,57.1437099],[-2.1072766,57.1439197],[-2.1073808,57.1440263]], "Occupant and address confirmed locally"),
  buildingUnit("building-404999676-unit-349", "osm-way-404999676", "Signature Menswear", "349 Union Street", "occupied", [[-2.1074612,57.144004],[-2.1075416,57.1439817],[-2.1074494,57.143884],[-2.1073562,57.1437853],[-2.1072008,57.143634],[-2.1071185,57.143658],[-2.1074612,57.144004]], "Occupant and address confirmed locally")
);

/* Not-on-market 363 and occupied 365 within OSM way 404999670. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404999670-unit-363", "osm-way-404999670", "Vacant", "363 Union Street", "not-on-market", [[-2.1076858,57.1439417],[-2.10776765,57.14391905],[-2.10762305,57.14376955],[-2.107545,57.1437909],[-2.1076858,57.1439417]], "Vacancy and not-on-market status confirmed locally"),
  buildingUnit("building-404999670-unit-365", "osm-way-404999670", "The Howff", "365 Union Street", "occupied", [[-2.10776765,57.14391905],[-2.1078495,57.1438964],[-2.1077011,57.1437482],[-2.10762305,57.14376955],[-2.10776765,57.14391905]], "Occupant and address confirmed locally")
);

/* Two occupied 367 units within OSM way 404999677. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404999677-unit-367-wild-ginger", "osm-way-404999677", "Wild Ginger", "367 Union Street", "occupied", [[-2.107942781682,57.143870497341],[-2.1078689,57.143891],[-2.1078495,57.1438964],[-2.1077011,57.1437482],[-2.1073275,57.1433769],[-2.107410978538,57.143341241147],[-2.107942781682,57.143870497341]], "Occupant confirmed locally; equal-sized frontage with Six by Nico and an aligned dividing edge"),
  buildingUnit("building-404999677-unit-367-six-by-nico", "osm-way-404999677", "Six by Nico", "367 Union Street", "occupied", [[-2.1080238,57.143848],[-2.107942781682,57.143870497341],[-2.107410978538,57.143341241147],[-2.1074998,57.1433033],[-2.1076604,57.1434669],[-2.1080238,57.143848]], "Occupant confirmed locally; equal-sized frontage with Wild Ginger and an aligned dividing edge")
);

/* Two vacant units within OSM way 404999674 (373–377 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404999674-unit-373", "osm-way-404999674", "Vacant", "373 Union Street", "available", [[-2.1080238,57.143848],[-2.1081293,57.1438188],[-2.107760757035,57.143440790476],[-2.1076604,57.1434669],[-2.1080238,57.143848]], "Vacancy confirmed locally; dividing edge aligned with the building's outer unit edges"),
  buildingUnit("building-404999674-unit-377", "osm-way-404999674", "Vacant", "377 Union Street", "available", [[-2.1081293,57.1438188],[-2.1082441,57.143787],[-2.1081312,57.1436712],[-2.1078768,57.1434106],[-2.107760757035,57.143440790476],[-2.1081293,57.1438188]], "Vacancy confirmed locally; dividing edge aligned with the building's outer unit edges")
);

/* Two occupied units within OSM way 723880538 (395–399 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-723880538-unit-395", "osm-way-723880538", "Thistle Tavern", "395 Union Street", "filled", [[-2.1085401,57.1437048],[-2.10868205,57.1436655],[-2.10848645,57.1434526],[-2.1083408,57.1434926],[-2.1085401,57.1437048]], "Occupant confirmed locally; filled since the project baseline"),
  buildingUnit("building-723880538-unit-399", "osm-way-723880538", "Raeburn, Christie, Clerk & Wallace", "399 Union Street", "occupied", [[-2.10868205,57.1436655],[-2.1085715,57.1436962],[-2.108824,57.1436262],[-2.1086321,57.1434126],[-2.10848645,57.1434526],[-2.10868205,57.1436655]], "Occupant and address confirmed locally")
);

/* Occupied 187 and being-filled 189 within OSM way 1121522334. */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-1121522334-unit-187", "osm-way-1121522334", "Edinburgh Woollen Mill", "187 Union Street", "occupied", [[-2.1032165,57.1451774],[-2.1031125,57.145065],[-2.1030706,57.1450189],[-2.1030178,57.1449302],[-2.10310315,57.144922025],[-2.103312125,57.145151225],[-2.1032165,57.1451774]], "Occupant and address confirmed locally; wider unit above the narrow 189 boundary strip"),
  buildingUnit("building-1121522334-unit-189", "osm-way-1121522334", "Vacant", "189 Union Street", "being-occupied", [[-2.103312125,57.145151225],[-2.10310315,57.144922025],[-2.1031316,57.1449193],[-2.1032179,57.1450111],[-2.103344,57.1451425],[-2.103312125,57.145151225]], "Vacancy and address confirmed locally; narrow unit running alongside the British Red Cross boundary")
);

/* Two occupied units within OSM way 404613677 (191–195 Union Street). */
window.UNION_STREET_CENTRAL_FRONTAGES.features.push(
  buildingUnit("building-404613677-unit-191", "osm-way-404613677", "British Red Cross", "191 Union Street", "occupied", [[-2.103344,57.1451425],[-2.10346548955,57.14510928703],[-2.1032741,57.1449057],[-2.1031316,57.1449193],[-2.1032179,57.1450111],[-2.103344,57.1451425]], "Occupant and address confirmed locally; dividing line aligned with the neighbouring frontage boundaries"),
  buildingUnit("building-404613677-unit-195", "osm-way-404613677", "PDSA", "195 Union Street", "filled", [[-2.10346548955,57.14510928703],[-2.1035942,57.1450741],[-2.1034166,57.1448921],[-2.1032741,57.1449057],[-2.10346548955,57.14510928703]], "Occupant confirmed locally; filled since the project baseline")
);

function unit(frontageId,parentBuildingId,name,address,width,status,sourceNote){
  return { frontageId,parentBuildingId,name,address,width,status,sourceNote,verified:false };
}

function buildingUnit(frontageId,parentBuildingId,name,address,status,ring,sourceNote,upperFloorOccupant=""){
  return {
    type:"Feature",
    properties:{frontageId,parentBuildingId,name,address,status,sourceNote,upperFloorOccupant,verified:false},
    geometry:{type:"Polygon",coordinates:[ring]}
  };
}

function frontageStrip(eastEnd,westEnd,depthOffset,units){
  const total=units.reduce((sum,item)=>sum+item.width,0);
  let used=0;
  const pointAt=fraction=>[
    eastEnd[0]+(westEnd[0]-eastEnd[0])*fraction,
    eastEnd[1]+(westEnd[1]-eastEnd[1])*fraction
  ];
  return {
    type:"FeatureCollection",
    features:units.map((item,index)=>{
      const start=pointAt(used/total);
      used+=item.width;
      const end=pointAt(used/total);
      const innerEnd=[end[0]+depthOffset[0],end[1]+depthOffset[1]];
      const innerStart=[start[0]+depthOffset[0],start[1]+depthOffset[1]];
      return {
        type:"Feature",
        properties:{...item,displayOrder:index+1},
        geometry:{type:"Polygon",coordinates:[[start,end,innerEnd,innerStart,start]]}
      };
    })
  };
}
