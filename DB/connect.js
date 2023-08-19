const mongoose = require ('mongoose')


mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser:true,
    
})

.then (()=>{
    console.log('Database connected Successfully');
})
.catch ((e)=>{
    console.log(e);
})
module.exports = mongoose