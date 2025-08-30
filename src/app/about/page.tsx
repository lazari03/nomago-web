import Navbar from "../../components/Navbar";
import Link from "next/link";
import Footer from "../../components/Footer";
import { ColorTokens } from "../../components/../theme/colors";

export default function AboutPage() {
  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center text-darkGray font-semibold">About</li>
      </ol>
    </nav>
  );
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb />
          <h1 className="text-4xl font-extrabold mb-6 text-darkGray">About Nomago</h1>
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-bold text-purple">Nomago</span> is a modern digital platform based in Tirana, Albania, dedicated to empowering digital nomads and remote workers. Our mission is to make it easy for you to discover, book, and enjoy the best accommodations, coworking spaces, and experiences across Albania and beyond.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Founded in the heart of Tirana, Nomago connects a vibrant community of travelers, freelancers, and entrepreneurs. We believe in the power of flexibility, community, and technology to unlock new opportunities for work and adventure.
          </p>
          <p className="text-lg text-gray-700 mb-8">
            Whether you’re looking for a cozy apartment, a lively coworking hub, or local insights, Nomago is your trusted companion for a seamless nomadic lifestyle in Albania. Join us and experience the future of remote work, right here in Tirana.
          </p>

          {/* Mission Statement */}
          <div className="bg-purple/10 rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold text-purple mb-2">Our Mission</h2>
            <p className="text-gray-700 text-lg">To empower digital nomads and remote workers by providing seamless access to the best places to live, work, and connect in Albania and beyond.</p>
          </div>

          {/* Team Section */}
          <div
            className="mb-8 rounded-[12px] p-6"
            style={{ background: ColorTokens.purple, color: 'white' }}
          >
            <h2 className="text-2xl font-bold mb-4">Meet the Team</h2>
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex flex-col items-center bg-white/10 rounded-lg shadow p-4 w-full sm:w-1/2">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold mb-2">A</div>
                <div className="font-semibold text-lg">Arben Hoxha</div>
                <div className="text-white/80 text-sm mb-1">Founder & CEO</div>
                <p className="text-white/90 text-center text-sm">Passionate about remote work, travel, and building communities for the future of work.</p>
              </div>
              <div className="flex flex-col items-center bg-white/10 rounded-lg shadow p-4 w-full sm:w-1/2">
                <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center text-white text-3xl font-bold mb-2">E</div>
                <div className="font-semibold text-lg">Elira Dervishi</div>
                <div className="text-white/80 text-sm mb-1">Community Manager</div>
                <p className="text-white/90 text-center text-sm">Connecting nomads, organizing events, and making everyone feel at home in Tirana.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-purple/10 rounded-xl p-6 text-center">
            <h2 className="text-2xl font-bold text-purple mb-2">Ready to Start Your Journey?</h2>
            <p className="text-gray-700 text-lg mb-4">Sign up for the Nomago app and join our growing community of digital nomads in Albania!</p>
            <a href="#get-app" className="inline-block" style={{ background: ColorTokens.purple, color: 'white', borderRadius: 8, padding: '0.75rem 2rem', fontWeight: 600, boxShadow: '0 2px 8px 0 rgba(80,0,120,0.08)' }}>
              Get the App
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
