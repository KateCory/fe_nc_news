import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById } from "../api";
import { Link } from 'react-router-dom';

const SingleArticle = () => {
    const { article_id } = useParams();
    const [singleArticle, setSingleArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticleById(article_id).then((articleFromApi) => {
            setSingleArticle(articleFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    return isLoading 
    ? (<p>Now Loading</p>)
    : (
        <section id="single-article">
            <h2>Article: {singleArticle.article_id}</h2>
            <img src= {singleArticle.article_img_url} width='150' height='150'/>
            <h3>{singleArticle.title}</h3>
            <h4>Author: {singleArticle.author}</h4>
            <p>Topic: {singleArticle.topic}</p> 
            <p>{singleArticle.body}</p> 
            <p>Votes: {singleArticle.votes}</p> 
            <p>Date: {singleArticle.created_at}</p> 
            <nav>
                <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link>
            </nav>
        </section>
);
};

export default SingleArticle;