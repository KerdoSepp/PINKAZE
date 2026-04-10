const band = {
  name: "NEON ECHO",

  story: `NEON ECHO started as a group of dreamers who met through music.
  Late nights, shared melodies, and a passion for performance turned into a full band.
  Today, they create energetic K-pop tracks blending visuals and storytelling.`,

  members: [
    {
      name: "Ari",
      role: "Leader / Vocalist",
      description: "Strong vocals with a charismatic stage presence.",
      image: "https://via.placeholder.com/300",
    },
    {
      name: "Jin",
      role: "Main Dancer",
      description: "Precision dancer with explosive energy.",
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
    {
      title: "Starlight Rush",
      year: "2025",
    },
    {
      title: "Electric Hearts",
      year: "2025",
    },
    {
      title: "Midnight Signal",
      year: "2026",
    },
  ],
};

export default function App() {
  return (
    <div className="bg-black text-white font-sans">
      
      {/* HERO */}
      <section className="h-screen flex items-center justify-center text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-wide">
          {band.name}
        </h1>
      </section>

      {/* STORY */}
      <section className="min-h-screen px-6 md:px-20 py-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
        <p className="max-w-3xl text-lg leading-relaxed">
          {band.story}
        </p>
      </section>

      {/* MEMBERS */}
      <section className="min-h-screen px-6 md:px-20 py-20">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Members</h2>

        <div className="grid md:grid-cols-3 gap-10">
          {band.members.map((member, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <img src={member.image} alt={member.name} />
              <div className="p-5">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-pink-400">{member.role}</p>
                <p className="mt-2 text-sm text-gray-300">
                  {member.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SONGS */}
      <section className="min-h-screen px-6 md:px-20 py-20 bg-gray-900">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Songs</h2>

        <div className="space-y-4">
          {band.songs.map((song, index) => (
            <div
              key={index}
              className="p-4 border border-gray-700 rounded-lg flex justify-between"
            >
              <span>{song.title}</span>
              <span className="text-gray-400">{song.year}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-10 text-gray-500 text-sm">
        © {new Date().getFullYear()} {band.name}
      </footer>
    </div>
  );
}