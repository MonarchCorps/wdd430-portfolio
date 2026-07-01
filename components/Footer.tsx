export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t-2 border-yellow-600 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
          <div>
            <p className="text-white font-bold text-lg mb-1">David Okocha</p>
            <p className="text-yellow-600 text-sm font-semibold">Full-Stack Engineer</p>
          </div>
          <div className="flex gap-6">
            <a href="https://github.com/MonarchCorps" className="text-yellow-600 hover:text-yellow-500 transition font-semibold">
              GitHub
            </a>
            <a href="https://x.com/davidokocha086" className="text-yellow-600 hover:text-yellow-500 transition font-semibold">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/david-okocha-019696380/" className="text-yellow-600 hover:text-yellow-500 transition font-semibold">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-500 text-sm">
            © {currentYear} David Okocha. Built with Next.js & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
