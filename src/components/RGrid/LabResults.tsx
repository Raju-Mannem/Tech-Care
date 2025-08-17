import DownloadIcon from "../../assets/download_FILL0_wght300_GRAD0_opsz24.svg"
interface LabResultsInterface{
    results: string[];
}

const LabResults = ({results} : LabResultsInterface) => {
  return (
    <div className="bg-[#ffffff] rounded-2xl p-4">
        <h1 className="manrope font-bold text-[24px] text-[#072635]">Lab Results</h1>
        <div className="max-h-[200px] w-full text-[14px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#072635] scrollbar-track-[#E3E4E6]">
        {results.map((rec)=>(
        <div className="w-full flex justify-between items-start gap-2 my-6 px-4">
        <p>{rec}</p>
        <img src={DownloadIcon} alt="download icon h-[20px] w-[20px]" />
    </div>
        ))}
        </div>
    </div>
  )
}

export default LabResults