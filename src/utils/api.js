import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-jj.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
