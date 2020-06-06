// const bodyParser = require('body-parser')
const express = require('express');
const app = express();
const PORT = 6000;
const cors = require('cors')

const { chuck } = require('./routes/chuck')
const mathRoutes = require('./routes/math')
const { ping } = require('./routes/ping')


app.get('/chuck', chuck)
app.use('/', mathRoutes)
// app.get('/ping', ping)
// app.delete('/reset', reset)
// app.post('/sum', sum)



app.use(cors())
app.use(express.json())



app.listen(PORT, () => {
    console.log(`Server running at: http://localhost:${PORT}/`)
});