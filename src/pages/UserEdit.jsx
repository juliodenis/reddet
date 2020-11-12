import React, { Fragment, useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import "../assets/styles/pages/UserEdit.scss";
import defaultUser from "../assets/static/defaultUser.png";
import { startGetUser, startUpdateUser } from "../redux/actions/users";
import { useAuthStatus } from "../hooks/auth";

const UserEdit = (props) => {
  const { user } = props;
  const dispatch = useDispatch();
  const isAuth = useAuthStatus(true);
  const [form, setForm] = useState(user);
  const [userUpdated, setUserUpdated] = useState(false);

  useEffect(() => {
    if (userUpdated) {
      const timer = setTimeout(() => {
        const user = JSON.parse(localStorage.getItem("auth"));
        dispatch(startGetUser(user));
        setUserUpdated(false);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [userUpdated]);

  const handleChange = (event) => {
    setForm({
      ...form,
      id: user.id,
      name: user.name,
      description: user.description,
      image: user.image,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(startUpdateUser(form));
    setUserUpdated(true);
  };

  return (
    <Fragment>
      {!isAuth ? <Redirect to="/auth" /> : null}
      <div className="container">
        <div className="profile">
          <section className="profile__user-info">
            <img
              src={props.user.image ? props.user.image : defaultUser}
              alt="User image"
            />
            <h1>{user.name}</h1>
            <p>{user.description}</p>
          </section>
          <hr />
          <section className="profile__user-info--edit">
            <form onSubmit={handleSubmit}>
              <h2>Edita tu información</h2>
              <label htmlFor="username">Nombre de usuario</label>
              <input
                onChange={handleChange}
                name="name"
                id="username"
                type="text"
                placeholder={user.name}
              />
              <label htmlFor="description">Descripción</label>
              <input
                onChange={handleChange}
                name="description"
                id="description"
                type="text"
                placeholder={user.description}
              />
              <button>Guardar</button>
            </form>
          </section>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.users,
  };
};

export default connect(mapStateToProps, { startGetUser, startUpdateUser })(
  UserEdit
);
