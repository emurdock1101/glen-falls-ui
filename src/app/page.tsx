import { getHomepagePosts } from "@/lib/wordpress";
import { HomeNewsColumns } from "@/components/HomeNewsColumns";

export default async function HomePage() {
  const posts = await getHomepagePosts();

  return (
    <main className="max-w-6xl mx-auto px-6 py-10">
      <HomeNewsColumns posts={posts} />
    </main>
  );
}
