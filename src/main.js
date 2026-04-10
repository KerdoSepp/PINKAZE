import "./style.css";

const band = {
  name: "PINKAZE",

  story: `NEON ECHO started as a group of dreamers who met through music.
  Late nights, shared melodies, and passion turned into a full K-pop band.`,

  members: [
    {
      name: "Ari",
      role: "Leader / Vocalist",
      description: "Strong vocals and charismatic presence.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Jin",
      role: "Main Dancer",
      description: "Explosive energy and precise moves.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Mika",
      role: "Rapper",
      description: "Fast flow and bold personality.",
      image: "https://via.placeholder.com/300",
    },
  ],

  songs: [
    { title: "Starlight Rush", year: "2025" },
    { title: "Electric Hearts", year: "2025" },
    { title: "Midnight Signal", year: "2026" },
  ],
};

// SET BASIC INFO
document.getElementById("band-name").textContent = band.name;
document.getElementById("story").textContent = band.story;
document.getElementById("footer-name").textContent = band.name;
document.getElementById("year").textContent = new Date().getFullYear();

// RENDER MEMBERS
const membersContainer = document.getElementById("members");

band.members.forEach((member) => {
  const card = document.createElement("div");
  card.className =
    "bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition";

  card.innerHTML = `
    <img src="${member.image}" alt="${member.name}">
    <div class="p-5">
      <h3 class="text-xl font-bold">${member.name}</h3>
      <p class="text-pink-400">${member.role}</p>
      <p class="mt-2 text-sm text-gray-300">${member.description}</p>
    </div>
  `;

  membersContainer.appendChild(card);
});

// RENDER SONGS
const songsContainer = document.getElementById("songs");

band.songs.forEach((song) => {
  const item = document.createElement("div");
  item.className =
    "p-4 border border-gray-700 rounded-lg flex justify-between";

  item.innerHTML = `
    <span>${song.title}</span>
    <span class="text-gray-400">${song.year}</span>
  `;

  songsContainer.appendChild(item);
});