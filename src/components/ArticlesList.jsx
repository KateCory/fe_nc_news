import { useState, useEffect } from 'react';
import { fetchArticles } from "../api.js";
import ArticleCard from './ArticleCard.jsx';

const Articles = () => {
    const [articles, setArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        fetchArticles().then((articlesFromApi) => {
            setArticles(articlesFromApi);
            setIsLoading(false);
        });
    }, []);

    return isLoading 
        ? (<p>Now Loading</p>)
        : (
            <section>
                <h2>Articles</h2>
                    <ul>
                        {articles.map((article) => {
                            return <ArticleCard key={article.article_id} article={article}/>

                        })}
                    </ul>
            </section>
    );
};

export default Articles;