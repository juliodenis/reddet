import React, { Fragment, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CgComment } from "react-icons/cg";
import { MdSend, MdDelete } from "react-icons/md";
import { nanoid } from "nanoid";
import { useAuthStatus } from "../hooks/auth";
import "../assets/styles/pages/Comments.scss";

// Redux
import { startDeletePost } from "../redux/actions/posts";
import {
  startCreateComment,
  successCreateComment,
  startGetcomments,
  successGetCommens,
} from "../redux/actions/comments";
import { setPostState } from "../redux/actions/validations";

// Components
import CommentList from "../components/Comments/CommentList";

const Comments = (props) => {
  const postId = props.match.params.id;

  const {
    user,
    userId,
    body,
    comments,
    userImage,
    userLoggedName,
    userLoggedImage,
    userLoggedId,
  } = props.location.state;

  const userActive = JSON.parse(localStorage.getItem("auth"));
  const isAuth = useAuthStatus(true);
  const dispatch = useDispatch();

  const [commentsData, setCommentsData] = useState(props.comments);
  const [commentAdded, setCommentAdded] = useState(false);
  const [form, setForm] = useState({
    postId,
    userLoggedName,
    userLoggedId,
    userLoggedImage,
  });
  useEffect(() => {
    if (commentAdded) {
      const timer = setTimeout(() => {
        setCommentAdded(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [commentAdded]);

  useEffect(() => {
    if (commentsData.length && !commentAdded) return;
    dispatch(startGetcomments(postId));
  }, [commentsData, commentAdded]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreateComment(form));
    setForm({ ...form, body: "" });
    setCommentAdded(true);
  };

  const handleClick = (event) => {
    dispatch(startDeletePost(postId));
    location.replace("/home");
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
      {!isAuth ? <Redirect to="/auth" /> : null}
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
          <p className="Post__buttons--comments">
            <CgComment />
            {props.comments.length} Comentarios
          </p>
          <DeleteSettings />
        </section>
        <hr />
        <div className="comments">
          {props.comments.length === 0 ? (
            <h2 className="comments__noComments">No hay comentarios...</h2>
          ) : (
            false
          )}
          {props.comments.map((comment) => {
            return (
              <CommentList
                key={comment.comentId}
                user={comment.userLoggedName}
                userId={comment.userLoggedId}
                body={comment.body}
                userImage={comment.userLoggedImage}
              />
            );
          })}

          <section className="comments__addComment">
            <img src={userImage} alt="user picture" />
            <form onSubmit={handleSubmit}>
              <input
                onChange={handleChange}
                name="body"
                value={form.body}
                type="text"
                placeholder="Escribe un comentario..."
              />
              <button>
                <MdSend />
              </button>
            </form>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    comments: state.comments,
  };
};
export default connect(mapStateToProps, {
  startDeletePost,
  startCreateComment,
  startGetcomments,
  successGetCommens,
  setPostState,
})(Comments);
