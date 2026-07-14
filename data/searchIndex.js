// Zentrale Suchindex-Datei mit ALLEN Seiten
// Diese Datei wird auf ALLEN Seiten geladen und enthält den globalen Suchindex

// Nur deklarieren, wenn noch nicht vorhanden
if (typeof searchIndex === 'undefined') {
    window.searchIndex = [
        {
            title: "Startseite",
            url: "index.html",
            keywords: ["startseite", "homepage", "mathematik", "elternportal", "klasse 7", "klasse 8", "prozentrechnung", "bruchrechnung", "lernen", "hilfe", "unterstützung", "startseiten", "mathemati[...]
        },
        {
            title: "Klasse 7 – Übersicht",
            url: "klasse7/index.html",
            keywords: ["klasse 7", "übersicht", "themen", "mathematik", "prozentrechnung", "bruchrechnung", "terme", "variablen", "gleichungen", "proportionalität", "geometrie", "klasse", "übersich[...]
        },
        {
            title: "Klasse 8 – Übersicht",
            url: "klasse8/index.html",
            keywords: ["klasse 8", "übersicht", "themen", "mathematik", "funktionen", "lineare funktionen", "quadratische funktionen", "potenzen", "potenzgesetze", "wahrscheinlichkeit", "pythagoras",[...]
        }
    ];
} else {
    // Falls searchIndex bereits existiert, Array-Einträge hinzufügen (falls neue hinzukommen)
    console.log("searchIndex existiert bereits mit", searchIndex.length, "Einträgen");
}
