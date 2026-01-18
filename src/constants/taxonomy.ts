export const TAGS = {
    LATEST: "latest",
    TRENDING: "trending",
    POPULAR: "popular",
  } as const;
  
  export const CATEGORIES = {
    BUSINESS: "business",
    TECHNOLOGY: "technology",
    RECREATION: "recreation",
    MUSIC: "music",
  } as const;
  
  // Optional helpers
  export const DISPLAY_CATEGORY_ORDER = [
    CATEGORIES.BUSINESS,
    CATEGORIES.RECREATION,
    CATEGORIES.TECHNOLOGY,
  ];
  