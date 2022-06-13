import { getGitHubUser } from "api/services/github.service"
import { createUser, getUserByGitHubId } from "api/services/user.service";
import { Response,Request } from "express"
const githubFunc = async (req : Request, res : Response) => {
    const {code}=req.query
    const gitHubUser = await getGitHubUser(code as string);
    let user = await getUserByGitHubId(gitHubUser.id);
    if(!gitHubUser) user = await createUser(gitHubUser.name,gitHubUser.id)
    
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