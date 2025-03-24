
import "./css/hexagon.css";
import { HexBt } from "./HexBt";
interface data {
  Own: number, //0 1 2
  Minion: number, // -5 -4 -3 -2 -1  0  1  2  3  4  5 
  id: number,
  bt: boolean,
  off ? : boolean,
  type: string,
}
const pictures = ['/image/MMT1.jpg', '/image/MMT2.jpg', '/image/MMT3.jpg', '/image/MMT4.jpg', '/image/MMT5.jpg']

export const Hexagon = (data: data) => {
  
  var strokeHex = "black";
  var OwnColor = "fill-white";
  if (data.Own > 0) {
    OwnColor = "fill-Player1";
  } else if (data.Own < 0) {
    OwnColor = "fill-Player2";
  }
  let MMT = null;
  var MMImage = pictures[-1];
  if (data.Minion != 0) {
     MMImage = pictures[Math.abs(data.Minion) -1];
    if (data.Minion > 0 && data.off != true) {
      var Team = "fill-Player1";
    } else if((data.Minion < 0 && data.off != true)){
      var Team = "fill-Player2";
    }
    else {
      var Team = "fill-primary";
    }
    MMT = <g transform="translate(150,150) rotate(90) scale(1.5)">
      <use href="#hexagon" className={Team} stroke="black" strokeWidth="3" />
    </g>
   
  }

  return (

    <div className=" w-[100px] h-[100px] items-center" id={data.id.toString()}>
        
        {data.bt != false ? <div style = {{ marginTop: "26px",
          marginLeft: "26px",
          zIndex: "1",
        }} className="absolute">
          <HexBt index={data.id} type={data.type}></HexBt>
          </div> : null}
        
        {data.Minion != 0 ? <img src={MMImage}   width="40px"  style={{
          aspectRatio : "1/cos(30deg)",
          clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)",
          marginTop: "33px",
          marginLeft: "30px"
        }} className="absolute"></img> 
      : null}

      <svg width="100px" height="100px" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">        
      <defs>
        <polygon id="hexagon" points="0 -60,50 -30,50 30,0 60,-50 30,-50 -30,0, -60"/>
      </defs>
        
        <g transform="translate(150,150) rotate(90) scale(2)">
          <use href="#hexagon" className={OwnColor} stroke="black" strokeWidth="3" />
          <g strokeWidth="1" strokeLinecap="round">
            <line x1="0" y1="-60" x2="50" y2="-30"   stroke={strokeHex} />
            <line x1="50" y1="-30" x2="50" y2="30"   stroke={strokeHex} />
            <line x1="50" y1="30" x2="0" y2="60"     stroke={strokeHex} />
            <line x1="0" y1="60" x2="-50" y2="30"    stroke={strokeHex} />
            <line x1="-50" y1="30" x2="-50" y2="-30" stroke={strokeHex} />
            <line x1="-50" y1="-30" x2="0" y2="-60"  stroke={strokeHex} />
          </g>
        </g>

        ${MMT}
      
      </svg>

    </div>
  
  )
}

interface fdata {
  Minion : number, 
  string ? : number, 
}
export const Hexfreame = (data: fdata) => {
  return (
    <div className="relative w-[420px] h-[350px] flex items-center justify-center ">
    <svg 
      width="450px" 
      height="450px" 
      viewBox="0 0 300 300" 
      preserveAspectRatio="xMidYMid meet" 
      className="absolute w-[520px] h-[520px]"
    >        
      <defs>
        <polygon id="hexagon" points="0 -60,50 -30,50 30,0 60,-50 30,-50 -30,0, -60"/>
      </defs>
      <g transform="translate(150,150) rotate(90) scale(2)">
        <use href="#hexagon" stroke="black" strokeWidth="3" />
      </g>
    </svg>
      <img 
      src={pictures[data.Minion - 1]}  
      className="absolute w-[400px]"
      style={{
        aspectRatio: "1/cos(30deg)",
        clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)"
      }} 
    />
  </div>
  
    
  )
}
export default Hexagon