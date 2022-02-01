import React from 'react';

const PostComment = (props) => {
    const {id, name, email, body} = props.comment;
    return (
        <div>
            <p>Comment Id: {id}</p>
            <strong>Comment: {name}</strong>
            <p>Email: <u>{email}</u></p>
            <p>{body}</p>
        </div>
    );
};

export default PostComment;