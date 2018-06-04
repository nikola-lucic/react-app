import React from "react";
import PropTypes from "prop-types";
import {getUsers} from "../../userServices/userServices";
import UserItem from "./UserItem";

const UserList = (props) => {
    const UserList = getUsers();
    return (
        <div className="container">
            <div className="row">
            <ul className="collection">
                {UserList.map((user, index) => {
                    return <UserItem key={index} ofMyUser={user} />
                })}
            </ul>
        </div>
        </div>
    )
};

export default UserList;