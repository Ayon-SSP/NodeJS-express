// //to run : node filename.js
// const express = require('express')
// const app = express()
// const port = 3000

// app.get('/', (req, res) => res.send('Hello World!'))

// app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

const { readFile, readFileSync } = require('fs');
// importing express
const express = require('express')
const app = express()
// const port = 3000


// readFile('./home.html','utf8',(err, html) =>{
//     if (err) {
//         response.status(500).send('sorry, out of order')
//     }
//     console.log(html)
// })


app.get('/', (request, response) => {
    readFile('./home.html','utf8',(err, html) =>{
        if (err) {
            response.status(500).send('sorry, out of order')
        }
        response.send(html);
    })

}); // 1st arg & 2nd arg

// app.get('/', (req, res) => {
// //   res.send('Hello World!')
//     readFile('home.html')
// })

app.listen(process.env.PORT || 3000, () => console.log('App avaiable on http://localhost:3000 🎉⛵'))