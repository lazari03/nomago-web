import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import { ColorTokens } from "../../components/../theme/colors";

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Contact" }]} />
          <div className="flex flex-col md:flex-row gap-10 items-start">
            {/* Left: Text */}
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold mb-6 text-darkGray">Contact Us</h1>
              <p className="text-lg text-gray-700 mb-4">Have a question, suggestion, or want to connect? Fill out the form and our team will get back to you soon.</p>
              <ul className="mb-8 text-gray-600 text-base list-disc list-inside">
                <li>We usually respond within 24 hours.</li>
                <li>For urgent matters, reach us at <a href="mailto:info@nomago.com" className="text-purple underline">hello@nomago.com</a>.</li>
                <li>Our office is based in Tirana, Albania.</li>
              </ul>
            </div>
            {/* Right: Form */}
            <form className="flex-1 bg-purple/10 rounded-2xl p-8 shadow-lg flex flex-col gap-5">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label htmlFor="name" className="block text-sm font-semibold text-purple mb-1">Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple/30 outline-none bg-white text-darkGray transition" />
                </div>
                <div className="flex-1">
                  <label htmlFor="email" className="block text-sm font-semibold text-purple mb-1">Email</label>
                  <input id="email" name="email" type="email" required placeholder="you@email.com" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple/30 outline-none bg-white text-darkGray transition" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-purple mb-1">Message</label>
                <textarea id="message" name="message" rows={5} required placeholder="How can we help you?" className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:ring-2 focus:ring-purple/30 outline-none bg-white text-darkGray transition resize-none" />
              </div>
              <button type="submit" className="mt-2 bg-purple text-white font-semibold rounded-lg px-8 py-3 shadow-lg hover:bg-purple/90 transition text-base" style={{ background: ColorTokens.purple }}>
                Send Message
              </button>
            </form>
          </div>
          {/* Extra info below row */}
          <div className="mt-12 text-center text-gray-700 text-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-purple mb-2">We&apos;re here to help!</h2>
            <p>
              Whether you&apos;re a digital nomad, a business, or just curious about Nomago, our team is ready to assist you. We value your feedback and look forward to connecting with you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
