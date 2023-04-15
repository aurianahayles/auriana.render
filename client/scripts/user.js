"use strict";
var core;
(function (core) {
    class User {
        m_displayname;
        m_emailaddress;
        m_username;
        m_password;
        constructor(displayName = "", emailAddress = "", username = "", password = "") {
            this.m_displayname = displayName;
            this.m_emailaddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }
        set DisplayName(displayName) {
            this.m_displayname = displayName;
        }
        get DisplayName() {
            return this.m_displayname;
        }
        set EmailAddress(emailAddress) {
            this.m_emailaddress = emailAddress;
        }
        get EmailAddress() {
            return this.m_emailaddress;
        }
        set UserName(username) {
            this.m_username = username;
        }
        get UserName() {
            return this.m_username;
        }
        set Password(password) {
            this.m_password = password;
        }
        get Password() {
            return this.m_password;
        }
        toString() {
            return `Display Name: ${this.DisplayName}\n Email Address: ${this.EmailAddress}
            \n Username: ${this.UserName}`;
        }
        toJSON() {
            return {
                "DisplayName": this.m_displayname,
                "EmailAddress": this.m_emailaddress,
                "Username": this.m_username,
            };
        }
        fromJSON(data) {
            this.m_displayname = data.DisplayName;
            this.m_emailaddress = data.EmailAddress;
            this.m_username = data.UserName;
            this.m_password = data.Password;
        }
        serialize() {
            if (this.DisplayName !== "" && this.EmailAddress !== "" && this.UserName !== "" && this.Password !== "") {
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.UserName}, ${this.Password}`;
            }
            console.error("One or more of the properties of the contact object are missing or empty");
            return null;
        }
        deserialize(data) {
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.UserName = propertyArray[2];
            this.Password = propertyArray[3];
        }
    }
    core.User = User;
})(core || (core = {}));
//# sourceMappingURL=user.js.map