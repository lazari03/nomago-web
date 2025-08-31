import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-12 px-4 max-w-3xl mx-auto">
  <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Privacy Policy" }]} />
        <h1 className="text-4xl font-extrabold mb-6 text-darkGray">Privacy Policy for Nomago App</h1>
        <div className="text-gray-700 space-y-6">
          <p>This Privacy Policy explains how <strong>Nomago</strong> (“we,” “our,” “us”) collects, uses, and protects your personal information when you use the Nomago mobile application, website, and related services (the “Platform”). By using the Platform, you consent to the practices described below.</p>

          <h2 className="font-bold text-lg mt-8 mb-2">1. Information We Collect</h2>
          <ul className="list-disc list-inside ml-4">
            <li><strong>Account Information:</strong> Name, surname, email address, and phone number when you create an account or make a booking.</li>
            <li><strong>Usage Data:</strong> Information about how you use the Platform, such as pages visited and features used.</li>
            <li><strong>Device Data:</strong> Technical information about your device and connection (browser, OS, IP address).</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">2. How We Use Your Information</h2>
          <ul className="list-disc list-inside ml-4">
            <li>To provide, maintain, and improve the Platform and its features.</li>
            <li>To process bookings and communicate with you about your account or reservations.</li>
            <li>To respond to your inquiries and provide customer support.</li>
            <li>To comply with legal obligations and protect the security of the Platform.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">3. Data Sharing &amp; Disclosure</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We do <strong>not</strong> sell your personal data to third parties.</li>
            <li>We may share your data with trusted service providers only as necessary to operate the Platform (e.g., hosting, email, payment processing).</li>
            <li>We may disclose information if required by law or to protect our rights and users’ safety.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">4. Data Security</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We use industry-standard security measures to protect your data from unauthorized access, loss, or misuse.</li>
            <li>Access to your data is limited to authorized personnel only.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">5. Your Rights</h2>
          <ul className="list-disc list-inside ml-4">
            <li>You have the right to access, correct, or request deletion of your personal data at any time.</li>
            <li>You may request a copy of your data or object to certain processing activities.</li>
            <li>To exercise your rights, contact us at <a href="mailto:info@nomago.al" className="text-purple underline">info@nomago.al</a>.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">6. Data Retention</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We retain your data only as long as necessary to provide our services and comply with legal obligations.</li>
            <li>You may request deletion of your account and data at any time.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">7. International &amp; Legal Compliance</h2>
          <ul className="list-disc list-inside ml-4">
            <li>Nomago complies with the General Data Protection Regulation (GDPR) and Albanian data protection laws.</li>
            <li>Your data may be processed or stored in the European Union or Albania.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">8. Changes to this Policy</h2>
          <ul className="list-disc list-inside ml-4">
            <li>We may update this Privacy Policy from time to time.</li>
            <li>Continued use of the Platform after changes means you accept the new Policy.</li>
          </ul>

          <h2 className="font-bold text-lg mt-8 mb-2">9. Contact Us</h2>
          <p>For questions about this Privacy Policy or your data, contact us at:<br />
            <span className="block mt-2">📧 <strong>info@nomago.al</strong></span>
            <span className="block">📍 <strong>Tirana, Albania</strong></span>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
