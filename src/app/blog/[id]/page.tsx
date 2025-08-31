import Navbar from "../../../components/Navbar";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";
import Link from "next/link";

import Image from "next/image";
// Dummy blog post data for demonstration
const mockPosts = [
  {
    id: 1,
    title: "Si të fillosh jetën si nomad digjital",
    content: "Ky është një udhëzues i plotë për të filluar jetën si nomad digjital në Shqipëri dhe më gjerë. Zbulo këshilla, eksperienca dhe burime të dobishme për të bërë kalimin sa më të lehtë.",
    date: "2025-08-31",
    image: "/nomad1.jpg",
  },
  {
    id: 2,
    title: "Top 5 qytete për nomadët digjitalë në Ballkan",
    content: "Një përmbledhje e qyteteve më të mira për nomadët digjitalë në rajon, me avantazhet dhe sfidat e secilit destinacion.",
    date: "2025-08-15",
    image: "/nomad2.jpg",
  },
];

export default function BlogDetailPage({ params }: { params: { id: string } }) {
  const post = mockPosts.find((p) => p.id === Number(params.id));
  if (!post) return <div className="text-center py-20">Postimi nuk u gjet.</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="pt-2 pb-4">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: post.title }
            ]} />
          </div>
          <article className="bg-white rounded-3xl shadow-xl border border-lightGray p-0 mb-8 overflow-hidden">
            {post.image && (
              <Image
                src={post.image}
                alt={post.title}
                width={800}
                height={288}
                className="w-full h-72 object-cover"
                priority
              />
            )}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-darkGray mb-2">{post.title}</h1>
              <div className="text-sm text-gray-500 mb-6">{post.date}</div>
              <div className="text-base text-gray-700 leading-relaxed mb-6">{post.content}</div>
              <Link href="/blog" className="text-purple font-semibold hover:underline">&larr; Kthehu te blogu</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
