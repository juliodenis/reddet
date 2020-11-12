import React, { Fragment } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CgComment } from "react-icons/cg";
import { MdDelete } from "react-icons/md";
import { startDeletePost } from "../../redux/actions/posts";

import "../../assets/styles/components/Post/Post.scss";

const Post = ({
  postId,
  user,
  userId,
  body,
  comments = [],
  userImage,
  createdAt,
  startDeletePost,
  setPostAdded,
  setPostStatus,
  userLoggedName,
  userLoggedImage,
  userLoggedId,
}) => {
  const dispatch = useDispatch();

  const userActive = JSON.parse(localStorage.getItem("auth"));
  const handleClick = (event) => {
    setPostAdded(true);
    setPostStatus(true);
    dispatch(startDeletePost(postId));
  };
  const DeleteSettings = () => {
    return userActive.userId === userId ? (
      <div className="Post__buttons--settings">
        <a className="Post__buttons--settings-dots"></a>
        <div className="dropdown-content">
          <a onClick={handleClick}>
            <MdDelete />
            Eliminar
          </a>
        </div>
      </div>
    ) : (
      false
    );
  };
  return (
    <Fragment>
      <div className="Post">
        <section className="Post__user">
          <img src={userImage} alt="user picture" />
          <div className="Post__user-name">
            <p>{user}</p>
          </div>
        </section>
        <section className="Post__body">
          <p>{body}</p>
        </section>
        <section className="Post__buttons">
          <Link
            className="Post__buttons--comments"
            to={{
              pathname: `/posts/${postId}`,
              state: {
                postId,
                user,
                userId,
                body,
                comments,
                userImage,
                createdAt,
                userLoggedName,
                userLoggedImage,
                userLoggedId,
              },
            }}
          >
            <CgComment />
            {comments.length}{" "}
            {comments.length == 1 ? "Comentario" : "Comentarios"}
          </Link>
          <DeleteSettings />
        </section>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, { startDeletePost })(Post);
