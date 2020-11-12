import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { startLoginUser } from "../redux/actions/auths";
import { nanoid } from "nanoid";
import "../assets/styles/pages/Login.scss";

import { useAuthStatus } from "../hooks/auth";

const Login = (props) => {
  const isAuth = useAuthStatus(false);
  const [form, setForm] = useState({});

  const handleChange = (event) => {
    let randomId = nanoid();

    setForm({
      ...form,
      id: randomId,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (form === {}) {
      console.log("Escribe algo");
    } else {
      props.startLoginUser(form);
    }
  };
  return (
    <Fragment>
      {isAuth ? <Redirect to="/home" /> : null}
      <div className="container">
        <div className="loginCard">
          <h1>Inicia sesión para acceder al menú de inicio</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="loginInput">Escriba su ID</label>
            <input
              onChange={handleChange}
              name="userId"
              id="loginInput"
              type="text"
              placeholder="Escriba su id de usuario"
            />
            <button className="btn">Iniciar Sesión</button>
          </form>
          <small>
            ¿No tienes cuenta? <Link to="#">Regístrate</Link>{" "}
          </small>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};

export default connect(mapStateToProps, { startLoginUser })(Login);
