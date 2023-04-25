const express = require("express");
const router = express.Router();

const middleware1 = (req, res, next) =>{
    // req.middleWareDetails = "Dummy Details...";
    // req.person = {name : "hello from middleware!"};
    next(); 
}

router.route('/:id')
    .get(middleware1, (req, res)=>{
        // console.log(req.person);
        // res.send(req.person);
        res.send(`The get method is called and the user name is ${req.person.name} and profession is ${req.person.role}`);
    })
    .put((req, res)=>{
        res.send(`The put method is called and the user name is ${req.person.name} and profession is ${req.person.role}`);
    })
    .delete((req, res)=>{
        res.send(`The delete method is called and the user name is ${req.person.name} and    profession is ${req.person.role}`);
    })

const users = [
    {
        role : "Content Creator",
        name : "Kousik",
    },
    {
        role : "App Developer",
        name : "Raj",
    },
    {
        role : "Web Developer",
        name : "RK",
    },
    {
        role : "Youtuber",
        name : "Maeve",
    },
    {
        role : "Student",
        name : "Otis",
    }

]

//this id refers to the url query's id
//the id value is copied to userIdforArrayIndex

router.param('id', (req, res, next, userIdforArrayIndex)=>{
    // console.log(req.params.id);
    req.person = users[userIdforArrayIndex];
    next();
})

// router.param('id', (req, res, next, id)=>{
//     console.log(id);
// })

module.exports = router