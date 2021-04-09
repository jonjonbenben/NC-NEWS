import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://nc-news-jj.herokuapp.com/api",
});

export const getArticles = () => {
  return newsApi.get("/articles").then((res) => {
    return res.data.articles;
  });
};
export const getArticlesByTopic = (slug) => {
  return newsApi.get(`/articles?topic=${slug}`).then((res) => {
    return res.data.articles;
  });
};

export const getArticlesSorted = (sortParam) => {
  return newsApi.get(`/articles?sort_by=${sortParam}`).then((res) => {
    return res.data.articles;
  });
};

export const getTopics = () => {
  return newsApi.get("/topics").then((res) => {
    return res.data.topics;
  });
};

export const getArticlesById = (id) => {
  return newsApi.get(`/articles/${id}`).then((res) => {
    return res.data.article;
  });
};

export const getCommentsByArticle = (id) => {
  return newsApi.get(`/articles/${id}/comments`).then((res) => {
    return res.data.comments;
  });
};

export const updateVotes = (id, increment, element) => {
  return newsApi.patch(`/${element}/${id}`, { inc_votes: increment });
};

export const addComment = (article_id, body) => {
  return newsApi.post(`/articles/${article_id}/comments`, {
    username: "tickle122",
    body: body,
  });
};

export const deleteComment = (comment_id) => {
  return newsApi.delete(`/comments/${comment_id}`);
};
