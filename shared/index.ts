import type { WithId ,Document } from 'mongodb'
export interface UserDocument  {
    id: string;
    name: string;
    tokenVersion:number;
    gitHubUserId:string;
}