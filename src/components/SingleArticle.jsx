import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchArticleById, patchArticle } from "../api";
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

    const handleUpVoteClick= () => {

        setSingleArticle(() => {
        return {...singleArticle, votes: singleArticle.votes + 1};
        })
       
        patchArticle(article_id).catch((err) => {
            setSingleArticle(() => {
                return {...singleArticle, votes: singleArticle.votes - 1};
            });
        });
    };   

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
            <button 
                onClick={handleUpVoteClick}
            >
                Vote: {singleArticle.votes}
            </button> 
            <p>Date: {singleArticle.created_at}</p> 
            <nav>
                <Link to={`/articles/${singleArticle.article_id}/comments`}>Comments</Link>
            </nav>
        </section>
);
};

export default SingleArticle;

