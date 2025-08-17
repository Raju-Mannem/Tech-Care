import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Patients from "./components/LGrid/Patients";
import DiagnosisHistory from "./components/MiddleGrid/DiagnosisHistory";
import DiagnosisList, {type diagnosisItem} from "./components/MiddleGrid/DiagnosisList";
import axios from "axios";
import { toast } from 'sonner';
import LogoIcon from "./assets/logoIcon.svg";
import SearchButton from "./assets/search_FILL0_wght300_GRAD0_opsz24.svg";
import { type DiagnosisHistoryItem } from "../src/components/MiddleGrid/DiagnosisHistory"
import PatientProfile from "./components/RGrid/PatientProfile";
import LabResults from "./components/RGrid/LabResults";

interface Data {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: Date;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistoryItem[],
    temperature: {
      value: number;
      levels: string;
    };
  diagnostic_list: diagnosisItem[];
  lab_results: [string];
}

function App() {
  const [data, setData] = useState<Data[]>([]);
  const [currentProfile, setCurrentProfile] = useState(0);

  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("https://fedskillstest.coalitiontechnologies.workers.dev", {
            headers: {
              Authorization: "Basic Y29hbGl0aW9uOnNraWxscy10ZXN0",
            },
          })
          .then((res) => {
            setData(res.data);
          })
          .catch((error) => {
            setErr(error);
          });
      } catch (e: unknown) {
        setErr(e as string);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <Navbar />
      {loading && <div className="h-screen w-full flex justify-center items-center text-2xl font-manrope">
        <img src={LogoIcon} alt="logo icon" className="w-24 h-24 animate-spin"/>
  </div>}
      {err && <div className="h-screen w-full flex flex-col gap-2 justify-center items-center text-2xl text-red-500 font-manrope">
      something worong Try Again Later
      </div>}
      {data&&data.length>0&&
      <main className="h-full grid grid-cols-8 gap-4 justify-self-start place-items-start min-h-screen w-full py-4 font-manrope">
      <section className="col-span-2 flex flex-col justify-center items-start gap-4 h-screeen bg-[#ffffff] rounded-2xl">
        <div className="w-full flex justify-between items-center gap-2 px-8 pt-4">
          <strong className="text-[24px] text-[#072635]">Patients</strong>
        <button onClick={()=>toast.success('search page')}>
        <img src={SearchButton} alt="search button"/>
        </button>
        </div>
        <aside className="max-h-[920px] w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#072635] scrollbar-track-[#E3E4E6]">
      {data &&
        data.map(
          (
            patient: { name: string; profile_picture: string; age: number },
            index
          ) => (
            <Patients
              key={index}
              sno={index}
              name={patient.name}
              profile_picture={patient.profile_picture}
              age={patient.age}
              currentProfile = {currentProfile}
              setCurrentProfile = {setCurrentProfile}
            />
          )
        )      
      } 
      </aside>
</section>
<section className="col-span-4 flex flex-col justfiy-center items-start gap-6 rounded-4xl">
    <DiagnosisHistory bpData={data[currentProfile].diagnosis_history}/>
     <DiagnosisList diagnosisListData={data[currentProfile].diagnostic_list}/>
</section>
<section className="col-span-2 w-full flex flex-col justify-center items-start gap-4">
    <PatientProfile 
  name = {data[currentProfile].name}
  gender = {data[currentProfile].gender}
  profilePicture = {data[currentProfile].profile_picture}
  dateOfBirth = {data[currentProfile].date_of_birth}
  phoneNumber = {data[currentProfile].phone_number}
  emergencyContact = {data[currentProfile].emergency_contact}
  insuranceType = {data[currentProfile].insurance_type}
    />
      <LabResults results={data[currentProfile].lab_results}/>
</section>
    </main>
    }
    </>
  );
}

export default App;
