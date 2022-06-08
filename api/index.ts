import cookieParser from "cookie-parser";
import cors from "cors"
import  express  from "express";

import userRouter from './routes/user.route'

const app = express();

app.use(express.json())
app.use(cors({credentials:true,origin:process.env.CLIENT_URL}))
app.use(cookieParser())


app.get('/', (req, res) => res.json({message:'api is healthy'}))


app.use("/user",userRouter)




app.listen(3000)
