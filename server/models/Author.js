import mongoose from "mongoose";

const AuthorSchema = mongoose.Schema({
    name: String,
    age:Number    
});

const Author = mongoose.model( 'Author', AuthorSchema );
export default Author;