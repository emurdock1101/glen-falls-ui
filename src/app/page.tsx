import { getPosts } from "@/lib/wordpress";

export default async function HomePage() {
  const posts = await getPosts();

  return (
    <main className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>

      <div className="grid gap-8">
        {posts.map(post => (
          <article key={post.id}>
            <a
              href={`/article/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline"
            >
              {post.title.rendered}
            </a>

            <div
              className="mt-2 text-gray-700"
              dangerouslySetInnerHTML={{
                __html: post.excerpt.rendered
              }}
            />
          </article>
        ))}
      </div>
    </main>
  );
}
