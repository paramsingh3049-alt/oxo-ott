// ==========================================================================
// OXO XTREAM Content Catalog Database
// Sports, Media, Entertainment • On-Demand. Experience. Originals.
// ==========================================================================

const OTT_DATA = {
  // Billboard Hero Slides
  heroSlides: [
    {
      id: "slide-1",
      category: "CINEMA",
      badge: "EXCLUSIVE 4K PREMIERE",
      title: "CYBER PULSE 2099",
      tagline: "The boundary between human and synthetic is about to shatter.",
      rating: "9.6/10",
      year: "2026",
      duration: "2h 38m",
      quality: "4K ULTRA HD",
      audio: "Dolby Atmos 7.1",
      age: "18+",
      genres: ["Sci-Fi", "Action", "Cyberpunk", "Thriller"],
      description: "In a dystopian metropolis ruled by rogue AI collectives, an augmented operative uncovers a conspiracy that threatens the last remaining enclave of free humanity.",
      backdrop: "https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=1920&q=80",
      poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      cast: ["Keanu Vance", "Elena Rostova", "Marcus Chen", "Sarah Jenkins"],
      director: "Denis Nolan",
      featured: true
    },
    {
      id: "slide-2",
      category: "SPORTS",
      badge: "LIVE & EXCLUSIVE",
      title: "CHAMPIONS DERBY: CLASH OF TITANS",
      tagline: "Madrid Knights vs Manchester Red Devils • Grand European Final",
      rating: "LIVE NOW",
      year: "2026 Season",
      duration: "90+ Extra Time",
      quality: "4K 60FPS HDR",
      audio: "Stadium Surround 5.1",
      age: "U/A",
      genres: ["Football", "UEFA Champions", "Live Match", "Tournament"],
      description: "Witness history in the making as Europe's two most dominant football giants go head-to-head for ultimate continental glory with live multi-angle tactical cameras.",
      backdrop: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=1920&q=80",
      poster: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      cast: ["Rodrigo Silva", "Liam Sterling", "Jude Bellingham", "Erling Vance"],
      director: "OXO Sports Live Crew",
      score: "MAD 2 - 1 MCI (78')",
      featured: true
    },
    {
      id: "slide-3",
      category: "ORIGINALS",
      badge: "OXO ORIGINAL BLOCKBUSTER",
      title: "RED HORIZON: MARTIAN LEGACY",
      tagline: "Survival was only the beginning. The conquest begins now.",
      rating: "9.4/10",
      year: "2026",
      duration: "Season 1 • 8 Episodes",
      quality: "IMAX Enhanced 4K",
      audio: "Spatial Audio",
      age: "16+",
      genres: ["Sci-Fi", "Drama", "Space Exploration", "Mystery"],
      description: "When the first generation of Martian colonists discover an alien obelisk buried beneath the polar ice caps, political tensions back on Earth threaten interplanetary war.",
      backdrop: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=1920&q=80",
      poster: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      cast: ["David Oyelowo", "Jessica Chastain", "Hiroyuki Sanada"],
      director: "Alexandre Aja",
      featured: true
    },
    {
      id: "slide-4",
      category: "SPORTS",
      badge: "GRAND PRIX LIVE",
      title: "F1 NIGHT RACING: MONACO GP",
      tagline: "Speed, precision, and zero margin for error under the neon lights.",
      rating: "HIGH OCTANE",
      year: "2026 Round 7",
      duration: "78 Laps • Live",
      quality: "4K UHD 120Hz",
      audio: "Cockpit Audio & Team Radio",
      age: "All Ages",
      genres: ["Motorsport", "Formula 1", "Night Race", "Live Telecast"],
      description: "Feel the rush with cockpit telemetry, uninterrupted team radio communications, and ultra-high-speed camera feeds from the world's most glamorous circuit.",
      backdrop: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1920&q=80",
      poster: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
      cast: ["Max Verstappen", "Charles Leclerc", "Lewis Hamilton", "Lando Norris"],
      director: "Formula 1 Global Broadcast",
      score: "LAP 42/78 • VER +1.42s LEC",
      featured: true
    },
    {
      id: "slide-5",
      category: "MEDIA",
      badge: "INVESTIGATIVE DOCUSERIES",
      title: "THE DEEP WEB CHRONICLES",
      tagline: "Behind the encrypted gates of digital shadows.",
      rating: "9.8/10",
      year: "2026",
      duration: "Limited Series • 6 Parts",
      quality: "4K HDR",
      audio: "Dolby Digital Plus",
      age: "18+",
      genres: ["Media", "Docuseries", "Cybercrime", "Investigation"],
      description: "An explosive 6-part investigative media series revealing the undercover intelligence operations, decentralized dark markets, and whistleblowers who dared to expose the truth.",
      backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80",
      poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackSeeTheWorld.mp4",
      trailerUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      cast: ["Edward Snowden", "Carole Cadwalladr", "Dr. Alistair Finch"],
      director: "Laura Poitras",
      featured: true
    }
  ],

  // Live Sports Category
  sports: [
    {
      id: "sp-1",
      title: "UEFA Champions League: Grand Final",
      tournament: "UEFA Champions League",
      status: "LIVE",
      timeOrScore: "78' | MAD 2 - 1 MCI",
      teams: "Real Madrid vs Man City",
      venue: "Wembley Stadium, London",
      category: "Sports",
      badge: "LIVE 4K",
      rating: "9.9/10",
      poster: "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?auto=format&fit=crop&w=1200&q=80",
      description: "High-stakes European final with instant replay, tactical cam, and live statistics overlay.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: "sp-2",
      title: "ICC World Cup: IND vs AUS Super 8",
      tournament: "ICC T20 World Cup",
      status: "TODAY 7:00 PM",
      timeOrScore: "Starts in 2h 15m",
      teams: "India vs Australia",
      venue: "Melbourne Cricket Ground",
      category: "Sports",
      badge: "UPCOMING",
      rating: "9.8/10",
      poster: "https://images.unsplash.com/photo-1531415074868-036b1c5f53ec?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
      description: "The ultimate clash in world cricket. 4K HDR live stream with dual commentary tracks.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: "sp-3",
      title: "Formula 1 Qatar Grand Prix: Qualifying",
      tournament: "Formula 1 World Championship",
      status: "LIVE",
      timeOrScore: "Q3 • 3 Mins Left",
      teams: "Red Bull vs Ferrari vs McLaren",
      venue: "Lusail International Circuit",
      category: "Sports",
      badge: "LIVE 60FPS",
      rating: "9.7/10",
      poster: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1200&q=80",
      description: "Pole position shootout. On-board car cameras, live telemetry and tire degradation stats.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: "sp-4",
      title: "NBA Finals Game 7: Celtics vs Lakers",
      tournament: "NBA Finals 2026",
      status: "TOMORROW",
      timeOrScore: "Tomorrow • 8:30 PM EST",
      teams: "Boston Celtics vs LA Lakers",
      venue: "TD Garden, Boston",
      category: "Sports",
      badge: "DECIDER",
      rating: "9.9/10",
      poster: "https://images.unsplash.com/photo-1546519638-68e109498ffc?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1519766304817-4f37bda74a29?auto=format&fit=crop&w=1200&q=80",
      description: "The greatest rivalry in basketball history settles the championship ring in a winner-take-all Game 7.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: "sp-5",
      title: "UFC 320: Championship Fight Night",
      tournament: "UFC World Title",
      status: "LIVE NOW",
      timeOrScore: "Main Card • Round 3",
      teams: "Pereira vs Adesanya III",
      venue: "T-Mobile Arena, Las Vegas",
      category: "Sports",
      badge: "PPV LIVE",
      rating: "9.8/10",
      poster: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1509563423944-b7710ff24a0d?auto=format&fit=crop&w=1200&q=80",
      description: "World light heavyweight title defense. Crystal clear sound and corner mic audio.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4"
    },
    {
      id: "sp-6",
      title: "Wimbledon 2026: Gentlemen's Singles Final",
      tournament: "Wimbledon Championship",
      status: "SUNDAY",
      timeOrScore: "Centre Court • 2:00 PM BST",
      teams: "Alcaraz vs Sinner",
      venue: "All England Lawn Tennis Club",
      category: "Sports",
      badge: "GRAND SLAM",
      rating: "9.9/10",
      poster: "https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1530915365347-e35b749a0381?auto=format&fit=crop&w=1200&q=80",
      description: "The two giants of the modern era battle for tennis supremacy on the hallowed grass.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyBlazes.mp4"
    }
  ],

  // Cinema & Blockbusters Category
  cinema: [
    {
      id: "mv-1",
      title: "Shadows of Elysium",
      category: "Cinema",
      badge: "BLOCKBUSTER",
      rating: "8.9/10",
      year: "2026",
      duration: "2h 24m",
      genres: ["Action", "Neo-Noir", "Crime"],
      quality: "4K UHD",
      poster: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1200&q=80",
      description: "An undercover detective infiltrates a syndicate operating an illicit memory extraction machine.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      cast: ["Christian Bale", "Florence Pugh", "Cillian Murphy"]
    },
    {
      id: "mv-2",
      title: "Interstellar Abyss",
      category: "Cinema",
      badge: "IMAX 4K",
      rating: "9.2/10",
      year: "2025",
      duration: "2h 45m",
      genres: ["Sci-Fi", "Adventure", "Drama"],
      quality: "Dolby Vision",
      poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
      description: "A deep space salvage crew encounters a derelict interstellar dreadnought trapped at the event horizon of a black hole.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      cast: ["Matthew McConaughey", "Jessica Chastain", "Anne Hathaway"]
    },
    {
      id: "mv-3",
      title: "Vengeance in Kyoto",
      category: "Cinema",
      badge: "TOP RATED",
      rating: "9.1/10",
      year: "2026",
      duration: "2h 10m",
      genres: ["Martial Arts", "Thriller", "Action"],
      quality: "4K HDR",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80",
      description: "A master swordsman comes out of retirement when an international syndicate encroaches upon ancient sanctuary lands.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      cast: ["Hiroyuki Sanada", "Andrew Koji", "Karen Fukuhara"]
    },
    {
      id: "mv-4",
      title: "The Quantum Enigma",
      category: "Cinema",
      badge: "PREMIERE",
      rating: "8.8/10",
      year: "2026",
      duration: "2h 05m",
      genres: ["Mystery", "Sci-Fi", "Psychological"],
      quality: "4K Ultra HD",
      poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      description: "Physicists accidentally create a localized temporal loop inside an underground particle accelerator.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      cast: ["Benedict Cumberbatch", "Rachel McAdams", "Chiwetel Ejiofor"]
    },
    {
      id: "mv-5",
      title: "Apex Predator: Sahara",
      category: "Cinema",
      badge: "ACTION HIT",
      rating: "8.7/10",
      year: "2026",
      duration: "1h 58m",
      genres: ["Action", "Survival", "Thriller"],
      quality: "4K UHD",
      poster: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1200&q=80",
      description: "Elite special forces stranded across the scorched dunes must fight off military mercenaries and nature's harshest elements.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      cast: ["Tom Hardy", "Charlize Theron", "Idris Elba"]
    },
    {
      id: "mv-6",
      title: "The Silent Orbit",
      category: "Cinema",
      badge: "CRITIC PICK",
      rating: "9.3/10",
      year: "2026",
      duration: "2h 18m",
      genres: ["Suspense", "Sci-Fi", "Drama"],
      quality: "IMAX 4K",
      poster: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
      description: "An isolated astronaut on a lunar listening station receives an anomalous encrypted frequency originating from deep space.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
      cast: ["Ryan Gosling", "Claire Foy", "Kyle Chandler"]
    }
  ],

  // Media, News & Docuseries Category
  media: [
    {
      id: "med-1",
      title: "OXO Global 24/7 Live Newsroom",
      category: "Media",
      badge: "LIVE BROADCAST",
      rating: "LIVE",
      year: "2026 Live",
      duration: "Continuous",
      genres: ["News", "World Affairs", "Live Feed", "Analysis"],
      quality: "1080p 60FPS",
      poster: "https://images.unsplash.com/photo-1585829365295-ab7cd400c167?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1495020689067-958852a7765e?auto=format&fit=crop&w=1200&q=80",
      description: "Live round-the-clock global news broadcasting covering geopolitics, financial markets, tech breakthroughs, and breaking events.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    },
    {
      id: "med-2",
      title: "Wild Earth: Secrets of Ocean Trenches",
      category: "Media",
      badge: "NATURAL HISTORY",
      rating: "9.9/10",
      year: "2026",
      duration: "Episode 4 • The Abyssal Plains",
      genres: ["Documentary", "Nature", "Oceanography", "4K HDR"],
      quality: "IMAX 4K",
      poster: "https://images.unsplash.com/photo-1682687220063-4742bd7fd538?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80",
      description: "Breathtaking submersible cinematography exploring hydrothermal vents and bioluminescent creatures 11,000 meters below sea level.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
    },
    {
      id: "med-3",
      title: "Silicon Singularity: The AI Dawn",
      category: "Media",
      badge: "TECH INSIGHT",
      rating: "9.5/10",
      year: "2026",
      duration: "4-Part Special",
      genres: ["Technology", "Future", "Artificial Intelligence", "Docuseries"],
      quality: "4K UHD",
      poster: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
      description: "Inside the quantum computing labs and supercluster data centers shaping artificial general intelligence.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4"
    },
    {
      id: "med-4",
      title: "The Soundwave: Global Music Festivals",
      category: "Media",
      badge: "ENTERTAINMENT",
      rating: "9.3/10",
      year: "2026",
      duration: "Live Concert Series",
      genres: ["Music", "Live Show", "Concert", "Culture"],
      quality: "Dolby Atmos 4K",
      poster: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      description: "Front-row virtual passes to electronic, rock, and orchestral music spectacles around the world.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4"
    }
  ],

  // Originals Category
  originals: [
    {
      id: "org-1",
      title: "Red Horizon: Martian Legacy",
      category: "Originals",
      badge: "OXO ORIGINAL",
      rating: "9.6/10",
      year: "2026",
      seasons: "Season 1 • 8 Episodes",
      genres: ["Sci-Fi", "Drama", "Originals"],
      quality: "4K HDR Dolby Vision",
      poster: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1200&q=80",
      description: "The flagship OXO space saga exploring the survival and revolution of the first human Martian outpost.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
      episodes: [
        {
          num: 1,
          title: "The Descent",
          duration: "58m",
          thumb: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=400&q=80",
          desc: "Colony Ship Ares touches down on the Olympus Mons basin under extreme dust storms."
        },
        {
          num: 2,
          title: "Signal in the Ice",
          duration: "52m",
          thumb: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=400&q=80",
          desc: "Sub-surface drills unearth an anomalous crystalline structure emitting rhythmic pulses."
        },
        {
          num: 3,
          title: "Earth Protocol",
          duration: "55m",
          thumb: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=400&q=80",
          desc: "Earth command imposes martial control as secrets regarding the monolith leak."
        },
        {
          num: 4,
          title: "The Martian Sovereign",
          duration: "61m",
          thumb: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=400&q=80",
          desc: "Colonists vote to declare biological independence amidst an interstellar embargo."
        }
      ]
    },
    {
      id: "org-2",
      title: "Code of Shadows",
      category: "Originals",
      badge: "OXO ORIGINAL",
      rating: "9.4/10",
      year: "2026",
      seasons: "Season 1 • 10 Episodes",
      genres: ["Cyber Thriller", "Espionage", "Originals"],
      quality: "4K UHD",
      poster: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
      description: "A rogue intelligence analyst unearths a global surveillance algorithm operating beyond governmental authority.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
      episodes: [
        {
          num: 1,
          title: "Zero-Day Exploit",
          duration: "49m",
          thumb: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=400&q=80",
          desc: "An encrypted handshake triggers a blackout across three central banking server networks."
        },
        {
          num: 2,
          title: "The Ghost Operative",
          duration: "53m",
          thumb: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
          desc: "Special Agent Elena tracks the anonymous cryptographer to an abandoned subway bunker."
        }
      ]
    },
    {
      id: "org-3",
      title: "Velocity: Born to Race",
      category: "Originals",
      badge: "DOCUSERIES ORIGINAL",
      rating: "9.7/10",
      year: "2026",
      seasons: "8 Episodes",
      genres: ["Sports Doc", "High Octane", "Originals"],
      quality: "4K 60FPS",
      poster: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1200&q=80",
      description: "Unprecedented behind-the-scenes access into the world's most dangerous motorsport championships.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
    },
    {
      id: "org-4",
      title: "The Last Alchemist",
      category: "Originals",
      badge: "FANTASY ORIGINAL",
      rating: "9.1/10",
      year: "2026",
      seasons: "Season 1 • 6 Episodes",
      genres: ["Fantasy", "Mystery", "Historical Fiction"],
      quality: "4K HDR",
      poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
      backdrop: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80",
      description: "In Renaissance Prague, a guild of secret alchemists races to protect the key to perpetual energy from imperial inquisitors.",
      videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4"
    }
  ],

  // Subscription Plans
  plans: [
    {
      id: "plan-free",
      name: "FREE PASS",
      priceMonthly: "$0",
      priceAnnual: "$0",
      period: "7-Day Trial",
      features: [
        "Access to Select Cinema Titles",
        "Standard High Definition (1080p)",
        "Watch on 1 Screen",
        "Ad-supported Streams"
      ],
      popular: false,
      cta: "Start Free Pass"
    },
    {
      id: "plan-sports",
      name: "SPORTS PASS",
      priceMonthly: "$8.99",
      priceAnnual: "$69.99",
      period: "/month",
      features: [
        "All Live Sports (Football, F1, Cricket, NBA)",
        "Multi-Cam Angles & Live Match Stats",
        "4K 60FPS Ultra-low Latency",
        "Watch on 2 Screens simultaneously",
        "DVR Replay & Match Highlights"
      ],
      popular: false,
      cta: "Get Sports Pass"
    },
    {
      id: "plan-vip",
      name: "XTREAM VIP ALL-ACCESS",
      priceMonthly: "$14.99",
      priceAnnual: "$119.99",
      period: "/month",
      badge: "MOST POPULAR",
      features: [
        "Everything in Sports + Cinema + Media",
        "Full OXO Originals 4K HDR Library",
        "4K Ultra HD + Dolby Atmos 7.1",
        "Download & Watch Offline on 4 Devices",
        "100% Ad-Free Experience",
        "Early Premiere Access"
      ],
      popular: true,
      cta: "Get Xtream VIP"
    },
    {
      id: "plan-annual",
      name: "ANNUAL ULTIMATE",
      priceMonthly: "$22.99",
      priceAnnual: "$179.99",
      period: "/month billed annually",
      badge: "SAVE 35%",
      features: [
        "All VIP Xtream Benefits for 12 Months",
        "Watch on up to 6 Screens simultaneously",
        "Exclusive Live PPV Events Included",
        "VIP Fan Club & Merchandise Perks",
        "Family Profiles with Parental Locks"
      ],
      popular: false,
      cta: "Subscribe Annual"
    }
  ]
};

// Helper function to find any item by ID across all catalog collections
function findMediaById(id) {
  const all = [
    ...OTT_DATA.heroSlides,
    ...OTT_DATA.sports,
    ...OTT_DATA.cinema,
    ...OTT_DATA.media,
    ...OTT_DATA.originals
  ];
  return all.find(item => item.id === id) || null;
}
