/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict";
import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ContactSchema : any = new Schema(
    {
        FullName: String,
        ContactNumber: String,
        EmailAddress: String
    },
    {
        collection: "contacts"
    }
);
const Model = mongoose.model("Contact", ContactSchema);
export default Model;
