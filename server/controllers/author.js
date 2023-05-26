import Author from "../models/Author.js";

//add new author
export const addAuthor =  async( req, res ) =>{
    const author = new Author( req.body);

    try{
        const newAuthor = await author.save();
        res.json( newAuthor );
    }catch{
        res.status( 409 ).json( 
            { message: error.message } );
    }


}   