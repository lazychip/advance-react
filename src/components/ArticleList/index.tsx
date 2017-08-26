import * as React from "react";
import {
  Article as ArticleType,
  Author as AuthorType
} from "../../types/index";
import Article from "../Article";
const ArticleList = (props: ArticleListProps) => {
  const { articles, authors } = props;
  return (
    <div>
      {articles.map(article => {
        const author = authors.find(author => author.id == article.authorId);
        return <Article key={article.id} article={article} author={author} />;
      })}
    </div>
  );
};

interface ArticleListProps {
  articles: ArticleType[];
  authors: AuthorType[];
}

export default ArticleList;
