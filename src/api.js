import axios from "axios";

const ncNewsApi = axios.create({
    baseURL: 'https://nc-news-api-1-0ko3.onrender.com/api'
});

export const fetchArticles = () => {
    
    return ncNewsApi.get('/articles').then(( { data: { articles } } ) => {
        return articles; 
    })
};

export const fetchArticleById = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}`).then( ( { data: { article } } ) => {
        return article;
    })
};

export const fetchCommentsByArticleId = (article_id) => {
    return ncNewsApi.get(`/articles/${article_id}/comments`).then(( { data: { comments }} ) => {
        return comments; 
    })
};
