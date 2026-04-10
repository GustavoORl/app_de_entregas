import express from "express";
import authRouter from "./routers/authRouter.js"
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

app.use(express.json());

app.get('/', (req, res)=>{
    res.json("Hello Word!")
})

app.use('/auth', authRouter)
app.use('/user', userRouter);
app.use('/product', productRouter);

app.listen(PORT, ()=>{
    console.log(`Server rodando na porta ${PORT}`);
})