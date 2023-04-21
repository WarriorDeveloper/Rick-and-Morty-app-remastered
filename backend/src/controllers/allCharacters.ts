import { Character } from "../models/Character"

const allCharacters = async()=>{
    try {
        const characters = await Character.find({})
        return characters
    } catch (error) {
        return error
    }
}

export default allCharacters