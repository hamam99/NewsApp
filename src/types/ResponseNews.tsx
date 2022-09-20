interface Source {
  id: string | null;
  name: string;
}

export interface Article {
  source: Source;
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface ResponseNews {
  status: string;
  totalResults: number;
  articles: Article[];
}
