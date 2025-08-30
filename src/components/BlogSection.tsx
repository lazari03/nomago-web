import React from "react";
import Image from "next/image";
import Link from "next/link";

export interface BlogPost {
  id: number;
  image: string;
  title: string;
  excerpt: string;
}

const mockPosts: BlogPost[] = [
  {
    id: 1,
    image: "/35.jpg",
    title: "How to Thrive as a Digital Nomad in Albania",
    excerpt: "Discover tips, resources, and the best places to work remotely in Albania as a digital nomad.",
  },
  {
    id: 2,
    image: "/14.jpg",
    title: "Top Coworking Spaces in Tirana",
    excerpt: "A curated list of the most popular coworking spaces in Tirana for productivity and networking.",
  },
];

export const BlogCell = ({ id, image, title, excerpt }: BlogPost) => (
  <Link href={`/blog/${id}`} className="bg-white rounded-2xl shadow-md overflow-hidden w-[32rem] min-w-[22rem] flex-shrink-0 hover:scale-105 transition-transform">
    <Image src={image} alt={title} width={512} height={320} className="w-full h-64 object-cover" priority />
    <div className="p-6">
      <h4 className="font-bold text-2xl mb-2 text-darkGray truncate">{title}</h4>
      <p className="text-gray text-base line-clamp-2">{excerpt}</p>
    </div>
  </Link>
);

const BlogSection = () => (
  <section className="py-20 px-4 bg-white">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-darkGray">Latest Blog Posts</h2>
      <div className="flex flex-wrap gap-6 justify-center">
        {mockPosts.map((post) => (
          <div className="w-full sm:w-[48%] md:w-[48%] lg:w-[48%] xl:w-[48%] flex justify-center" key={post.id}>
            <BlogCell {...post} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
