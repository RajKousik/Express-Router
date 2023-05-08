// import cors from 'cors';
const express = require("express");
const app = express()

const cors = require("cors");

const homePage = require('./home.js')   //no need to mention .js
const aboutPage = require('./about.js')
// const loginPage = require('./login.js')
// const registerPage = require('./register.js')
const servicePage = require('./service.js')
const middleWarePage = require('./middleWare.js')


// app.use(express.static('public'))


app.set('view engine', 'ejs');

app.get('/', (req, res)=>{
    res.render('index', {text:'Kousik'});
})

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.use(express.urlencoded({extended:true}))

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

