const app = require('./app')
const dotenv = require('dotenv')
const ConnectDB = require('./config/db')
dotenv.config()
const PORT = process.env.PORT || 3000;


//db connection
ConnectDB()

app.listen(PORT, () => {
    console.log(`server is running at PORT no ${PORT}`)
})