import { makeAutoObservable } from "mobx";

export interface BlogArticle {
  id: number;
  documentId: string;
  title: string;
  content: any[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean | null;
  thumbnail: {
    id: number;
    documentId: string;
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
  };
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
