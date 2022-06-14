import type { WithId ,Document } from 'mongodb'
export interface UserDocument extends WithId<Document> {
    id: string;
    name: string;
    tokenVersion:number;
    gitHubUserId:string;
}