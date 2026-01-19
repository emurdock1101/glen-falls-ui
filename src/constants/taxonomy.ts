export const TAGS = {
  LATEST: "latest",
  TRENDING: "trending",
  POPULAR: "popular",
} as const;

export const PAGE_SLUGS = {
  ABOUT: "our-story",
} as const;

export const CATEGORIES = {
  BUSINESS: "business",
  TECHNOLOGY: "technology",
  RECREATION: "recreation",
  MUSIC: "music",
  FRONT_PAGE: "front-page",
} as const;

// Optional helpers
export const DISPLAY_CATEGORY_ORDER = [
  CATEGORIES.BUSINESS,
  CATEGORIES.RECREATION,
  CATEGORIES.TECHNOLOGY,
];
