import express from "express"
import dotenv from "dotenv";
import authRouter from "./routes/auth.route.js"
import connectingToMongoDB from "./db/connectToMongoDb.js";


const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(express.json())

app.use("/api/auth",authRouter);

app.get("/",(req,res) => {
 return res.send("Hello From the server side!").status(200)
});

app.listen(PORT,() => {
    connectingToMongoDB()
    console.log(`Server is running on ${PORT}`)
});