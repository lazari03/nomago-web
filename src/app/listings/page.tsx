import Navbar from "../../components/Navbar";
import Link from "next/link";
import ListingsSection from "../../components/ListingsSection";

  const Breadcrumb = () => (
    <nav className="text-sm text-gray-500 mb-6" aria-label="Breadcrumb">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="hover:underline">Home</Link>
          <span className="mx-2">/</span>
        </li>
        <li className="flex items-center text-darkGray font-semibold">Listings</li>
      </ol>
    </nav>
  );

export default function ListingsPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white pt-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-2">
            <Breadcrumb />
          </div>
          <ListingsSection />
        </div>
      </main>
    </>
  );
}
