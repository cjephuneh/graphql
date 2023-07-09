

const { ApolloServer, gql } = require("apollo-server");


//saclar types
//String
//integer
//float
//boolean


const typeDefs = gql`
    type Query { 
        hello: String
    }
`;

const resolvers = {
    Query: {
        hello: () =>{
            return "Hello World!"
        }
    }
};


 

const server = new ApolloServer( {
    typeDefs,
    resolvers
});



server.listen().then(({ url }) => {
    console.log("the server is ready at " + url);

});
