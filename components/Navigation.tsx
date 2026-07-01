import Link from 'next/link';

export default function Navigation() {
  const weeks = [
    { number: 1, title: 'Team Code Review' },
    { number: 2, title: 'Web Server Setup' },
    { number: 3, title: 'Database Design' },
    { number: 4, title: 'API Development' },
    { number: 5, title: 'Frontend Integration' },
    { number: 6, title: 'Authentication' },
    { number: 7, title: 'Final Project' },
  ];

  return (
    <nav className="bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap gap-2 py-3 overflow-x-auto">
          <Link
            href="/"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition whitespace-nowrap"
          >
            Home
          </Link>
          {weeks.map((week) => (
            <Link
              key={week.number}
              href={`/week/${week.number}`}
              className="px-4 py-2 bg-white text-blue-600 border border-blue-300 rounded hover:bg-blue-50 transition whitespace-nowrap"
            >
              W{week.number}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
