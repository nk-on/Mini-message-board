const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
app.get('/',(res,req)=>{
    
});
app.get('/new',(res,req)=>{
    
})
app.listen(port,()=>{
    console.log('i work')
})