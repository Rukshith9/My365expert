export type Blog = {
  id: string;
  title: string;
  slug: string;
  type: string;
  excerpt: string;
  cover_image: string;
  content: string;
  published: boolean;
  created_at: string;
  updated_at: string;
};

// Mapped type used by card components (matches old field names)
export type BlogCardData = {
  title: string;
  slug: string;
  type: string;
  excerpt: string;
  coverImage: string;
  date: string;
};
