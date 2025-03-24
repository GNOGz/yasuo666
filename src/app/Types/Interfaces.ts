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
export interface hex {
    own:number;
    mm:number;
    bt:boolean;
}

export interface ButtonProps {
    title: string;
    color: string;
    handleClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  }
  
export interface PlayermenuProps {
    buttons: [ButtonProps, ButtonProps];
  }

export interface selecterHexMinion {
    selectMinion: number;
    selectHex: number;
  }