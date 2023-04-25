// import cors from 'cors';
const express = require("express");
const app = express()

const cors = require("cors");

const homePage = require('./home.js')
const aboutPage = require('./about.js')
// const loginPage = require('./login.js')
// const registerPage = require('./register.js')
const servicePage = require('./service.js')
const middleWarePage = require('./middleWare.js')

app.get('/', (req, res)=>{
    res.send("Hello From main page!")
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(cors());
app.use(express.json());

app.use('/home', homePage)
app.use('/about', aboutPage)
// app.use('/login', loginPage)
// app.use('/register', registerPage)
app.use('/service', servicePage)
app.use('/middleWare', middleWarePage)


app.listen(8800, () => {
    console.log("API working at 8800!");
  });

