const express = require("express");
const router = express.Router();


const cartoonItem = [];

const fetchData = async () => {

    try
    {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      response.json().then((data) => {
          
        const items = data.results;

        items.map((item)=>{

            // let obj = {};
            // obj.id = item.id;
            // obj.name = item.name;
            // obj.alive = item.alive;
            // obj.gender = item.gender;
            // obj.status = item.status;

            cartoonItem.push(item.name);
        })
        
      });
    }
    catch(err)
    {
      console.log(err);
    }

  }
  fetchData();

// router.get('/', (req, res)=>
// {
//     res.send(cartoonItem);
// })

router.get('/:id([0-9]{1})', (req, res)=>
{

    const searchId = Number(req.params.id);

    const output = cartoonItem.find((item)=>
    {
        return item.id === searchId;
    })

    output ? res.status(200).json(output) : res.status(500).json("User not Found");

})


router.get('/', (req, res)=>
{

    const searchName = req.query.name;

    // console.log(searchName);

    const output = cartoonItem.find((item)=>
    {
        return item === searchName;
    })
    
        // console.log(output);

      output ? res.status(200).json(output) : res.status(500).json("User not Found");
    // res.send("Hello from home page!")
})

module.exports = router