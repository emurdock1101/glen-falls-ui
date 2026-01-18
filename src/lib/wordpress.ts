const WP_BASE_DOMAIN = process.env.NEXT_PUBLIC_WP_BASE_URL!;
const WP_BASE_URL = `${WP_BASE_DOMAIN}/wp-json/wp/v2`;

export type WPPost = {
  id: number;
  slug: string;
  date: string;
  title: { rendered: string };
  excerpt: { rendered: string };
  content: { rendered: string };
};

export async function getPosts(): Promise<WPPost[]> {
  const res = await fetch(
    `${WP_BASE_URL}/posts?per_page=10&_embed`,
    {
      next: { revalidate: 60 }
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export async function getPostBySlug(
  slug: string
): Promise<WPPost | null> {
  const res = await fetch(
    `${WP_BASE_URL}/posts?slug=${encodeURIComponent(slug)}&_embed`,
    { cache: "no-store" } // critical for dynamic article pages
  );

  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }

  const posts = await res.json();
  return posts.length ? posts[0] : null;
}



export async function getHomepagePosts() {
  const res = await fetch(
    `${WP_BASE_URL}/posts?_embed&per_page=20`,
    { cache: "no-store" }
  );

  return res.json();
}
