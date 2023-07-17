import mongoose, { model, Document, Types } from 'mongoose';

export interface Movie extends Document {
  _id: Types.ObjectId;
  title: string;
  description: string;
  genre: string;
  year: number;
  productionCompany: string;
  actors: Types.ObjectId[] | string[];
}

export const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  genre: String,
  year: Number,
  productionCompany: String,
  actors: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Actor',
  }],
});

export const MovieModel = model<Movie>('Movie', movieSchema);

