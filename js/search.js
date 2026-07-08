const topics = [
  {
    title: "Prozentrechnung",
    url: "klasse7/prozentrechnung.html",
    tags: ["prozent", "rabatt", "klasse 7", "klasse7"]
  },
  {
    title: "Bruchrechnung",
    url: "klasse7/bruchrechnung.html",
    tags: ["bruch", "brüche", "klasse 6", "klasse 7", "klasse7"]
  },
  {
    title: "Lineare Funktionen",
    url: "klasse8/lineare_funktionen.html",
    tags: ["funktion", "klasse 8", "klasse8"]
  },
  {
    title: "Hausaufgaben begleiten",
    url: "ratgeber/hausaufgaben-begleiten.html",
    tags: ["ratgeber", "hausaufgaben", "lernen"]
  },
  {
    title: "Klassenarbeiten vorbereiten",
    url: "ratgeber/klassenarbeiten-vorbereiten.html",
    tags: ["ratgeber", "prüfung", "vorbereiten"]
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const query = input.value.trim().toLowerCase();

    if (!query) {
      results.textContent = "Bitte gib ein Thema ein.";
      return;
    }

    const matches = topics.filter(topic =>
      topic.title.toLowerCase().includes(query) ||
      topic.tags.some(tag => tag.includes(query))
    );

    if (matches.length === 0) {
      results.textContent = "Kein passendes Thema gefunden.";
      return;
    }

    results.innerHTML = matches
      .map(m => `<p><a href="${m.url}">${m.title}</a></p>`)
      .join("");
  });
});
