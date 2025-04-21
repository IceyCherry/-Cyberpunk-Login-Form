import { PROVINCES } from './constants.js';

export class FormValidator {
    static isValidName(name) {
        return /^[A-Za-z'-]+$/.test(name);
    }

    static isValidUsername(username) {
        // return /^[A-Z]\d{3}.{4}$/.test(username); Start with 1 capital, followed by 3 numbers, then 4 characters.
        return /^.{4,}$/.test(username); // Minimum 4 characters. (More "relaxed restrictions").
    }

    static isValidEmail(email) {
        return /^[^\s@]{1,35}@[^\s@]+\.[^\s@]+$/.test(email);
    }    

    static isValidPhoneNumber(phoneNumber) {
        return /^(?:\(\d{3}\)\s?|\d{3}[-.\s]?)\d{3}[-.\s]?\d{4}$/.test(phoneNumber);
    }

    static isValidOS(os) {
        return /^(Windows|MacOS|Linux|Other)$/.test(os);
    }

    static isValidProvince(province) {
        return PROVINCES.some(p => p.code === province);
    }

    static isTermsAccepted(terms) {
        return terms === true;
    }

    static validateField(field, value) {
        switch (field) {
            case "firstname":
            case "lastname":
                return this.isValidName(value);
            case "phone":
                return this.isValidPhoneNumber(value);
            case "os":
                return this.isValidOS(value);
            case "province":
                return this.isValidProvince(value);
            case "terms":
                return this.isTermsAccepted(value);
            default:
                return true;
        }
    }
}
