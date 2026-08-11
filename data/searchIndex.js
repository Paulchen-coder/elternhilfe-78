// Zentrale Suchindex-Datei mit ALLEN Seiten
// Diese Datei wird auf ALLEN Seiten geladen und enthält den globalen Suchindex

window.searchIndex = [
    {
        title: "Startseite",
        url: "/elternhilfe-78/index.html",
        keywords: ["startseite", "homepage", "mathematik", "elternportal", "klasse 7", "klasse 8", "prozentrechnung", "bruchrechnung", "lernen", "hilfe", "unterstützung"]
    },
    {
        title: "Klasse 7 – Übersicht",
        url: "/elternhilfe-78/klasse7/index.html",
        keywords: ["klasse 7", "übersicht", "themen", "mathematik", "prozentrechnung", "bruchrechnung", "terme", "variablen", "gleichungen", "proportionalität", "geometrie"]
    },
    {
        title: "Klasse 8 – Übersicht",
        url: "/elternhilfe-78/klasse8/index.html",
        keywords: ["klasse 8", "übersicht", "themen", "mathematik", "funktionen", "lineare funktionen", "quadratische funktionen", "potenzen", "potenzgesetze", "wahrscheinlichkeit", "pythagoras"]
    },
    {
        title: "Bruchrechnung",
        url: "/elternhilfe-78/klasse7/bruchrechnung.html",
        keywords: ["bruch", "brüche", "bruchrechnung", "nenner", "zähler", "kürzen", "erweitern", "bruchteil", "bruchzahl", "bruchstrich"]
    },
    {
        title: "Geometrie Grundlagen",
        url: "/elternhilfe-78/klasse7/geometrie_grundlagen.html",
        keywords: ["winkel", "dreieck", "viereck", "geometrie", "zirkel", "lineal", "fläche", "umfang", "konstruktion", "rechteck", "quadrat"]
    },
    {
        title: "Lineare Gleichungen",
        url: "/elternhilfe-78/klasse7/lineare_gleichungen.html",
        keywords: ["gleichung", "gleichungen", "auflösen", "waage", "x finden", "term umformen", "klammern", "lineare gleichung", "term", "variable", "gleichgewicht", "auflösen", "umformen", "variable isolieren"]
    },
    {
        title: "Proportionalität",
        url: "/elternhilfe-78/klasse7/proportionalitaet.html",
        keywords: ["proportional", "proportionalität", "faktor", "verhältnis", "y=kx", "steigung", "wertetabelle", "gerade", "ursprung", "antiproportional"]
    },
    {
        title: "Prozentrechnung",
        url: "/elternhilfe-78/klasse7/prozentrechnung.html",
        keywords: ["prozent", "prozente", "prozentrechnung", "anteil", "grundwert", "prozentwert", "prozentsatz", "rabatt", "mehrwert", "verminderung", "steigerung", "senkung"]
    },
    {
        title: "Terme & Variablen",
        url: "/elternhilfe-78/klasse7/terme_variablen.html",
        keywords: ["term", "variable", "ausklammern", "vereinfachen", "gleichartige terme", "algebra", "x", "y", "platzhalter", "ausdrücke", "rechnen mit buchstaben"]
    },
    {
        title: "Körper & Volumen",
        url: "/elternhilfe-78/klasse8/koerper_volumen.html",
        keywords: ["volumen", "körper", "würfel", "quader", "zylinder", "kugel", "grundfläche", "höhe", "cm³", "liter"]
    },
    {
        title: "Lineare Funktionen",
        url: "/elternhilfe-78/klasse8/lineare_funktionen.html",
        keywords: ["funktion", "gerade", "steigung", "y=mx+b", "graph", "koordinatensystem", "schnittpunkt", "wertetabelle"]
    },
    {
        title: "Potenzgesetze",
        url: "/elternhilfe-78/klasse8/potenzgesetze.html",
        keywords:generateKeywordVariants( ["potenz", "potenzen", "potenzgesetz", "potenzgesetze", "exponent", "basis", "hochzahl", "a^m", "a^n", "multiplizieren", "dividieren", "potenzieren", "potenzierung", "produkt", "quotient", "regel","gesetz"]
    },
    {
        title: "Pythagoras",
        url: "/elternhilfe-78/klasse8/pythagoras.html",
        keywords: generateKeywordVariants(["hypotenuse", "pythagoras", "kathete", "rechtwinklig", "a²+b²=c²", "dreieck", "geometrie", "hypotenuse", "länge berechnen"]
    },
    {
        title: "Quadratische Funktionen",
        url: "/elternhilfe-78/klasse8/quadratische_funktionen.html",
        keywords: generateKeywordVariants(["parabel", "scheitelpunkt", "a", "b", "c", "mitternachtsformel", "pq-formel", "nullstellen", "graph", "quadratisch"]
    },
    {
        title: "Wahrscheinlichkeit",
        url: "/elternhilfe-78/klasse8/wahrscheinlichkeit.html",
        keywords: generateKeywordVariants( ["wahrscheinlichkeit", "zufall", "würfel", "karten", "baumdiagramm", "günstige fälle", "mögliche fälle", "stochastik"]
    },
    {
        title: "Hausaufgaben begleiten",
        url: "/elternhilfe-78/ratgeber/hausaufgaben-begleiten.html",
        keywords: generateKeywordVariants(["ratgeber", "hilfe", "eltern", "lernen", "mathe", "hausaufgaben", "klassenarbeiten", "unterstützung", "motivation", "kind", "begleiten"]
    },
    {
        title: "RATGEBER",
        url: "/elternhilfe-78/ratgeber/index.html",
        keywords: generateKeywordVariants(["ratgeber", "hilfe", "eltern", "lernen", "mathe", "hausaufgaben", "klassenarbeiten", "unterstützung", "motivation", "kind", "begleiten"]
    }
];

console.log("✓ searchIndex geladen:", window.searchIndex.length, "Einträge");
