const express = require('express');
const app = express();
const healthRoutes = require('./routes/health.routes');
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const cookieParser = require('cookie-parser')
const notFoundMiddleware = require('./middleware/notFound.middleware');
const globalErrorHandler = require('./middleware/errorHandlermiddleware')
const userRoutes = require('./routes/user.routes')

app.use(helmet());//helps secure the express app by setting various HTTP headers
app.use(cors());//enable CORS for all routes it unblocks the cross orgin requests
app.use(express.json());//parse the JSON body of incoming requests
app.use(express.urlencoded({ extended: true }));//parse the URL-encoded body of incoming requests from html 

app.use(cookieParser())//cookie-parser middleware to parse cookies from incoming requests

app.use(morgan())
//app is express application


app.use('/api/v1/health', healthRoutes);
app.use('/api/v1/users', userRoutes);

app.use(notFoundMiddleware);
//below this the global error handler 
app.use(globalErrorHandler)
module.exports = app;