import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-black text-white py-6 border-b-2 border-yellow-600 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div>
          <Link href="/" className="text-3xl font-black tracking-tight">
            DO<span className="text-yellow-600">.</span>
          </Link>
          <p className="text-xs text-yellow-600 font-semibold tracking-widest">FULLSTACK ENGINEER</p>
        </div>
        <nav className="flex gap-8">
          <Link href="/" className="text-sm font-semibold hover:text-yellow-600 transition">
            Home
          </Link>
          <a href="#projects" className="text-sm font-semibold hover:text-yellow-600 transition">
            Projects
          </a>
        </nav>
      </div>
    </header>
  );
}
