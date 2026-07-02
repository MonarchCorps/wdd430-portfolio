interface ContactCardProps {
  email: string;
  location?: string;
}

export default function ContactCard({ email, location }: ContactCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-8">
      <h2 className="text-2xl font-bold text-yellow-600 mb-4">Get in Touch</h2>
      <p className="text-gray-300 mb-2">
        Email:{" "}
        <a href={`mailto:${email}`} className="text-yellow-600 hover:text-yellow-500 transition">
          {email}
        </a>
      </p>
      {location && <p className="text-gray-300">Location: {location}</p>}
    </div>
  );
}
