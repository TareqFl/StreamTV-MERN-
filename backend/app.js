require('dotenv').config();
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');
const cookieSession = require('cookie-session');
const authRoute = require('./routes/authRoutes')
const router = require('./routes/routes')
const passport = require('passport');
const passportSetup = require('./passport')

const mongoose = require('mongoose');
const { urlencoded } = require('express');



const PORT = 5000

const app = express();

app.use(cookieSession({
    name: 'session',
    keys: ["Tareq"],
    maxAge: 24 * 60 * 60 * 1000
}))

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());


app.use(
    cors({
        origin: "http://localhost:3000",
        methods: "GET,POST,PUT,DELETE",
        credentials: true,
    })
);
app.use("/auth", authRoute);
app.use(router)

// 'mongodb+srv://admin-tareq:Test123@cluster0.ycu8b.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(process.env.MONGO_DB, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => app.listen(PORT, () => console.log(`Server is up and running on ${PORT}`)))
    .catch(err => console.log(err))