import {usersData} from "../data/usersData"
import User from "../entities/User"
const getUsers = () => {

    return usersData.map((user) => {
        return new User(user.name.first, user.name.last, user.picture.thumbnail, user.picture.large, user.email, user.dob)
    })
}

const getFormattedName = (user) => {
    let firsName = user.firsName.charAt(0).toUpperCase() + user.firsName.slice(1);
    let lastName = user.lastName.charAt(0).toUpperCase() + user.lastName.slice(1);
    return `${firsName} ${lastName}`;
};

export {getUsers, getFormattedName};
