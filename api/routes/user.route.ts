import { githubFunc } from "api/controller/user.controller";
import  express  from "express";


const router = express.Router();


router.get('/github', githubFunc)


export default router;