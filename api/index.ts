import cookieParser from "cookie-parser";
import cors from "cors"
import  express  from "express";
import { databaseConfig } from "./detabase";

import userRouter from './routes/user.route'

const app = express();

app.use(express.json())
app.use(cors({credentials:true,origin:process.env.CLIENT_URL}))
app.use(cookieParser())


app.get('/', (req, res) => res.json({message:'api is healthy'}))


app.use("/user",userRouter)




async function main(){
    await databaseConfig.connect()

    app.listen(3000)
}

main()
