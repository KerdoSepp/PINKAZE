import "./style.css";

const band = {
  name: "PINKAZE",

  story: `The group debuted on March 15, 2023, with the conceptual EP Glitter after Tears. The overarching narrative of PINKAZE is a journey through a metaphorical galaxy, where the members explore different facets of emotion and growth. Each comeback represents a new celestial phase—moving from the optimism of youth ("New Moon") to the intensity of success ("Full Moon"), and the reflection that follows.

Their signature style blends high-fashion aesthetic with cinematic music videos that rely heavily on dramatic lighting and cosmic imagery.`,

  members: [
    {
      name: "SEOYOON (서윤)",
      role: "Leader, Lead Vocalist, Main Dancer",
      description: "Seoyoon trained for seven years, the longest in the group. She was originally set to debut as a solo artist, but her natural leadership skills and all-rounder talent made her the perfect anchor for PINKAZE. She is the anchor and mother of the group, known for her sharp choreography and reassuring stage presence.",
      image: "public/Seoyoon.jpg",
    },
    {
      name: "JUNA (준아)",
      role: "Main Vocalist",
      description: "Juna was a renowned underground ballad singer before being scouted by Aethel Ent. Her powerhouse vocals are the foundation of PINKAZE's sound, allowing them to tackle complex harmonies. While she appears shy off-stage, she transforms completely when she sings.",
      image: "public/Juna.jpg",
    },
    {
      name: "MINA (미나)",
      role: "Main Dancer, Sub Vocalist, Visual",
      description: "Mina, born in Osaka, was a modern ballet dancer for 11 years before transitioning to K-pop. Her fluid, elegant movement contrasts perfectly with Seoyoon's powerful style, giving PINKAZE performance versatility. She is fluent in Japanese and Korean, acting as the group's bridge for Japanese promotions.",
      image: "public/Mina.jpg",
    },
        {
      name: "HARU (하루)",
      role: "Main Rapper, Sub Vocalist",
      description: "Born in Los Angeles, Haru moved to Seoul at 16. She is known for her deep, distinctive vocal tone and agile flow. Haru writes many of her own rap verses, often incorporating English and Korean wordplay. She brings a laid-back, cool energy that balances the group’s intense vocals.",
      image: "public/Haru.jpg",
    },
        {
      name: "HAEUN (하은)",
      role: "Sub Vocalist, Lead Dancer, Maknae (Youngest)",
      description: "Haeun joined Aethel Entertainment when she was only 13. She has a bright, contagious energy and is known for her impressive expressions on stage. Her growth narrative is a major draw for fans. She is the member who most easily embodies the group's bright concept.",
      image: "public/Haeun.jpg",
    },
  ],

  songs: [
    { title: "Glitter after Tears", year: "2026" , link:"https://www.youtube.com/embed/xA5n5-dJnaE"},
    { title: "Touchin' the Sun", year: "2026" , link:"https://www.youtube.com/embed/sdPpJJBsD0c"},
  ],
};

const button = document.querySelector('[data-collapse-toggle]')
const menu = document.getElementById('navbar-default')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

document.getElementById("band-name").textContent = band.name;
document.getElementById("story").textContent = band.story;
document.getElementById("footer-name").textContent = band.name;
document.getElementById("year").textContent = new Date().getFullYear();

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

const songsContainer = document.getElementById("songs");

band.songs.forEach((song) => {
  const item = document.createElement("div");
  item.className =
    "p-4 border border-gray-700 rounded-lg flex justify-between";

  item.innerHTML = `
  <iframe 
    class="aspect-video w-full rounded-lg"
    src="${song.link}"
    frameborder="0"
    allowfullscreen>
  </iframe>
  `;




  songsContainer.appendChild(item);
});