const express = require('express');
const app = express();

const port = 8000;

app.get("/",(req,res)=>{
  return res.send('hello main hoon');
})

app.get("/about",(req,res)=>{
  return res.send("hello main bhi hoon");
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});