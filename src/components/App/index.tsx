import * as React from "react";
import DataApi from "../../api/DataApi";
import { Article, Author } from "../../types";
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

  render() {
    return (
      <div>
        <ArticleList articles={this.state.articles} authors={this.state.authors} />
      </div>
    );
  }
}

export default App;
