import { ArticlePreview } from "./ArticlePreview";
import { hasTag } from "@/lib/normalizePost";
import { TAGS } from "@/constants/taxonomy";

export function HomeNewsColumns({ posts }: { posts: any[] }) {
  const latest = posts.filter((p) => hasTag(p, TAGS.LATEST));
  const trending = posts.filter((p) => hasTag(p, TAGS.TRENDING));

  console.log(JSON.stringify(latest, null, 2));
  console.log(JSON.stringify(trending, null, 2));

  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <div className="border-b-2 border-black mb-6 pb-2 font-semibold">
          Latest News
        </div>
        {latest.map((post) => (
          <ArticlePreview key={post.id} post={post} />
        ))}
      </div>

      <div>
        <div className="border-b-2 border-black mb-6 pb-2 font-semibold">
          Trending News
        </div>
        {trending.map((post) => (
          <ArticlePreview key={post.id} post={post} />
        ))}
      </div>
    </section>
    </>
  );
}
