/**Names: Auriana Hayles, Shruit Patel
 * Student Number: 100832275, 100842914
 * Date Finished: April, 14th, 2023
 * **/
"use strict"
import mongoose from "mongoose";
const Schema = mongoose.Schema;
import passportLocalMongoose from 'passport-local-mongoose';
import User = core.User;

const UserSchema : any = new mongoose.Schema(
    {
        DisplayName: String,
        EmailAddress: String,
        Username: String,
        Created : {
            type : Date,
            default : Date.now()
        },
        Updated : {
            type : Date,
            default : Date.now()
        }
    },
    {
        collection: "users"
    }
);

UserSchema.plugin(passportLocalMongoose);
const Model = mongoose.model("User", UserSchema);
declare global
{
    export type UserDocument = mongoose.Document &
        {
            username : string,
            EmailAddress : string,
            DisplayName : string
        }

}
export default Model;
