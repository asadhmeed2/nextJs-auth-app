import { githubFunc, logoutHandler, refreshHandler } from "api/controller/user.controller";
import  express  from "express";


const router = express.Router();


router.get('/github', githubFunc)

router.post('/refresh', refreshHandler)

router.post("/logout",logoutHandler)


export default router;