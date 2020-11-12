import React from "react";
import defaultUser from "../../assets/static/defaultUser.png";

const CommentList = (props) => {
  return (
    <section className="comments__list">
      <div className="comment-list-user">
        <img
          src={props.userImage ? props.userImage : defaultUser}
          alt="user picture"
        />
      </div>
      <div className="comments__comment-body">
        <h4>{props.user}</h4>
        <p>{props.body}</p>
      </div>
    </section>
  );
};

export default CommentList;
