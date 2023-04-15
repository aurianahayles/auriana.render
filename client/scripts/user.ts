/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict";

namespace core{

    export class User {
        private m_displayname: string;
        private m_emailaddress: string;
        private m_username: string;
        private m_password: string;
        constructor(displayName: string = "", emailAddress: string = "",
                    username: string = "", password: string = "") {
            this.m_displayname = displayName;
            this.m_emailaddress = emailAddress;
            this.m_username = username;
            this.m_password = password;
        }

        public set DisplayName(displayName: string){
            this.m_displayname = displayName;
        }

        public get DisplayName() : string {
            return this.m_displayname;
        }

        public set EmailAddress(emailAddress : string){
            this.m_emailaddress = emailAddress;
        }

        public get EmailAddress() : string {
            return this.m_emailaddress;
        }

        public set UserName(username: string){
            this.m_username = username;
        }

        public get UserName() : string{
            return this.m_username;
        }

        public set Password(password: string){
            this.m_password = password;
        }

        public get Password() : string{
            return this.m_password;
        }


        public toString() : string{
            return `Display Name: ${this.DisplayName}\n Email Address: ${this.EmailAddress}
            \n Username: ${this.UserName}`;
        }

        public toJSON() : { Username : string; DisplayName : string; EmailAddress : string}{
            return {
                "DisplayName" : this.m_displayname,
                "EmailAddress" : this.m_emailaddress,
                "Username" : this.m_username,

            }
        }

        public fromJSON(data : User){
            this.m_displayname = data.DisplayName;
            this.m_emailaddress = data.EmailAddress;
            this.m_username = data.UserName;
            this.m_password = data.Password;
        }


        public serialize() : string | null{
            if(this.DisplayName !== "" && this.EmailAddress !== "" && this.UserName !== "" && this.Password !== ""){
                return `${this.DisplayName}, ${this.EmailAddress}, ${this.UserName}, ${this.Password}`;
            }
            console.error("One or more of the properties of the contact object are missing or empty");
            return null;
        }

        public deserialize(data : string) : void{
            let propertyArray = data.split(",");
            this.DisplayName = propertyArray[0];
            this.EmailAddress = propertyArray[1];
            this.UserName = propertyArray[2];
            this.Password = propertyArray[3];
        }

    }

}