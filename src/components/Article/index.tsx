import * as React from "react";
import { Article as ArticleType, Author as AuthorType } from "../../types";
import { style } from "typestyle";

const styles = {
  article: style({
    paddingBottom: 10,
    borderBottomStyle: 'solid',
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    marginBottom: 10,
  }),
  title: style({
    fontWeight: 'bold',
  }),
  date: style({
    fontSize: '0.8em',
    color: '#888',
  }),
  author: style({
    paddingTop: 10,
    paddingBottom: 10,
  }),
  body: style({
    paddingLeft: 20,
  })
};
const Article = (props: ArticleProps) => {
  const { article, author } = props;
  return (
    <div className={styles.article}>
      <div className={styles.title}>
        {article.title}
      </div>
      <div className={styles.date}>
        {new Date(article.date).toString()}
      </div>
      <div className={styles.author}>
        <a href={author != undefined ? author.website : ""}>
          `${author != undefined ? author.firstName : ""} ${author != undefined ? author.lastName : ""}`
        </a>
      </div>
      <div className={styles.body}>
        {article.body}
      </div>
    </div>
  );
};

interface ArticleProps {
  key: string | number;
  article: ArticleType;
  author: AuthorType;
}

export default Article;
