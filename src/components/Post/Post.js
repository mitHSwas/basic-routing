import React from 'react';
import {useHistory} from "react-router-dom";

const Post = (props) => {
    const {id, title} = props.post;
    const history = useHistory();
    const handlePostDetail = (id) => {
        const url = `/post/${id}`;
        history.push(url);
    }
    return (
        <div>
            <h2>Id :{id}</h2>
            <p> <b>Title: </b> {title}</p>
            <button onClick={() => handlePostDetail(id)}>Details</button>
        </div>
    );
};

export default Post;