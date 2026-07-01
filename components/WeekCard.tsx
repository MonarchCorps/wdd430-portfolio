import Link from 'next/link';

interface WeekCardProps {
  weekNumber: number;
  title: string;
  description: string;
}

export default function WeekCard({ weekNumber, title, description }: WeekCardProps) {
  return (
    <Link href={`/week/${weekNumber}`}>
      <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg hover:border-blue-400 transition cursor-pointer h-full">
        <div className="flex items-center gap-4 mb-3">
          <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">
            {weekNumber}
          </div>
          <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-600">{description}</p>
        <div className="mt-4 text-blue-600 font-semibold hover:text-blue-800">
          View Assignment →
        </div>
      </div>
    </Link>
  );
}
