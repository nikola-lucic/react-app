import React from "react";
import PropTypes from "prop-types";
import { getFormattedName } from "../../userServices/userServices";

const UserItem = (props) => {
    if(!props.ofMyUser){
        return null;
    }
    const { photoSmall, hideEmail, dob } = props.ofMyUser;
    const name = getFormattedName(props.ofMyUser);

    return (
        <li className="collection-item avatar">
            <img src={photoSmall} alt="" className="circle" />
            <span className="title">{name}</span>
            <p>{hideEmail}<br />
                {dob}
            </p>
            <a className="secondary-content"><i className="material-icons">grade</i></a>
        </li>
    )
}

UserItem.propTypes = {
    ofMyUser: PropTypes.object.isRequired,
};
CardItem.defaultProps = {
    ofMyUser: null
};


export default UserItem;