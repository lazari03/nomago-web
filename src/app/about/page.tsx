import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import { ColorTokens } from "../../components/../theme/colors";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About" }]} />
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
