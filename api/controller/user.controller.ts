import { getGitHubUser } from "api/services/github.service"
import { Response,Request } from "express"
const githubFunc = async (req : Request, res : Response) => {
    const {code}=req.query
    const gitHubUser = await getGitHubUser(code as string)
}

const refreshHandler = async (req : Request, res : Response) => {

}

const logoutHandler = (req : Request, res : Response) => {

}


export {
    githubFunc,
    refreshHandler,
    logoutHandler
}