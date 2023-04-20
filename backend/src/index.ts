import app from "./app"
import connection from "./db"

connection().then(()=>app.listen(3001, ()=>console.log('server on port 3001')))