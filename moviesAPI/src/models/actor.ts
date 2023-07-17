import mongoose, { model, Document, Types } from 'mongoose';
import { Movie } from './movie';

export interface Actor extends Document {
  _id: Types.ObjectId;
  name: string;
  movies: Types.ObjectId[] | Movie[];
}

const actorSchema = new mongoose.Schema({
  name: String,
  movies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }],
});

export const ActorModel = model<Actor>('Actor', actorSchema);