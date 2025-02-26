import AgreementMenu from "../components/AgreementMenu";
import PlayerStatus from "../components/PlayerStatus";

const playerAgreement = () => {
  return (
    <div className="flex justify-between bg-[url(https://images3.alphacoders.com/129/1291921.jpg)] p-5 min-h-screen ">
      <div className="flex items-start mt-14 ml-10">
        <PlayerStatus money={10000} team={5}></PlayerStatus>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <AgreementMenu count={1}/>
      </div>
      <div className="flex items-start flex-col-reverse mb-14 mr-10">
        <PlayerStatus money={10000} team={-5}></PlayerStatus>
      </div>

      <div>
        
      </div>
    </div>
  );
};

export default playerAgreement;
