import mongoose from 'mongoose'

const FilmSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    genre: {
        type: String,
    }
})

export default mongoose.models.film || mongoose.model('film', FilmSchema)