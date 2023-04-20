import express from 'express'
import morgan from 'morgan'

import { Character } from './models/Character'

const app = express()

app.use(morgan('dev'))

app.get('/', async (req, res) => {

    const test = new Character({
        id: '1',
        name: 'test',
        status: 'alive',
        species: 'human',
        gender: 'unknow',
        origin: 'unknow',
        image: 'ejemplo',
        fav: false
    })

    await test.save()

    res.json({
        message: 'hola mundo'
    })
})


export default app