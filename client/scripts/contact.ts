/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict";
namespace core {
    export class Contact {
        private m_fullname: string;
        private m_contactnumber: string;
        private m_emailaddress: string;

        constructor(fullName: string = "", contactNumber: string = "", emailAddress: string = "") {
            this.m_fullname = fullName;
            this.m_contactnumber = contactNumber;
            this.m_emailaddress = emailAddress;
        }

        public set FullName(fullName: string) {
            this.m_fullname = fullName;
        }

        public get FullName(): string {
            return this.m_fullname;
        }

        public set ContactNumber(contactNumber: string) {
            this.m_contactnumber = contactNumber;
        }

        public get ContactNumber(): string {
            return this.m_contactnumber;
        }

        public set EmailAddress(emailAddress: string) {
            this.m_emailaddress = emailAddress;
        }

        public get EmailAddress(): string {
            return this.m_emailaddress;
        }

        public toString(): string {
            return `Full Name: ${this.FullName}\n Contact Number: ${this.ContactNumber}\n Email Address: ${this.EmailAddress}`;
        }

        public serialize(): string | null {
            if (this.FullName !== "" && this.ContactNumber !== "" && this.EmailAddress !== "") {
                return `${this.FullName}, ${this.ContactNumber}, ${this.EmailAddress}`;
            }
            console.error("One or more of the properties of the contact object are missing or empty");
            return null;
        }

        public deserialize(data: string): void {
            let propertyArray = data.split(",");
            this.m_fullname = propertyArray[0];
            this.m_contactnumber = propertyArray[1];
            this.m_emailaddress = propertyArray[2];
        }

    }
}

export default core;