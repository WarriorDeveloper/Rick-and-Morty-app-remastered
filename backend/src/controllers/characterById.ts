import { Character } from "../models/Character"

const characterById =async (id:string) => {
    try {
        const foundCharacter = await Character.findById(id)
        return foundCharacter
    } catch (error: any) {
        return error
    }
}

export default characterById