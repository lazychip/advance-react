import * as React from "react";
import {
  Article as ArticleType,
  Author as AuthorType,
  ArticleActions
} from "../../types/index";
import Article from "../Article";
const ArticleList = (props: ArticleListProps) => {
  const { articles, articleActions } = props;
  return (
    <div>
      {articles.map(article => {
        return (
          <Article
            key={article.id}
            article={article}
            author={articleActions.lookupAuthor(article.authorId)}
          />
        );
      })}
    </div>
  );
};

interface ArticleListProps {
  articles: ArticleType[];
  authors: AuthorType[];
  articleActions: ArticleActions;
}

export default ArticleList;
