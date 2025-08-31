import { makeAutoObservable } from "mobx";

export interface BlogContentBlock {
  type: string;
  children: { text: string; type: string }[];
}

export interface BlogThumbnailFormat {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: string | null;
  size: number;
  width: number;
  height: number;
  sizeInBytes: number;
}

export interface BlogThumbnail {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    small?: BlogThumbnailFormat;
    thumbnail?: BlogThumbnailFormat;
    [key: string]: BlogThumbnailFormat | undefined;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: Record<string, unknown> | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogArticle {
  id: number;
  documentId: string;
  title: string;
  content: BlogContentBlock[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean | null;
  thumbnail: BlogThumbnail;
}

class BlogStore {
  articles: BlogArticle[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setArticles(articles: BlogArticle[]) {
    this.articles = articles;
  }

  setLoading(loading: boolean) {
    this.loading = loading;
  }

  setError(error: string | null) {
    this.error = error;
  }

  getArticleById(id: number) {
    return this.articles.find((a) => a.id === id);
  }
}

const blogStore = new BlogStore();
export default blogStore;
