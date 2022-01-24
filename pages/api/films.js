import dbConnect from "../../lib/dbConnect";
import film from '../../models/film'

export default async function handler(req, res) {
    const { method } = req
    await dbConnect()

    switch (method) {
        case 'GET': 
            const GetfilmData = await film.find({})
            res.status(200).json({ success: true, data: GetfilmData})
            break

        case 'POST':
            const filmData = await film.create(
                req.body
            )
            res.status(201).json({success: true, data: filmData})
            break
    }
}