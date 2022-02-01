import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import Comment from '../Comment/Comment';

const PostDetail = () => {
    const {postId} = useParams();
    const [postDetail, setPostDetail] = useState({});
    const {id, title, body} = postDetail;
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setPostDetail(data))
    }, [])
    const [comments, setComments] = useState([]);
    useEffect( () => {
        console.log( id )
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;
        console.log( url )
        fetch(url)
        .then(res => res.json())
        .then(data => setComments(data))
    }, [])
    return (
        <div>
            <h2>Posted Id: {id}</h2>
            <h3>Posted Title: {title}</h3>
            <h4>Posted Body: {body}</h4>
            {
                comments.map( comment => <Comment comment={comment}></Comment>)
            }
        </div>
    );
};

export default PostDetail;