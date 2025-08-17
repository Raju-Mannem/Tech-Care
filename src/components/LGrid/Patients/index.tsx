import React from "react";
import MoreLogo from "../../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";

interface Patients {
  sno: number;
  name: string;
  profile_picture: string;
  age: number;
  currentProfile: number;
  setCurrentProfile:  React.Dispatch<React.SetStateAction<number>>;
}

const index = ({ name, profile_picture, age, currentProfile, sno, setCurrentProfile }: Patients) => {
  return (
    <button className={`w-full ${currentProfile==sno&&(`bg-[#D8FCF7]`)} flex justify-between items-center px-4 my rounded`}
    onClick={()=>{setCurrentProfile(sno)}}
    >
      <span className="flex justify-between items-center gap-4 px-4 py-4">
      <img
        src={profile_picture}
        alt={name}
        className="float-left h-[48px] w-[48px]"
      />
      <span className="text-[14px] text-left">
        <p className="font-bold">{name}</p>
        <p className="flex-self">{age} years old</p>
      </span>
      </span>
      <div>
        <img src={MoreLogo} 
        alt="about profile" 
        height="4px"
        width="18px"
        />
      </div>
    </button>
  );
};

export default index;
