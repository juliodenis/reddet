import React, { Fragment, useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { VscEdit } from "react-icons/vsc";
import { CgLogOut } from "react-icons/cg";
import defaultImage from "../../assets/static/defaultUser.png";

import { startLogoutUser } from "../../redux/actions/auths";
import { startGetUser } from "../../redux/actions/users";

import { MdArrowDropDown } from "react-icons/md";

import "../../assets/styles/components/Navbar/Navbar.scss";

const Navbar = (props) => {
  const { image } = props.auth.users;
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("auth"));
    dispatch(startGetUser(user));
  }, []);

  const handleClick = (event) => {
    localStorage.removeItem("auth");
  };
  const Menu = () => {
    return (
      <div className="navbar__profile--settings">
        <a className="navbar__profile--settings-dropdown">
          <img src={image ? image : defaultImage} alt="user profile" />
          <MdArrowDropDown />
        </a>
        <div className="profile-dropdown-content">
          <Link to="/profile">
            <VscEdit /> Editar perfil
          </Link>
          <Link onClick={handleClick} to="/auth">
            <CgLogOut />
            Cerrar sesión
          </Link>
        </div>
      </div>
    );
  };

  return (
    <Fragment>
      <div className="navbar">
        <section className="navbar__logo">
          <a href="/home">Reddet</a>
        </section>
        <section className="navbar__profile">
          <Menu />
        </section>
      </div>
    </Fragment>
  );
};
const mapStateToProps = (state) => {
  return {
    auth: state,
  };
};
export default connect(mapStateToProps, { startLogoutUser, startGetUser })(
  Navbar
);
