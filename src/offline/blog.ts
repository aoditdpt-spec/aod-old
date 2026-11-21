import { samplePosts } from "@/content/blog";
import type { Post } from "@/lib/admin-store";
import { offline } from "@/offline/result";

// The blog shows the sample posts in src/content/blog.ts, marked `sample`.

export type PublicPost = Post & { sample?: boolean };

const isLive = (p: Post) => p.status === "published" && Boolean(p.publishedAt) && p.publishedAt! <= new Date().toISOString();

export async function publishedPosts(): Promise<PublicPost[]> {
  return samplePosts.filter(isLive).map((p) => ({ ...p, sample: true }));
}

export async function postBySlug(slug: string): Promise<PublicPost | null> {
  const p = samplePosts.find((x) => x.slug === slug && isLive(x));
  return p ? { ...p, sample: true } : null;
}

// Photo uploads for the admin's blog editor: there is no storage, so the editor keeps photos in the browser.
export async function startBlogUpload(_name: string, _type: string, _size: number): Promise<({ ok: true } & { path: string; token: string; url: string }) | { ok: false; error: string }> {
  return offline;
}
