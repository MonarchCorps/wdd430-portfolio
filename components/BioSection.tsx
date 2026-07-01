export default function BioSection() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">About Me</h2>
        <div className="text-gray-700 space-y-4">
          <p>
            Welcome to my WDD 430 portfolio! I'm a student in the Full-Stack Web Development program at BYU-Idaho, 
            learning the skills necessary to build modern, responsive web applications.
          </p>
          <p>
            Throughout this course, I'm gaining hands-on experience with:
          </p>
          <ul className="list-disc list-inside space-y-2 ml-4">
            <li>Full-stack JavaScript development</li>
            <li>Backend server development and API design</li>
            <li>Database design and management</li>
            <li>Frontend framework development</li>
            <li>Authentication and security best practices</li>
            <li>Code review and collaborative development</li>
          </ul>
          <p>
            This portfolio showcases my weekly assignments and projects. Each week builds upon the previous, 
            demonstrating my growth and understanding of web development concepts.
          </p>
        </div>
      </div>
    </section>
  );
}
