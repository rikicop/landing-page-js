export interface IndexPageProps {
  data: {
    title: string;
    slug: string | any;
    body: [object];
    technologies: string;
    mainImage: string | any;
  }[];
  title: string;
}

export interface TitleProps {
  title: string;
}

export interface ArticleProps {
  article: {
    userId: number;
    id: number;
    title: string;
    body: string;
    excerpt: string;
  };
}

export interface ArticleItemProps {
  data: {
    slug: string | any;
    title: string;
    technologies: string;
    picture?: string | any;
    mainImage?: string | any;
    body: [object];
    authorPicture?: string | any;
    author?: string;
  };
}
