import Link from 'next/link';
import { notFound } from 'next/navigation';

async function getWeekDetails(week: string) {
  const weekDetails: Record<string, { title: string; description: string }> = {
    '1': {
      title: 'W01: Team Code Review',
      description: 'Setting up team collaboration and learning code review practices.',
    },
    '2': {
      title: 'W02: Web Server Setup',
      description: 'Building a basic web server and understanding HTTP protocols.',
    },
    '3': {
      title: 'W03: Database Design',
      description: 'Designing and implementing database schemas and queries.',
    },
    '4': {
      title: 'W04: API Development',
      description: 'Creating RESTful APIs and handling HTTP requests/responses.',
    },
    '5': {
      title: 'W05: Frontend Integration',
      description: 'Connecting frontend applications with backend APIs.',
    },
    '6': {
      title: 'W06: Authentication',
      description: 'Implementing user authentication and authorization systems.',
    },
  };

  return weekDetails[week] || null;
}

interface WeekPageProps {
  params: Promise<{
    week: string;
  }>;
}

export default async function WeekPage({ params }: WeekPageProps) {
  const { week } = await params;
  const weekInfo = await getWeekDetails(week);

  if (!weekInfo) {
    notFound();
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <Link href="/" className="text-yellow-600 hover:text-yellow-500 font-semibold mb-8 inline-block">
          ← Back to Home
        </Link>

        <article>
          <h1 className="text-5xl font-black text-white mb-4">{weekInfo.title}</h1>
          <p className="text-xl text-gray-300 mb-8">{weekInfo.description}</p>

          <div className="space-y-8">
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">Assignment Details</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                This week's assignment focuses on the concepts outlined above. Check the course materials for detailed requirements and submission guidelines.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-yellow-600 mb-6">Key Topics</h2>
              <ul className="space-y-3">
                <li className="flex gap-3 text-gray-300">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Understanding core web development concepts</span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Applying best practices in code</span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Collaborating with team members</span>
                </li>
                <li className="flex gap-3 text-gray-300">
                  <span className="text-yellow-600 font-bold">→</span>
                  <span>Submitting quality work</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-yellow-600/10 to-transparent border border-yellow-600/30 rounded-lg p-8">
              <h2 className="text-3xl font-bold text-yellow-600 mb-4">Resources</h2>
              <p className="text-gray-300 mb-6">
                For more information about this assignment, visit the course page and explore the detailed requirements and guidelines.
              </p>
              <a
                href="https://byui-cse.github.io/wdd430-ww-course-v2/"
                className="inline-block bg-yellow-600 text-black px-6 py-3 rounded-lg hover:bg-yellow-500 transition font-bold"
              >
                View Course Materials
              </a>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
