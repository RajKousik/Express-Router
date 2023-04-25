const express = require("express");
const router = express.Router();

router.get('/', (req, res)=>{
    res.json("Hello From Service page!");
})

const usersData = [
    {
        "id":1,
        "name":"Kousik"
    },
    {
        "id":2,
        "name":"Akshith"
    },
    {
        "id":3,
        "name":"Sanjay"
    }
]


router.get('/:id', (req, res)=>{

    const searchId = Number(req.params.id);

    // const searchId = Number(req.query.num)

    // console.log(searchId)

    const output = usersData.find((item)=>{
        return item.id === searchId;
    })

    output ? res.status(200).send(output.name) : res.status(500).json("User not Found");
})




module.exports = router



