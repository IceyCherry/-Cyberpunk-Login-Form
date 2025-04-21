export default class User {
firstname;
lastname;
phone;
os;
province;
terms;
username;
email;
    constructor(firstname, lastname, phone, os, province, terms, username, email) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phone = phone;
        this.os = os;
        this.province = province;
        this.terms = terms;
        this.username = username; 
        this.email = email; 
    }

    getFullName() {
        return `${this.firstname} ${this.lastname}`;
    }

    getProvinceName() {
        return this.province; 
    }
}


