import Navbar from "../../components/Navbar";
import Breadcrumb from "../../components/Breadcrumb";
import Footer from "../../components/Footer";
import BlogSection from "../../components/BlogSection";


export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2">
            <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Blog" }]} />
          </div>
          <BlogSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
