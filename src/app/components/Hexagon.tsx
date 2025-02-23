
import "./css/hexagon.css";
interface data {
  Own: number, //0 1 2
  Minion: number, // -5 -4 -3 -2 -1  0  1  2  3  4  5 
}
const pitures = ['/image/MMT1.jpg', '/image/MMT2.jpg', '/image/MMT3.jpg', '/image/MMT4.jpg', '/image/MMT5.jpg']

export const Hexagon = (data: data) => {
  
  var strokeHex = "black";
  var OwnColor = "white";
  if (data.Own === 1) {
    OwnColor = "#CCDF92"
  } else if (data.Own === 2) {
    OwnColor = "#DE3163"
  }
  let MMT = null;
  let MM = null;
  var MMImage = pitures[-1];
  if (data.Minion != 0) {
     MMImage = pitures[Math.abs(data.Minion) -1];
    if (data.Minion > 0) {
      var Team = "#CCDF92";
    } else {
      var Team = "#DE3163";
    }
    MMT = <g transform="translate(150,150) rotate(90) scale(1.5)">
      <use href="#hexagon" fill={Team} stroke="black" strokeWidth="3" />
    </g>
    MM =  <g transform="translate(150,150) rotate(90) scale(1)">
    <use href="#hexagon" fill="url(#hexagon-pattern)" stroke="black" strokeWidth="3" /></g>
  }

  return (

    <div>
      <svg width="100px" height="100px" viewBox="0 0 300 300" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">        
      <defs>
        <polygon id="hexagon" points="
                50,0 100,30 100,90 50,120 0,90 0,30
            "transform="translate(-50,-60)" />
        <pattern id="hexagon-pattern" patternUnits="userSpaceOnUse" width="100" height="100" >
      <image href={MMImage} transform="rotate(-90,50,50)" width="100" height="100"/>
    </pattern>
      </defs>

        <g transform="translate(150,150) rotate(90) scale(2)">
          <use href="#hexagon" fill={OwnColor} stroke="black" strokeWidth="3" />
          <g strokeWidth="1" strokeLinecap="round">
            <line x1="0" y1="-60" x2="50" y2="-30" stroke={strokeHex} />
            <line x1="50" y1="-30" x2="50" y2="30" stroke={strokeHex} />
            <line x1="50" y1="30" x2="0" y2="60" stroke={strokeHex} />
            <line x1="0" y1="60" x2="-50" y2="30" stroke={strokeHex} />
            <line x1="-50" y1="30" x2="-50" y2="-30" stroke={strokeHex} />
            <line x1="-50" y1="-30" x2="0" y2="-60" stroke={strokeHex} />
          </g>
        </g>

        ${MMT}
        ${MM}
       
      </svg>

    </div>
  
  )
}