// ---------------------------------------------
// Suchindex: wird automatisch von allen Seiten gefüllt
// ---------------------------------------------
const searchIndex = [];

// ---------------------------------------------
// Synonyme (werden automatisch ergänzt)
// ---------------------------------------------
const synonyms = {
    "potenz": ["exponent", "hochzahl", "zahl hoch", "quadratzahl"],
    "gleichung": ["term", "variable", "auflösen"],
    "winkel": ["grad", "geometrie", "dreieck"],
    "fläche": ["quadratmeter", "cm²", "rechteck", "dreieck"],
    "volumen": ["liter", "cm³", "körper", "zylinder"],
    "funktion": ["graph", "gerade", "parabel"],
    "proportional": ["verhältnis", "faktor", "steigung"]
};

// ---------------------------------------------
// Suchalgorithmus
// ---------------------------------------------
function search(term) {
    term = term.toLowerCase().trim();
    let terms = term.split(/\s+/);

    // Synonyme ergänzen
    let expandedTerms = new Set(terms);
    terms.forEach(t => {
        if (synonyms[t]) {
            synonyms[t].forEach(s => expandedTerms.add(s));
        }
    });

    let results = [];

    searchIndex.forEach(entry => {
        let score = 0;

        expandedTerms.forEach(t => {
            entry.keywords.forEach(k => {
                if (k.includes(t)) score += 1;
            });
        });

        if (score > 0) {
            results.push({ entry, score });
        }
    });

    // Treffer nach Relevanz sortieren
    results.sort((a, b) => b.score - a.score);

    return results.map(r => r.entry);
}
