import { Router } from "express"
const characterRouter = Router()

import allCharacters from "../controllers/allCharacters"
import characterById from "../controllers/characterById"

characterRouter.get('/', async (req, res) => {
    try {
        const characters = await allCharacters()
        res.status(200).json(characters)
    } catch (error: any) {
        res.status(400).json({
            error: error.message
        })
    }
})

characterRouter.get('/:id', async (req, res) => {
    try {
        const { id } = req.params
        if (!id || typeof id !== 'string') throw Error('missing data or incorrect type')

        const character = await characterById(id)
        if (!character || character.name === 'CastError') throw Error('character not found')
        res.json({ character })
    } catch (error: any) {
        res.status(400).json({error: error.message})
    }
})

export default characterRouter