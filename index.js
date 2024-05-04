import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";


//db

import db from "./_db.js";

const resolvers = {
    Query: {
        games(){
            return db.games
        },
        reviews(){
            return db.reviews
        },
        authors(){
            return db.authors
        },
    }
}

//server Setup
 const server = new ApolloServer({
//Type Defs - definition of types of data we want to expose on our graphs
//Resolvers - handle queries based on Schema and types

 typeDefs,
 resolvers

 })
const {url} = await startStandaloneServer(server, {
    listen: {port: 4000}
 })

 console.log("Server Ready at port", 4000)


 //Graphql is layer between database and client side queries