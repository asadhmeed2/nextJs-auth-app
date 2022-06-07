import cookieParser from "cookie-parser";
import cors from "cors"
import  express  from "express";


const app = express();

app.use(express.json())
app.use(cors({credentials:true,origin:process.env.CLIENT_URL}))
app.use(cookieParser())


app.get('/', (req, res) => res.json({message:'api is healthy'}))


app.get('/github', (req, res) =>{

})




app.listen(3000)
