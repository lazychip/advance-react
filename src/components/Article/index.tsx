import * as React from "react";
import { Article as ArticleType, Author as AuthorType } from "../../types";

const Article = (props: ArticleProps) => { 
  const { article, author } = props;
  return (
    <div>
      <div>
        {article.title}
      </div>
      <div>
        {article.date}
      </div>
      <div>
        <a href={author != undefined ? author.website: ''}>
          `${author != undefined ? author.firstName: ''} ${author != undefined ? author.lastName: ''}`
        </a>
      </div>
      <div>
        {article.body}
      </div>
    </div>
  );
};

interface ArticleProps {
  key: string | number;
  article: ArticleType;
  author: AuthorType | undefined;
}

export default Article;
