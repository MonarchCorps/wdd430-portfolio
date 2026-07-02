interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <div className="group relative bg-gray-900 rounded-xl border border-gray-800 hover:border-yellow-600 transition-all duration-300 p-8">
      <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-yellow-600 transition">
        {title}
      </h3>

      <p className="text-gray-400 mb-6 text-sm leading-relaxed">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 bg-gray-800 text-yellow-600 rounded border border-gray-700 font-mono"
          >
            {tech}
          </span>
        ))}
      </div>

      {link && (
        <a
          href={link}
          className="text-yellow-600 font-semibold hover:text-yellow-500 transition"
        >
          View Project &rarr;
        </a>
      )}
    </div>
  );
}
