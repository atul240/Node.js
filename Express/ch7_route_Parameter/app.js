import express, { response } from 'express'

const app = express();
const port = process.env.PORT || '3000';

app.get('/', (req,res)=>{
    res.send(`Listining properly`)
})

// app.get(`/student/delete/:id`, (req,res)=>{
//     console.log(req.params);
//     res.send(`Student Deleted ${req.params.id}`)
// })
// app.get(`/student/delete/12`, (req,res)=>{
//     res.send(`Student Deleted 12`)
// })
// app.get(`/student/delete/13`, (req,res)=>{
//     res.send(`Student Deleted 13`)
// })

app.get(`/product/order/:year/and/:month`, (req,res)=>{
    console.log(req.params);
    const {year, month} = req.params;
    res.send(`Year ${year} and Month ${month}`);
});

app.get(`/product/:category/:name`, (req,res)=>{
    console.log(req.params);    //{ category: 'cream', name: 'nivia' }
    res.send(`Product Name ${req.params.category} and ID ${req.params.name}`);
});

app.get(`/train/:from-:to`, (req,res)=>{
    console.log((req.params));
    const {from, to} = req.params;
    res.send(`Travelling From: ${from} to ${to}`)
})


// reg expression

app.get('/student/delete/:id([0-9]{2})', (req,res)=>{
    console.log(req.params);
    res.send(`Student Deleted ${req.params.id}`)
})

app.listen(port, ()=>{
    console.log(`Server listening at https://localhost:${port}`);
})


