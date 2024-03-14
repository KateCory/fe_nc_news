import { Link } from 'react-router-dom';

const ArticleCard = (props) => {
    const { article } = props 
    return (
        <section className="article-card">
            <img src= {article.article_img_url} width='150' height='150'/>
            <h3>{article.title}</h3>
            <h4>Author: {article.author}</h4>
            <p>Topic: {article.topic}</p>
            <Link to={`/articles/${article.article_id}`}>Read more</Link>
        </section>
    )
};

export default ArticleCard;