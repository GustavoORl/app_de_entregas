import express from "express";
import userRouter from "./routers/userRouter.js"

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Hello Word!")
})

app.use('/user', userRouter);

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
})