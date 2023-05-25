//sample dataset. We will fetch data from these array of objects
const authors = [
    { id: "A1", name: "J.K. Rowling" }, 
    { id: "A2", name: "Stephen King",age : 75 },
    { id: "A3", name: "Haruki Murakami",age:74 },
    
  ];
  
  const books = [
    { id: "B1", title: "Harry Potter and the Philosopher's Stone", authorId: "A1" },
    { id: "B2", title: "The Shining", authorId: "A2" },
    { id: "B3", title: "1Q84", authorId: "A3" },
    { id: "B4", title: "The Stand", authorId: "A2" },
    { id: "B5", title: "Norwegian Wood", authorId: "A3" },
    { id: "B6", title: "The Green Mile", authorId: "A2" }
  ];
  
  
  // Resolvers define how to fetch the types defined in your schema.
  const resolvers = {
    // Define resolvers for queries
    Query: {
      
      authors: () => authors,
      // Find an author by ID and return them
      author: (parent, args) => authors.find(author => author.id === args.id),
  
      books:()=> books,
  
    },
    // Define resolvers for Author type fields
    Author: {
    // Return all books written by the author 
      books: (parent , args ) => {
        console.log( parent )
        return books.filter(book => book.authorId === parent.id).slice( 0, args.limit )
      },
  
      // age:(parent)=>{
      //     if( parent.age > 50){
      //       return parent.age
      //     }
      //     return false
      // }
    },
   
  
  
    Mutation: {
      createAuthor: (parent, args) => {
        console.log( args); 
        const { name, age } = args.input;
        const newAuthor = {
          id: "A"+  ( authors.length + 1 ),
          name: name,
          age: age,
          books: []
        };
        authors.push(newAuthor);
        return newAuthor;
      },
  
      deleteAuthor:( parent , args ) => {
        const authorIndex = authors.findIndex((author) => author.id === args.id );
  
         if (authorIndex !== -1) {
          const deletedAuthor = authors[authorIndex];
          authors.splice(authorIndex, 1);
          return deletedAuthor;
        }
  
        return null;
      },
  
      deleteBook:( parent, args ) =>{
         const bookIndex = books.findIndex((book) => book.id === args.id );
  
         if (bookIndex !== -1) {
          const deletedBook = books[bookIndex];
          books.splice(bookIndex, 1);
          return deletedBook;
        }
  
        return null;
      },
  
      deleteBookByAuthorID:( parent, args ) =>{
        const bookIndex = books.findIndex((book) => book.authorId === args.authorId );
  
        if (bookIndex !== -1) {
          const deletedBook = books[bookIndex];
          books.splice(bookIndex, 1);
          return deletedBook;
        }
  
        return null;
  
      }
    }
  };
  
  
export default  resolvers ;