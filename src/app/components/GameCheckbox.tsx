export default function GameCheckButton({checked}:{checked?:boolean}) {
  return (
    <input 
    className="checked:bg-green-400 w-[21px] h-[21px]" 
    type="checkbox"
    disabled={true}
    checked={checked?checked:false}
    >

    </input>
  );
}
