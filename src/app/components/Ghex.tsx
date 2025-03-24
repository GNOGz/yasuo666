
interface data {
  Minion : number, 
  size ? : number, 
}
const pitures = ['/image/MMT1.jpg', '/image/MMT2.jpg', '/image/MMT3.jpg', '/image/MMT4.jpg', '/image/MMT5.jpg']

export const Ghex = (data: data) => {
  let scale = "absolute scale-100"
  {data.size != null ?(scale = "absolute scale-"+ data.size) : null}
  return (
    <img src={pitures[data.Minion-1]} width="200px" className={scale}   style={{
      aspectRatio : "1/cos(30deg)",
      clipPath: "polygon(50% -50%,100% 50%,50% 150%,0 50%)"
    }} ></img>
    
  )
}