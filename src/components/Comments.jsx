import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchCommentsByArticleId } from '../api';

const Comments = () => {
    const { article_id } = useParams();
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        setIsLoading(true);
        fetchCommentsByArticleId(article_id).then((commentsFromApi) => {
            setComments(commentsFromApi);
            setIsLoading(false);
        });
    }, [article_id]);

    return isLoading 
    ? (<p>Now Loading</p>)
    : (
        <section>
            <h1>Comments of Article {article_id}</h1>
            {comments.map((comment) => {
                return (
                    <section className="single_comment" key={comment.comment_id}>
                        <h2>{comment.author}</h2>
                        <p>Comment: {comment.body}</p>
                        <p>Votes: {comment.votes}</p>
                    </section>
                );
                })}; 
        </section>
    );
};

export default Comments;