class User {
    constructor(firsName, lastName, photoSmall, photoLarge, email, dateOfBirth) {
        this.firsName = firsName;
        this.lastName = lastName;
        this.photoSmall = photoSmall;
        this.photoLarge = photoLarge;
        this.email = email;
        this.hideEmail = this.hideEmail()
        this.dateOfBirth = new Date(dateOfBirth);
        this.dob = this.getDateOfBirth();
    };

    hideEmail() {
        let email = this.email.split("@");
        let firstPart = email[0]
        let average = email[0].length / 2;
        firstPart = firstPart.substring(0, (firstPart.length - average));
        let secondPart = email[1];
        return `${firstPart}...@${secondPart}`
    };
    
    getDateOfBirth() {
        let date = this.dateOfBirth;
        let dateOutput = `${date.getDate()}.${(date.getMonth() + 1)}.${date.getFullYear()}`;
        return dateOutput;
    };
};

export default User;