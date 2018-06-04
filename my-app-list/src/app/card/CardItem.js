import React from "react"
import PropTypes from "prop-types";
import { getFormattedName } from "../../userServices/userServices";

const CardItem = (props) => {
    if(!props.ofMyUser){
        return null;
    };
    const { photoLarge, hideEmail, dob } = props.ofMyUser;
    const name = getFormattedName(props.ofMyUser);

    return (
        <div className="col s12 m3 l3">
            <div className="card">
                <div className="card-image">
                    <img src={photoLarge} />
                    <span className="card-title">{name}</span>
                </div>
                <div className="card-content">
                    <p>{hideEmail}<br />
                        {dob}
                    </p>
                </div>
            </div>
        </div>
    )
};

CardItem.propTypes = {
    ofMyUser: PropTypes.object.isRequired,
};
CardItem.defaultProps = {
    ofMyUser: null
};

export default CardItem;