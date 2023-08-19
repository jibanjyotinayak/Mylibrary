if (process.env.NODE_ENV !== 'production'){
    require ('dotenv').config()

}

const express = require('express')
const app = express()
const expressLayouts =  require('express-ejs-layouts')

app.set('view engine', 'ejs')
app.set ('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use (expressLayouts)
app.use(express.static('public'))




const indexRouter  = require('./routes/index')
app.use(indexRouter)
require('./DB/connect')




app.listen(3300,()=>{
    console.log('server is on 3000');
})
