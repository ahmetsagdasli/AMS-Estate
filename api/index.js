import express from "express";
const app=express();
const port =3001;

app.get("/",(req,res)=>{
  res.send("merhaba")
});

app.listen(port,()=>{
  console.log(`server ${port} portunda calisiyor`);

});