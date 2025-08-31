"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { observer } from "mobx-react-lite";
import blogStore, { BlogArticle } from "../store/blogStore";


interface BlogCellProps {
  article: BlogArticle;
}

export const BlogCell = ({ article }: BlogCellProps) => {
  // Use the first paragraph as excerpt
  const excerpt = article.content?.find(
    (c) => c.type === "paragraph" && c.children && c.children[0]?.text
  )?.children[0]?.text?.slice(0, 120) || "";
  return (
    <Link href={`/blog/${article.id}`} className="bg-white rounded-2xl shadow-md overflow-hidden w-[32rem] min-w-[22rem] flex-shrink-0 hover:scale-105 transition-transform">
      <Image
        src={article.thumbnail?.formats?.small?.url || article.thumbnail?.url || "/35.jpg"}
        alt={article.title}
        width={512}
        height={320}
        className="w-full h-64 object-cover"
        priority
      />
      <div className="p-6">
        <h4 className="font-bold text-2xl mb-2 text-darkGray truncate">{article.title}</h4>
        <p className="text-gray text-base line-clamp-2">{excerpt}</p>
      </div>
    </Link>
  );
};


const BlogSection = observer(() => {
  useEffect(() => {
    const fetchArticles = async () => {
      blogStore.setLoading(true);
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/blogs?populate=thumbnail`, {
          headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`
          }
        });
        const data = await res.json();
        blogStore.setArticles(data.data || []);
      } catch (e) {
        blogStore.setError("Failed to load blog articles");
      } finally {
        blogStore.setLoading(false);
      }
    };
    fetchArticles();
  }, []);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-darkGray">Latest Blog Posts</h2>
        <div className="flex flex-wrap gap-6 justify-center">
          {blogStore.articles.map((article) => (
            <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] flex justify-center" key={article.id}>
              <BlogCell article={article} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default BlogSection;
