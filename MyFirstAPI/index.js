const express = require('express')

const app = express() //llama a express como funcion
const port = 3006
const host = 'localhost'

app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.get('/courses/aws',(req,res)=>{
    console.log(req)
    res.send({
        instructor: "John",
        numbre_of_students: 50,
        students: [
            {
                name: "Jane",
                grade: 90
            },
            {
                name: "Joe",
                grade: 80
            },
            {
                name: "Jack",
                grade: 85
            }
        ]
    })
})

app.listen(port,()=>{
    console.log(`Server is running at http://${host}:${port}`)
})
