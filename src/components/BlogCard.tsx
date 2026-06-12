import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { BlogPost } from "@/data/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card">
      <div className="blog-card-art"><span>{post.category}</span><strong>CL</strong></div>
      <div className="p-6">
        <p className="eyebrow">{post.category} · Actualizado 2026</p>
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Link href={`/blog/${post.slug}`}>Leer guía <ArrowUpRight size={16} /></Link>
      </div>
    </article>
  );
}
