
import "./css/hexagon.css";
interface data {
  Own: number, //0 1 2
  Minion: number, // -5 -4 -3 -2 -1  0  1  2  3  4  5 
}
const pitures = ['/image/MMT1.jpg', '/image/MMT2.jpg', '/image/MMT3.jpg', '/image/MMT4.jpg', '/image/MMT5.jpg']

export const Hexagon = (data: data) => {
  
  var strokeHex = "black";
  var OwnColor = "fill-white";
  if (data.Own > 0) {
    OwnColor = "fill-Player1";
  } else if (data.Own < 0 ) {
    OwnColor = "fill-Player2";
  }
  let MMT = null;
  var MMImage = pitures[-1];
  if (data.Minion != 0) {
     MMImage = pitures[Math.abs(data.Minion) -1];
    if (data.Minion > 0) {
      var Team = "fill-Player1";
    } else {
      var Team = "fill-Player2";
    }
    MMT = <g transform="translate(150,150) rotate(90) scale(1.5)">
      <use href="#hexagon" className={Team} stroke="black" strokeWidth="3" />
    </g>
   
  }

  return (

    <div className=" w-[100px] h-[100px] items-center" >
      
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