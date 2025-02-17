  import "./css/hexagon.css";
import MMT1 from '/image/MMT1.jpg'; 
import MMT2 from '/image/MMT2.jpg'; 
import MMT3 from '/image/MMT3.jpg'; 
import MMT4 from '/image/MMT4.jpg'; 
import MMT5 from '/image/MMT5.jpg';//Issue about image

const pitures = ['/image/MMT1.jpg', '/image/MMT2.jpg','/image/MMT3.jpg','/image/MMT4.jpg',,'/image/MMT5.jpg']
type data = [string,boolean,number]; // color [P1,P2,Empty] MM [Null,0,1] MMtype [Null,1,2,3,4,5]  
let datas: data[][] = [];
export const Hexagon = () => {
    const [Team, Minion,MinionType] = datas;
    const hexagonStyle = {};    
    return (
        
        <div>
        <div className="hexagonP1"></div>
        <div className="hexagonMMB"></div>
        <img className="hexagonMM" src={pitures[0]} alt="Minion"></img> 
        <div className="hexagonMMBP1"></div>
        <div className="hexagon"></div>
        </div>
    )
}