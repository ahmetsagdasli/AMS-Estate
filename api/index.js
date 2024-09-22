import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRouter from "./routes/user.route.js";




dotenv.config()

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log('MongoDB connection is successful.'))
  .catch((err) => console.log('The connection has been failed.'))

const app = express()
const port = 3001

app.listen(port, () => {
  console.log(`server ${port} portunda calisiyor`)
})

app.use("/api/user", userRouter)
