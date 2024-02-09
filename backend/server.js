const express=require('express')
const app=express();
const authent=require('./Routes/authent')
const board=require('./Routes/board')
const mongoose=require('mongoose')
const cors=require('cors')
const session= require('express-session');
const mongoDB=require('connect-mongodb-session')(session);

mongoose.connect("mongodb://localhost:27017/authentification").
then(
    ()=>{console.log('Connected to DB...')}
)

const mongoDBStore=new mongoDB({
    uri:"mongodb://localhost:27017/authentification",
    collection:'mySessions'
})

app.use(session(
    {
        secret:"secret-mission",
        cookie:{
            sameSite:true,
            maxAge:3*60*60*1000,
            httpOnly:true,
            secure:false
        },
        saveUninitialized:false,
        resave:false,
        store: mongoDBStore,
    }
))

app.use(cors({
    origin:"http://localhost:3000",
    credentials:true,
    allowedHeaders:"Content-Type",
    methods: ['POST', 'PUT', 'GET', 'OPTIONS', 'HEAD','DELETE']
}
))

app.use(express.json())

app.use(express.urlencoded())

app.use('/authentification',authent);

app.use('/board',board)

app.listen(5000,()=>{
    console.log('Listening on port 5000...')
})