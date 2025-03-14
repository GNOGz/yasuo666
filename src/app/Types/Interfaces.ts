import { gameMode, role,gameStatus} from "./type"

export interface agreementProp{
    name:string,
    defense:number,
    strategy:string
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