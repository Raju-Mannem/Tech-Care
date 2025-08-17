export interface diagnosisItem {
    name: string;
    description: string;
    status: string;
}

interface DiagnosisListProps {
  diagnosisListData: diagnosisItem[];
}

const DiagnosisList = ( {diagnosisListData}: DiagnosisListProps) => {
  return (
    <div>
    <div className="bg-[#F6F7F8] rounded-full">
    <table className="w-full table-fixed text-[14px] border-spacing-2 ">
    <thead>
    <tr>
      <th className="p-4 text-left">Diagnosis/Problem</th>
      <th className="p-4 text-left">Description</th>
      <th className="p-4 text-left">Status</th>
    </tr>
  </thead>
  </table>
  </div>
  <div className="max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-[#072635] scrollbar-track-[#E3E4E6]">
<table className="w-full table-fixed text-[14px] border=spacing-2">
  <tbody>
   {diagnosisListData&& diagnosisListData.map(
    (rec:diagnosisItem, key:number)=>(
        <tr key={key}>
            <td className="pt-6 p-4">{rec.name}</td>
            <td className="pt-6 p-4">{rec.description}</td>
            <td className="pt-6 p-4">{rec.status}</td>
        </tr>
    )
   )}
  </tbody>
    </table>
    </div>
    </div>
  )
}

export default DiagnosisList