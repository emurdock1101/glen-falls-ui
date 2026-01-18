import { getHomepagePosts } from "@/lib/wordpress";
import { HomeNewsColumns } from "@/components/HomeNewsColumns";
import { MainFeaturedArticle } from "@/components/MainFeaturedArticle";

export default async function HomePage() {
  const posts = await getHomepagePosts();
  
  // Let's assume the first post is the featured one
  const featuredPost = posts[0];

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <MainFeaturedArticle post={featuredPost} />
        </div>
        <div className="lg:w-1/3">
          <HomeNewsColumns posts={posts} />
        </div>
      </div>
    </main>
  );
}
