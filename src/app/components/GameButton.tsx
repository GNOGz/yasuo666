const GameButton = ({title}:{title:string})=>{
    return(
        <button className="text-2xl text-outline-sm border-black border border-solid  px-1 bg-[#D9D9D9]">
            {title}
        </button>
    )
}

export default GameButton;