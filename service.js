const express = require("express");
const router = express.Router();

// router.use(express.static('public'))

// router.get('/', (req, res)=>{
//     res.render('localhost:8800/public/contact.html');
// })
// router.get('/', (req, res)=>{
//     res.json("Hello From Service page!");
// })

router.get('/new', (req, res)=>{
    res.render('users/new');
})


// let newIndex = 2;

router.post('/', (req, res)=>{
    services.push({serviceName:req.body.serviceName, serviceCost:req.body.serviceCost, serviceTime:req.body.serviceTime});
    // newIndex = newIndex + 1;
    // res.redirect(`/service/${newIndex}`) 
    res.redirect(`/service/${services.length-1}`)       
})






router.route('/:id')
.get((req, res)=>{
        res.send(req.details);
})
    
    
// const usersData = [
//     {
//         name:"Kousik"
//     },
//     {
//         name:"Akshith"
//     },
//     {
//         name:"Sanjay"
//     }
// ]

const services = [
    {
        serviceName : "Tester",
        serviceCost : 250,
        serviceTime : 30,
    },
    {
        serviceName : "Back End",
        serviceCost : 300,
        serviceTime : 20,
    },
    {
        serviceName : "Developer",
        serviceCost : 500,
        serviceTime : 39,
    },
    {
        serviceName : "Non Technical",
        serviceCost : 150,
        serviceTime : 17,
    },
    {
        serviceName : "Front End",
        serviceCost : 400,
        serviceTime : 50,
    },
    
]

module.exports = services;

router.param("id", (req, res, next, userId)=>{
    req.details = services[userId];
    next();
})











// router.get('/:id', (req, res)=>{

//     const searchId = Number(req.params.id);

//     // const searchId = Number(req.query.num)
//     // console.log(searchId)

//     const output = usersData.find((item)=>{
//         return item.id === searchId;
//     })

//     output ? res.status(200).send(output.name) : res.status(500).json("User not Found");
// })




module.exports = router



