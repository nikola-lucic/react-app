import React from "react"
import PropTypes from "prop-types";
import {getUsers} from "../../userServices/userServices";
import CardItem from "./CardItem";

const CardList = (props) => {
    const UserList = getUsers();
    return (
        <div className="container">
            <div className="row">
                {UserList.map((user, index) => {
                    return <CardItem key={index} ofMyUser={user} />
                })}
        </div>
        </div>
    )
};

export default CardList;