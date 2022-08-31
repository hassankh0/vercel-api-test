const express = require('express')
const app = express()

app.get('/GetDate', function (req, res) {
    var now = new Date();
    res.send(now)
})

app.get('/GetStudent', function (req, res) {
    var student = { id: 1, name: 'Samara' }
    res.send(student)
})

app.get('/GetAllStudents', function (req, res) {
    var data = []
    var student1 = { id: 1, name: 'Samara' }
    var student2 = { id: 2, name: 'Marc' }
    var student3 = { id: 3, name: 'Michel' }
    var student4 = { id: 4, name: 'Mahmoud' }
    data.push(student1)
    data.push(student2)
    data.push(student3)
    data.push(student4)

    res.send(data)
})

app.listen(process.env.PORT || 3000,
    () => console.log("Server is running..."));