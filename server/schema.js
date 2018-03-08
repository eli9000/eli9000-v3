import { makeExecutableSchema } from 'graphql-tools';

import * as Schema from './Schema.graphql';
import resolvers from './resolvers';

export default makeExecutableSchema({
    typeDefs: Schema,
    resolvers,
});