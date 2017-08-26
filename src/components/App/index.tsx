import * as React from "react";
import DataApi from "../../api/DataApi";
import { Article, Author, ArticleActions } from "../../types";
const { data } = require("../../../lib/testData.json");
const api = new DataApi(data);

import ArticleList from "../ArticleList";

class App extends React.Component {
  state: {
    articles: Article[];
    authors: Author[];
  };
  constructor(props: any, context: any) {
    super(props, context);
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  articleActions: ArticleActions = {
    lookupAuthor: (authorId: string): Author | undefined =>
      this.state.authors.find(author => author.id == authorId)
  };
  render() {
    return (
      <div>
        <ArticleList
          articles={this.state.articles}
          authors={this.state.authors}
          articleActions={this.articleActions}
        />
      </div>
    );
  }
}

export default App;
