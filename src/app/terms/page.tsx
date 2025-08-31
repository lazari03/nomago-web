import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-12 px-4 max-w-3xl mx-auto">
  <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Terms & Conditions" }]} />
        <h1 className="text-4xl font-extrabold mb-6 text-darkGray">Terms &amp; Conditions for Nomago App</h1>
        <div className="text-gray-700 space-y-6">
          <p>Welcome to <strong>Nomago</strong> (“we,” “our,” “us”). These Terms &amp; Conditions (“Terms”) govern your access and use of the Nomago mobile application, website, and related services (collectively, the “Platform”).<br />
          By creating an account or using our Platform, you agree to these Terms. If you do not agree, you must stop using the Platform.</p>

          <h2 className="font-bold text-lg mt-8 mb-2">1. Accounts</h2>
          <ul className="list-disc list-inside ml-4">
            <li>You are responsible for maintaining the confidentiality of your account and password.</li>
            <li>You agree to provide accurate, current, and complete information.</li>
            <li>We may suspend or terminate your account if we suspect fraudulent, abusive, or illegal activity.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">2. Services</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Nomago provides a platform for <strong>digital nomads</strong> to connect, share resources, and participate in community features.</li>
            <li>We are <strong>not liable</strong> for third-party services, accommodations, or providers listed on the Platform.</li>
            <li>Availability of services may vary by location and time.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">3. User Responsibilities</h2>
          <ul className="list-disc list-inside ml-4">
            <li>You agree not to:
              <ul className="list-disc ml-6">
                <li>Use the Platform for unlawful purposes.</li>
                <li>Post harmful, offensive, or misleading content.</li>
                <li>Interfere with the Platform’s security or functionality.</li>
              </ul>
            </li>
            <li>You are solely responsible for interactions with other users.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">4. Intellectual Property</h2>
          <ul className="list-disc list-inside ml-4">
            <li>All content, trademarks, and materials on the Platform are owned by Nomago or licensed to us.</li>
            <li>You may not copy, distribute, or create derivative works without prior written consent.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">5. Privacy &amp; Data Protection</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We handle personal data in accordance with our <a href="/privacy" className="text-purple underline">Privacy Policy</a> and applicable laws (including GDPR).</li>
            <li>By using the Platform, you consent to the collection and processing of your data.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">6. Termination</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We may suspend or terminate your access if you violate these Terms.</li>
            <li>You may stop using the Platform at any time and request account deletion.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">7. Limitation of Liability</h2>
          <ul className="list-disc list-inside ml-4">
            <li>The Platform is provided <strong>“as is”</strong> without warranties of any kind.</li>
            <li>To the maximum extent permitted by law, Nomago is not liable for any damages, losses, or disputes arising from use of the Platform or third-party services.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">8. Governing Law &amp; Disputes</h2>
          <ul className="list-disc list-inside ml-4">
            <li>These Terms are governed by the laws of <strong>Albania and the European Union (where applicable)</strong>.</li>
            <li>Any disputes will be resolved in the courts of <strong>Tirana, Albania</strong>.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">9. Changes to Terms</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We may update these Terms from time to time.</li>
            <li>Continued use of the Platform after changes means you accept the new Terms.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">10. Contact Us</h2>
          <p>For questions about these Terms, contact us at:<br />
            <span className="block mt-2">📧 <strong>info@nomago.al</strong></span>
            <span className="block">📍 <strong>Tirana, Albania</strong></span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
