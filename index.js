const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');
const typeDefs = require('./graphql/typeDefs')
const resolvers = require('./graphql/resolvers')

const MONGODB = 'mongodb+srv://Alex_Konovalov:4yJs5bzkNydYJvhz@cluster0.ldcjvgg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const server =new ApolloServer({
   typeDefs,
   resolvers
})

mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({port: 5000})
    })
    .then((res) => {
        console.log(`Server running at ${res.url}`);
    })
