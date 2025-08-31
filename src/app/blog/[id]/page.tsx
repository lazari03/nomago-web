"use client";

import React, { useEffect } from "react";
import Navbar from "../../../components/Navbar";
import Breadcrumb from "../../../components/Breadcrumb";
import Footer from "../../../components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { observer } from "mobx-react-lite";
import blogStore from "../../../store/blogStore";



const BlogDetailPage = observer(({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();

  // Unwrap params using React.use()
  const { id: idRaw } = React.use(params);
  const id = Number(idRaw);
  const [article, setArticle] = React.useState<any>(() => blogStore.getArticleById(id));
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  useEffect(() => {
    if (article) return; // Already loaded from store
    setLoading(true);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs/${id}?populate=thumbnail`, {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setArticle(data.data);
        setError(null);
      })
      .catch(() => setError("Postimi nuk u gjet."))
      .finally(() => setLoading(false));
  }, [id, article]);

  if (loading) return <div className="text-center py-20">Loading...</div>;
  if (error || !article) return <div className="text-center py-20">{error || "Postimi nuk u gjet."}</div>;

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="flex-1 pt-6 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="pt-2 pb-4">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Blog", href: "/blog" },
              { label: article.title }
            ]} />
          </div>
          <article className="bg-white rounded-3xl shadow-xl border border-lightGray p-0 mb-8 overflow-hidden">
            {article.thumbnail?.url && (
              <Image
                src={article.thumbnail.formats?.small?.url || article.thumbnail.url}
                alt={article.title}
                width={800}
                height={288}
                className="w-full h-72 object-cover"
                priority
              />
            )}
            <div className="p-8">
              <h1 className="text-3xl md:text-4xl font-extrabold text-darkGray mb-2">{article.title}</h1>
              <div className="text-sm text-gray-500 mb-6">{new Date(article.publishedAt).toLocaleDateString()}</div>
              <div className="text-base text-gray-700 leading-relaxed mb-6">
                {Array.isArray(article.content)
                  ? article.content.map((block: any, idx: number) =>
                      block.type === "paragraph" ? (
                        <p key={idx} className="mb-4">{block.children?.map((c: any, i: number) => c.text)}</p>
                      ) : null
                    )
                  : null}
              </div>
              <Link href="/blog" className="text-purple font-semibold hover:underline">&larr; Kthehu te blogu</Link>
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
});

export default BlogDetailPage;
