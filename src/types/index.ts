export interface Article {
  id: number | string;
  title: string;
  date: Date;
  authorId: number | string;
  body: string;
}

export interface Author {
  id: string | number;
  firstName: string;
  lastName: string;
  website: string;
}
