import "./style.css";

const band = {
  name: "PINKAZE",

  tours: [
    { 
      title: "Glitter Tour",
      year: "2026",
      description: "A high-energy spectacle drenched in neon lights, shimmering visuals, and explosive performances. The Glitter Tour transforms every stage into a sparkling dream where synth beats and electric vibes collide.",
      image: "src/assets/GlitterTour.jpg",
    },
    { 
      title: "Sun Tour",
      year: "2026",
      description: "A warm, atmospheric journey inspired by golden sunsets and endless summer nights. The Sun Tour blends emotional melodies with radiant visuals, creating an immersive and unforgettable experience.",
      image: "src/assets/SunTour.jpg",
    },
  ],
};

const button = document.querySelector('[data-collapse-toggle]')
const menu = document.getElementById('navbar-default')

button.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})

document.getElementById("footer-name").textContent = band.name;
document.getElementById("year").textContent = new Date().getFullYear();


const toursContainer = document.getElementById("tours");

band.tours.forEach((tour) => {
  const card = document.createElement("div");
  card.className =
    "bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition";

  card.innerHTML = `
    <img src="${tour.image}" alt="${tour.name}">
    <div class="p-5">
      <h3 class="text-xl font-bold">${tour.title}</h3>
      <p class="mt-2 text-sm text-gray-300">${tour.description}</p>
    </div>
  `;

  toursContainer.appendChild(card);
});