import { gameMode, role,gameStatus} from "./type"

export interface agreementProp{
    name:string,
    defense:number,
    strategy:string
}
export interface RoomID {
    roomId:string | null | undefined
}
export interface PlayerProfileInterface{
    userName:string | null | undefined,
    role:string | null | undefined,
    roomId:string | null | undefined,
}

export interface agreementFieldState {
    name:String,
    defense:Number ,
    strategy:string,
}

export interface gameSetting {
    gameStatus : gameStatus
    mode: gameMode
}

export interface userProfile{
    name:string | null,
    role:string | null,
    roomId:string | null
}