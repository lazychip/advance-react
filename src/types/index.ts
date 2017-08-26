export interface Article {
  id: number | string;
  title: string;
  date: Date | string;
  authorId: number | string;
  body: string;
}

export interface Author {
  id: string | number;
  firstName: string;
  lastName: string;
  website: string;
}
