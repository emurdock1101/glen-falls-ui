import { getHomepagePosts, getLatestFrontPagePdf } from "@/lib/wordpress";
import { HomeNewsColumns } from "@/components/HomeNewsColumns";
import { MainFeaturedArticle } from "@/components/MainFeaturedArticle";
import { FrontPagePreview } from "@/components/FrontPagePreview";

export default async function HomePage() {
  const [posts, frontPageMedia] = await Promise.all([
    getHomepagePosts(),
    getLatestFrontPagePdf(),
  ]);

  console.log("frontPageMedia", JSON.stringify(frontPageMedia, null, 2));

  // Let's assume the first post is the featured one
  const featuredPost = posts[0];

  return (
    <main className="max-w-[1400px] mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="lg:w-2/3">
          <MainFeaturedArticle post={featuredPost} />
        </div>
        <div className="lg:w-1/3 flex flex-col gap-10">
          <FrontPagePreview media={frontPageMedia} />
          <HomeNewsColumns posts={posts} />
        </div>
      </div>
    </main>
  );
}
