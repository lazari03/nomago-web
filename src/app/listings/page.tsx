import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import ListingsSection from "../../components/ListingsSection";


export default function ListingsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="pt-2 pb-4">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Listings" }]} />
          </div>
          <ListingsSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
