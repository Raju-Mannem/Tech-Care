import BirthIcon from "../../assets/BirthIcon.svg";
import FemaleIcon from "../../assets/FemaleIcon.svg";
import MaleIcon from "../../assets/MaleIcon.svg";
import PhoneIcon from "../../assets/PhoneIcon.svg";
import InsuranceIcon from "../../assets/InsuranceIcon.svg";

interface PatientProfileInterface {
  name: string;
  gender: string;
  profilePicture: string;
  dateOfBirth: Date;
  phoneNumber: string;
  emergencyContact: string;
  insuranceType: string;
}
const PatientProfile = ({
  name,
  gender,
  profilePicture,
  dateOfBirth,
  phoneNumber,
  emergencyContact,
  insuranceType,
}: PatientProfileInterface) => {
  return <div className="w-full text-[14px] flex flex-col gap-2 px-4">
    <div className="flex flex-col justify-center items-center gap-4">
        <img src={profilePicture} alt="patient profile" className="h-[200px] w-[200px]"/>
        <strong className="text-[24px]">{name}</strong>
    </div>
    <div className="flex justify-start items-center gap-2 mt-4">
        <img src={BirthIcon} alt="birth icon" />
        <span>
            Data of birth<br/>
            <strong>{dateOfBirth.toString()}</strong>
        </span>
    </div>
    <div className="flex justify-start items-center gap-2 mt-4">
        <img src={gender=="Male"?MaleIcon:FemaleIcon} alt="birth icon" />
        <span>
            Gender<br/>
            <strong>{gender}</strong>
        </span>
    </div>
    <div className="flex justify-start items-center gap-2 mt-4">
        <img src={PhoneIcon} alt="birth icon" />
        <span>
            Contact Info<br/>
            <strong>{phoneNumber}</strong>
        </span>
    </div>
    <div className="flex justify-start items-center gap-2 mt-4">
        <img src={PhoneIcon} alt="birth icon" />
        <span>
            Emergency Contacts<br/>
            <strong>{emergencyContact}</strong>
        </span>
    </div>
    <div className="flex justify-start items-center gap-2 mt-4">
        <img src={InsuranceIcon} alt="birth icon" />
        <span>
            Insurance Provideer<br/>
            <strong>{insuranceType}</strong>
        </span>
    </div>
  </div>;
};

export default PatientProfile;
