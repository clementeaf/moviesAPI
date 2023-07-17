import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { schema } from './schema';
import mongoose from 'mongoose';
import { MovieResolvers } from './resolvers/MovieResolvers';
import { ActorResolvers } from './resolvers/ActorResolvers';

const app = express();
const URI = 'mongodb+srv://vtxmovies:vtxmovies@vtxmovies.lgvh2lh.mongodb.net/?retryWrites=true&w=majority';

async function startServer() {
  try {
    await mongoose.connect(URI);
    console.log('Conexión exitosa a MongoDB Atlas');

    const apolloServer = new ApolloServer({
      schema,
      resolvers: [MovieResolvers, ActorResolvers],
    });

    await apolloServer.start();
    apolloServer.applyMiddleware({ app });

    app.listen(4000, () => {
      console.log('Servidor iniciado en puerto 4000');
    });
  } catch (error) {
    console.error('Error al conectar a MongoDB Atlas:', error);
    process.exit(1);
  }
}

startServer();