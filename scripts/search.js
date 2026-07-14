console.log("SEARCH WIRD AUSGEFÜHRT");


// -------------------------------------------------------------
// GLOBALER SUCHINDEX
// -------------------------------------------------------------
// searchIndex ist in ../data/searchIndex.js deklariert


// -------------------------------------------------------------
// SYNONYME
// -------------------------------------------------------------
const synonyms = {
    "potenz": ["exponent", "hochzahl", "zahl hoch", "quadratzahl"],
    "gleichung": ["term", "variable", "auflösen"],
    "winkel": ["grad", "geometrie", "dreieck"],
    "fläche": ["quadratmeter", "cm²", "rechteck", "dreieck"],
    "volumen": ["liter", "cm³", "körper", "zylinder"],
    "funktion": ["graph", "gerade", "parabel"],
    "proportional": ["verhältnis", "faktor", "steigung"],
    "prozent": ["anteil", "rabatt", "steigerung"],
    "bruch": ["nenner", "zähler", "bruchrechnung"],
    "pythagoras": ["rechtwinklig", "hypotenuse", "kathete"]
};


// -------------------------------------------------------------
// LEVENSHTEIN-DISTANZ (Fuzzy Matching)
// -------------------------------------------------------------
function levenshtein(a, b) {
    if (!a || !b) return 99;
    const matrix = [];

    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
        for (let j = 1; j <= a.length; j++) {
            matrix[i][j] = Math.min(
                matrix[i - 1][j] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j - 1] + (a[j - 1] === b[i - 1] ? 0 : 1)
            );
        }
    }

    return matrix[b.length][a.length];
}


// -------------------------------------------------------------
// KEYWORD-VARIANTEN GENERIEREN
// -------------------------------------------------------------
function generateKeywordVariants(list) {
    const variants = new Set();

    list.forEach(word => {
        word = word.toLowerCase();

        variants.add(word);

        // Pluralformen
        if (word.endsWith("e")) variants.add(word + "n");
        if (word.endsWith("en")) variants.add(word.slice(0, -2));
        if (word.endsWith("er")) variants.add(word.slice(0, -2));

        // Stammformen
        variants.add(word.replace(/en$/, ""));
        variants.add(word.replace(/n$/, ""));
        variants.add(word.replace(/e$/, ""));

        // Bindestrichvarianten
        variants.add(word.replace(/-/g, ""));
        variants.add(word.replace(/-/g, " "));

        // Synonyme
        if (synonyms[word]) {
            synonyms[word].forEach(s => variants.add(s.toLowerCase()));
        }
    });

    return Array.from(variants);
}


// -------------------------------------------------------------
// SUCHALGORITHMUS
// -------------------------------------------------------------
function search(term) {
    term = term.toLowerCase().trim();
    if (!term) return [];

    const terms = term.split(/\s+/);
    const expandedTerms = new Set();

    terms.forEach(t => {
        expandedTerms.add(t);
        if (synonyms[t]) synonyms[t].forEach(s => expandedTerms.add(s));
    });

    const results = [];

    searchIndex.forEach(entry => {
        let score = 0;

        expandedTerms.forEach(t => {
            entry.keywords.forEach(k => {
                if (k.includes(t)) score += 3;
                else if (levenshtein(k, t) <= 2) score += 2;
            });
        });

        if (score > 0) {
            results.push({ entry, score });
        }
    });

    results.sort((a, b) => b.score - a.score);

    return results.map(r => r.entry);
}


// -------------------------------------------------------------
// DOM-AUSGABE: Navigation
// -------------------------------------------------------------
function renderNavResults(list) {
    const container = document.getElementById("navResults");
    if (!container) return;

    container.innerHTML = "";

    list.slice(0, 6).forEach(item => {
        const div = document.createElement("div");
        div.className = "search-result-item";
        div.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        container.appendChild(div);
    });
}


// -------------------------------------------------------------
// DOM-AUSGABE: QuickSearch
// -------------------------------------------------------------
function renderQuickResults(list) {
    const container = document.getElementById("quickResults");
    if (!container) return;

    container.innerHTML = "";

    list.slice(0, 10).forEach(item => {
        const div = document.createElement("div");
        div.className = "search-result-item";
        div.innerHTML = `<a href="${item.url}">${item.title}</a>`;
        container.appendChild(div);
    });
}


// -------------------------------------------------------------
// EVENT-LISTENER INITIALISIEREN
// -------------------------------------------------------------
function initializeSearchListeners() {
    const navSearch = document.getElementById("navSearch");
    const quickSearch = document.getElementById("quickSearch");

    if (navSearch) {
        navSearch.addEventListener("input", (e) => {
            const results = search(navSearch.value);
            renderNavResults(results);
            console.log("navSearch input:", navSearch.value, "Results:", results.length);
        });
    }

    if (quickSearch) {
        quickSearch.addEventListener("input", (e) => {
            const results = search(quickSearch.value);
            renderQuickResults(results);
            console.log("quickSearch input:", quickSearch.value, "Results:", results.length);
        });
    }

    console.log("✓ Search-Listener initialisiert. Index-Einträge:", searchIndex.length);
}


// Direkt beim Script-Laden versuchen zu initialisieren
if (document.readyState === "loading") {
    // Seite lädt noch
    document.addEventListener("DOMContentLoaded", initializeSearchListeners);
} else {
    // Seite ist bereits geladen (sehr selten, aber möglich)
    initializeSearchListeners();
}

// Zusätzlich: Nach einer kurzen Verzögerung nochmal versuchen
setTimeout(initializeSearchListeners, 50);
