import Link from 'next/link';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "EduOS",
      status: "In Progress",
      description: "Privacy-first AI education OS for African schools. Built on Linux with offline AI tutoring, age-adaptive UI, and zero telemetry.",
      tech: ["C", "Linux", "GTK4", "llama.cpp", "Wayland"],
      color: "from-purple-600 to-pink-600",
      icon: "🖥️",
    },
    {
      id: 2,
      title: "Crawl Music App",
      status: "Completed",
      description: "React Native music streaming app for the Nigerian market. Features audio playback, JWT auth, biometric unlock, and Cloudinary integration.",
      tech: ["React Native", "TypeScript", "Expo", "TrackPlayer"],
      color: "from-blue-600 to-cyan-600",
      icon: "🎵",
    },
    {
      id: 3,
      title: "Savingbox Vault",
      status: "Completed",
      description: "React Native fintech app with 6 savings products, biometric auth, KYC via Dojah, and Paystack integration.",
      tech: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
      color: "from-green-600 to-emerald-600",
      icon: "💰",
    },
    {
      id: 4,
      title: "Word Frequency Counter",
      status: "Completed",
      description: "Hash map-based word frequency analyzer in C. Uses djb2 hashing, collision chaining, and qsort. No external libraries.",
      tech: ["C", "Hash Maps", "Manual Memory Management"],
      color: "from-orange-600 to-red-600",
      icon: "📊",
    },
    {
      id: 5,
      title: "Dynamic Array",
      status: "Completed",
      description: "Resizable array implementation in C with a clean API — create, push, pop, get, set, free. Doubles capacity on growth.",
      tech: ["C", "Data Structures", "Heap Allocation"],
      color: "from-indigo-600 to-purple-600",
      icon: "📋",
    },
    {
      id: 6,
      title: "Linked List",
      status: "Completed",
      description: "Singly linked list in C from scratch — insert head/tail, delete, search, reverse in place, full memory cleanup.",
      tech: ["C", "Pointers", "Data Structures"],
      color: "from-red-600 to-pink-600",
      icon: "🔗",
    },
  ];

  return (
    <div className="bg-black text-white">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-black to-gray-900 flex items-center">
        <div className="container mx-auto px-4 py-32">
          <div className="max-w-3xl">
            <p className="text-yellow-600 font-semibold tracking-widest mb-4">WELCOME TO MY PORTFOLIO</p>
            <h1 className="text-6xl md:text-7xl font-black mb-6 leading-tight">
              David<br />
              <span className="text-yellow-600">Okocha</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Full-stack engineer building privacy-first solutions, music apps, fintech platforms, and low-level data structures. 
              Specializing in React Native, Next.js, C, and full-stack JavaScript.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="px-8 py-3 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
                View Projects
              </a>
              <a href="https://github.com/MonarchCorps" className="px-8 py-3 border-2 border-yellow-600 text-yellow-600 font-bold rounded-lg hover:bg-yellow-600 hover:text-black transition">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-black">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <p className="text-yellow-600 font-semibold tracking-widest mb-2">PORTFOLIO</p>
            <h2 className="text-5xl font-black">Featured Projects</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-yellow-600 transition-all duration-300"
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative p-8 z-10">
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-4xl">{project.icon}</span>
                    <span className="text-xs px-3 py-1 bg-yellow-600 text-black font-bold rounded-full">
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-600 transition">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-800 text-yellow-600 rounded border border-gray-700 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-yellow-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Skills Section */}
      <section className="py-20 bg-gray-950 border-t border-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-black text-yellow-600 mb-2">6</p>
              <p className="text-gray-400 font-semibold">Projects</p>
            </div>
            <div>
              <p className="text-4xl font-black text-yellow-600 mb-2">3+</p>
              <p className="text-gray-400 font-semibold">Languages</p>
            </div>
            <div>
              <p className="text-4xl font-black text-yellow-600 mb-2">5+</p>
              <p className="text-gray-400 font-semibold">Technologies</p>
            </div>
            <div>
              <p className="text-4xl font-black text-yellow-600 mb-2">∞</p>
              <p className="text-gray-400 font-semibold">Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* WDD 430 Section */}
      <section className="py-20 bg-black border-t border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-gray-900 rounded-xl p-12 border border-gray-800">
            <p className="text-yellow-600 font-semibold tracking-widest mb-4">ONGOING COURSE</p>
            <h3 className="text-3xl font-black mb-4">WDD 430: Full-Stack Development</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Completing BYU-Idaho's comprehensive full-stack development course. Building web applications with modern technologies, learning best practices in code review, API design, and team collaboration.
            </p>
            <div className="flex gap-4">
              <Link href="/week/1" className="px-6 py-2 bg-yellow-600 text-black font-bold rounded-lg hover:bg-yellow-500 transition">
                View Assignments
              </Link>
              <a
                href="https://byui-cse.github.io/wdd430-ww-course-v2/"
                className="px-6 py-2 border-2 border-yellow-600 text-yellow-600 font-bold rounded-lg hover:bg-yellow-600 hover:text-black transition"
              >
                Course Page
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
