import { Article, Author } from "../types";

interface RawData {
  articles: Article[];
  authors: Author[];
}

class DataApi {
  rawData: RawData;
  constructor(rawData: RawData) {
    this.rawData = rawData;
  }
  mapIntoObject(arr: Array<Object>): Array<any> {
    return arr.reduce((acc: any, curr: any) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles(): Article[] {
    return this.rawData.articles;
  }
  getAuthors(): Author[] {
    return this.rawData.authors;
  }
}

export default DataApi;
