const express=require('express');
const app=express();


// get a list of 5 jokes

app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A joke',
            content:'this is a joke'
        },
        {
            id:2,
            title:'B joke',
            content:'this is a joke'
        },
        {
            id:3,
            title:'C joke',
            content:'this is a joke'
        },
        {
            id:4,
            title:'D joke',
            content:'this is a joke'
        }
    ]

    res.send(jokes);
})
app.get('/',(req,res)=>{
    res.send('Server is ready')
})

const PORT=process.env.PORT || 5000
app.listen(PORT,()=>{
    console.log(`Server at http://localhost:${PORT}`)
})