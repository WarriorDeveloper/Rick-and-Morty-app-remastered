import { Schema, model } from 'mongoose'

const characterSchema = new Schema({
    id: String,
    name: String,
    status: String,
    species: String,
    gender: String,
    origin: String,
    image: String,
    fav: Boolean
})

export const Character = model('Character', characterSchema)