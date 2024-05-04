export const typeDefs = `#graphql

type Game{
    id: ID!
    title: String!
    platform: [String]!

}
type Review{
    id: ID!
    rating: Int!
    content: String!
}
type Author{
    id: ID!
    name: String!
    verified: Boolean!
}

type Query {

    reviews: [Review]
    games: [Game]
    authors: [Author]

}
`;

//int, float, string, float, boolean
//Note that Query is not optional, its a type that Every graphQl Schema Needs to have. it defines the entry point to the graph and specifies the return types of those entry points
