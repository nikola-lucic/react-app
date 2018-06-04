import React from "react";
import logo from "../logo.svg";
import PropTypes from "prop-types";

const Header = (props)=>{
    const title = props.title;
    return(

        <nav>
        <div className="nav-wrapper">
          <a className="brand-logo center">{title}</a>
        </div>
      </nav>
    )
};

Header.propTypes = {
  title: PropTypes.string.isRequired
}
Header.defaultProps = {
  name: "React app list"
}


export default Header;