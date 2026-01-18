export function getPostCategories(post: any) {
    return post._embedded?.["wp:term"]?.[0] ?? [];
  }
  
  export function getPostTags(post: any) {
    return post._embedded?.["wp:term"]?.[1] ?? [];
  }
  
  export function hasTag(post: any, tagSlug: string) {
    return getPostTags(post).some((tag: any) => tag.slug === tagSlug);
  }
  
  export function getPrimaryCategory(post: any) {
    return getPostCategories(post)[0]; // WP usually orders intentionally
  }
  