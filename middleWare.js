const express = require("express");
const router = express.Router();

const middleware1 = (req, res, next) =>{
    req.middleWareDetails = "Dummy Details...";
    req.person = {name : "hello from middleware!"};
    next(); 
}

router.route('/:id')
    .get(middleware1, (req, res)=>{
        console.log(req.person);
        res.send(`The get method is called and the UserName is ${req.person.name} and the details are ${req.middleWareDetails}`);
    })
    .put((req, res)=>{
        res.send(`The put method is called and the UserName is ${req.person.name}`);
    })
    .delete((req, res)=>{
        res.send(`The delete method is called and the UserName is ${req.person.name}`);
    })

const users = [
    {
        name : "Kousik",
    },
    {
        name : "Raj as RK",
    },
    {
        name : "Sanjay as SK",
    },
    {
        name : "Akshith as AJ",
    },
    {
        name : "Dany as Dracrays",
    },
    {
        name : "Ram As janani",
    },
]

//this id refers to the url query's id
//the id value is copied to userIdforArrayIndex

router.param('id', (req, res, next, userIdforArrayIndex)=>{
    console.log(req.params.id);
    req.person = users[userIdforArrayIndex];
    next();
})

// router.param('id', (req, res, next, id)=>{
//     console.log(id);
// })

module.exports = router