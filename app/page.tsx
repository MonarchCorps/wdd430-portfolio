import ProjectCard from '@/components/ProjectCard';

export default function Home() {
  const projects = [
    {
      id: 1,
      title: "EduOS",
      description: "Privacy-first AI education OS for African schools. Built on Linux with offline AI tutoring, age-adaptive UI, and zero telemetry.",
      tech: ["C", "Linux", "GTK4", "llama.cpp", "Wayland"],
      link: undefined,
    },
    {
      id: 2,
      title: "Crawl Music App",
      description: "React Native music streaming app for the Nigerian market. Features audio playback, JWT auth, biometric unlock, and Cloudinary integration.",
      tech: ["React Native", "TypeScript", "Expo", "TrackPlayer"],
      link: "https://github.com/MonarchCorps",
    },
    {
      id: 3,
      title: "Savingbox Vault",
      description: "React Native fintech app with 6 savings products, biometric auth, KYC via Dojah, and Paystack integration.",
      tech: ["React Native", "TypeScript", "Zustand", "TanStack Query"],
      link: "https://github.com/MonarchCorps",
    },
    {
      id: 4,
      title: "Word Frequency Counter",
      description: "Hash map-based word frequency analyzer in C. Uses djb2 hashing, collision chaining, and qsort. No external libraries.",
      tech: ["C", "Hash Maps", "Manual Memory Management"],
      link: undefined,
    },
    {
      id: 5,
      title: "Dynamic Array",
      description: "Resizable array implementation in C with a clean API — create, push, pop, get, set, free. Doubles capacity on growth.",
      tech: ["C", "Data Structures", "Heap Allocation"],
      link: undefined,
    },
    {
      id: 6,
      title: "Linked List",
      description: "Singly linked list in C from scratch — insert head/tail, delete, search, reverse in place, full memory cleanup.",
      tech: ["C", "Pointers", "Data Structures"],
      link: undefined,
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
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                technologies={project.tech}
                link={project.link}
              />
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
    </div>
  );
}
