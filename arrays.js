

const { ApolloServer, gql } = require("apollo-server");


//saclar types
//String
//integer
//float
//boolean
//ID


const typeDefs = gql`
    type Query { 
        hello: [String]

    }
`;

const resolvers = {
    Query: {
        hello: () =>{
            return ["Hello ", "jeph", "its", "me", "here", "World!"]
        },


    }
};


 

const server = new ApolloServer( {
    typeDefs,
    resolvers
});



server.listen().then(({ url }) => {
    console.log("the server is ready at " + url);

});
