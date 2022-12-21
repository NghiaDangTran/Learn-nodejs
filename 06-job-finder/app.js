require('express-async-errors')
const express = require('express');
const app = express();




//security packages
const helmet = require("helmet")
const cors = require('cors');
const xss = require('xss-clean');
const rate_limiter = require('express-rate-limit');

// error handeler
const notFound = require("./middleware/not-found");
const errHandlerMiddleware = require("./middleware/error-handeler")

// extra packages
const authRoute = require("./routes/auth")
const jobRoute = require("./routes/jobs")
const connectDb = require('./db/connect')
const auth = require('./middleware/authentication')

//swagger ui
const swagger = require('swagger-ui-express')
const YAML = require('yamljs')
const swaggerDoc = YAML.load('./swagger.yaml')



app.set('trust proxy', 1)
app.use(express.json())


app.use(rate_limiter({
    window: 15 * 60 * 1000,
    max: 100,

}))
app.use(helmet())
app.use(cors())
app.use(xss())


//routes
app.get("/", (req, res) => {
    res.send("<h1>JOB API DOC</h1> <a href='/api-doc'>Documentation</a>")
})
app.use('/api-doc', swagger.serve,swagger.setup(swaggerDoc))
app.use('/api/v1/auth', authRoute)
app.use('/api/v1/jobs', auth, jobRoute)

app.use(notFound)
app.use(errHandlerMiddleware)



const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDb(process.env.MONGO_URI).then(() => { console.log('connected to database') })

        app.listen(port, () => { console.log('server is listening on port 3000') })
    } catch (error) {
        console.log(error)
    }


}
start()


