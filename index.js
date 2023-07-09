

const { ApolloServer, gql } = require("apollo-server");


//saclar types
//String
//integer
//float
//boolean
//ID


const typeDefs = gql`
    type Query { 
        hello: String
        # hello: String!
        numberOfAnimals: Int
        numberOfBooks: Int
        price: Float
        isCool: Boolean
    }
`;

const resolvers = {
    Query: {
        hello: () =>{
            return "Hello World!"
        },

        numberOfAnimals: () => {
            return 55
        },

        numberOfBooks: () => {
            return 5
        },

        price: () => {
            return 23.23
        },

        isCool: () =>  true,
        
    }
};


 

const server = new ApolloServer( {
    typeDefs,
    resolvers
});



server.listen().then(({ url }) => {
    console.log("the server is ready at " + url);

});
