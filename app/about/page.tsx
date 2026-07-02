import BioSection from "@/components/BioSection";
import ContactCard from "@/components/ContactCard";

export default function AboutPage() {
  return (
    <div className="bg-black text-white">
      <section className="py-20 border-b border-gray-800">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-yellow-600 font-semibold tracking-widest mb-4">ABOUT</p>
          <h1 className="text-5xl font-black">About Me</h1>
        </div>
      </section>

      <BioSection />

      <section className="py-12 bg-black">
        <div className="container mx-auto px-4 max-w-3xl">
          <ContactCard email="davidokocha086@gmail.com" location="Nigeria" />
        </div>
      </section>
    </div>
  );
}
