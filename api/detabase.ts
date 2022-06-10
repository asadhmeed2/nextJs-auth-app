import * as mongodb from "mongodb";


const url = process.env.MONGODB_URL!
const user = process.env.MONGODB_USER!
const password = process.env.MONGODB_PASSWORD!


export const databaseConfig = new mongodb.MongoClient(url , {auth: {username:user,password}})