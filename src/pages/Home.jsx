import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import defaultImage from "../assets/static/defaultUser.png";
import { VscEdit } from "react-icons/vsc";
import "../assets/styles/pages/Home.scss";
import { useDispatch } from "react-redux";

import { useAuthStatus } from "../hooks/auth";

// Components
import Post from "../components/Posts/Post";
import ModalCreatePost from "../components/ModalCreatePost/ModalCreatePost";

// Redux
import {
  startGetPosts,
  successGetPosts,
  startCreatePost,
  successCreatePost,
} from "../redux/actions/posts";
import { startGetUser, successGetUser } from "../redux/actions/users";
import { setPostState } from "../redux/actions/validations";

const Home = (props) => {
  const { posts, users } = props;
  const isAuth = useAuthStatus(true);
  const dispatch = useDispatch();
  const [Modal, setModal] = useState(false);
  const [postsData, setPostsData] = useState(posts);
  const [form, setForm] = useState({});
  const [postAdded, setPostAdded] = useState(false);
  const [postsStatus, setPostsStatus] = useState(false);

  useEffect(() => {
    if (postAdded) {
      const timer = setTimeout(() => {
        setPostAdded(false);
        const status = dispatch(setPostState(false));
        setPostsStatus(status.payload);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [postAdded, postAdded]);

  useEffect(() => {
    if (postsData.length && !postAdded) return;
    dispatch(startGetPosts());

    setPostsData(posts);
  }, [postsData, postsStatus]);

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem("auth"));
    dispatch(startGetUser(userId));
  }, []);

  const handleChange = (event) => {
    const userId = JSON.parse(localStorage.getItem("auth"));
    const createdAt = new Date();

    setForm({
      ...form,
      userId: userId.userId,
      user: props.users.name,
      userImage: props.users.image,
      comments: [],
      createdAt,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startCreatePost(form));
    setPostAdded(true);
    const status = dispatch(setPostState(true));
    setPostsStatus(status);
    setModal(false);
  };

  return !isAuth ? (
    <Redirect to="/auth" />
  ) : (
    <Fragment>
      <div className="addPost">
        <img
          src={props.users.image ? props.users.image : defaultImage}
          width="20px"
          alt="user picture"
        />
        <button onClick={() => setModal(true)}>
          Escribe un nuevo post <VscEdit />
        </button>
        <ModalCreatePost isOpen={Modal} onClose={() => setModal(false)}>
          <div className="post__header">
            <h2>Crear publicación</h2>
          </div>
          <div className="post__body">
            <div className="post__body--user">
              <img
                src={props.users.image ? props.users.image : defaultImage}
                alt="user picture"
              />
              <p>{props.users.name}</p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="post__form">
            <textarea
              name="body"
              onChange={handleChange}
              placeholder="Escribe un nuevo post"
            ></textarea>
            <button>Publicar</button>
          </form>
        </ModalCreatePost>
      </div>
      {props.posts
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
        .map((post) => {
          return (
            <Post
              key={post.id}
              comments={post.comments}
              body={post.body}
              postId={post.id}
              user={post.user}
              userId={post.userId}
              userImage={post.userImage ? post.userImage : defaultImage}
              createdAt={post.createdAt}
              postBody={post.body}
              setPostAdded={setPostAdded}
              setPostStatus={setPostsStatus}
              userLoggedName={props.users.name}
              userLoggedImage={props.users.image}
              userLoggedId={props.users.id}
            />
          );
        })}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
    users: state.users,
  };
};

export default connect(mapStateToProps, {
  successGetPosts,
  startGetPosts,
  startCreatePost,
  successCreatePost,
  setPostState,
})(Home);
