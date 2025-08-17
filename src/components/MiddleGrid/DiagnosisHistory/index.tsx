import React, { useState, useMemo } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  type ChartOptions,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Card from "./Card";
import ArrowUp from "../../../assets/ArrowUp.svg";
import ArrowDown from "../../../assets/ArrowDown.svg";
import Respiratoryrate from "../../../assets/respiratory-rate.svg";
import Temperature from "../../../assets/temperature.svg";
import HeartBPM from "../../../assets/HeartBPM.svg";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export interface DiagnosisHistoryItem {
  month: string;
  year: number;
  blood_pressure: {
    systolic: { value: number; levels: string };
    diastolic: { value: number; levels: string };
  };
  heart_rate: { value: number; levels: string };
  respiratory_rate?: { value: number; levels: string };
  temperature?: { value: number; levels: string };
}
interface DiagnosisHistoryProps {
  bpData: DiagnosisHistoryItem[];
}

const ranges = [
  { label: "Last 1 Month", months: 1 },
  { label: "Last 3 Months", months: 3 },
  { label: "Last 6 Months", months: 6 },
  { label: "Last 12 Months", months: 12 },
  { label: "Last 2 Years", months: 24 },
  { label: "Last 3 Years", months: 36 },
  { label: "Last 4 Years", months: 48 },
];

const Index: React.FC<DiagnosisHistoryProps> = ({ bpData = [] }) => {
  const [selectedRange, setSelectedRange] = useState(6);

  //   const now = new Date();
  //   return bpData.filter((item) => {
  //     const itemDate = new Date(`${item.month} 1, ${item.year}`);
  //     // Calculate difference in months between now and itemDate
  //     const diffMonths =
  //       (now.getFullYear() - itemDate.getFullYear()) * 12 +
  //       (now.getMonth() - itemDate.getMonth());

  //     return diffMonths < selectedRange;
  //   });
  // }, [bpData, selectedRange]);
  const filteredBpData = bpData.slice(0, selectedRange);

  const { labels, systolicData, diastolicData } = useMemo(() => {
    if (!bpData || bpData.length === 0)
      return { labels: [], systolicData: [], diastolicData: [] };
    // Sort data chronologically
    const sortedData = [...filteredBpData].sort((a, b) => {
      const dateA = new Date(`${a.month} 1, ${a.year}`);
      const dateB = new Date(`${b.month} 1, ${b.year}`);
      return dateA.getTime() - dateB.getTime();
    });

    return {
      labels: sortedData.map(
        (entry) => `${entry.month.slice(0, 3)} ${entry.year}`
      ),
      systolicData: sortedData.map(
        (entry) => entry.blood_pressure.systolic.value
      ),
      diastolicData: sortedData.map(
        (entry) => entry.blood_pressure.diastolic.value
      ),
    };
  }, [bpData, filteredBpData]);

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolicData,
        borderColor: "#ff6384",
        backgroundColor: "#ff6384",
        tension: 0.3,
      },
      {
        label: "Diastolic",
        data: diastolicData,
        borderColor: "#36a2eb",
        backgroundColor: "#36a2eb",
        tension: 0.3,
      },
    ],
  };

  const options: ChartOptions<"line"> = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "right",
        labels: {
          usePointStyle: true,
          pointStyle: "circle",
          padding: 20,
        },
      },

      title: {
        display: false,
        text: "Blood Pressure",
        align: "start",
        padding: {
          top: 10,
          bottom: 10,
        },
      },
    },
  };
  return (
    <div className="w-full h-full flex flex-col justify-start items-start gap-2 bg-[#ffffff] px-4 py-2 rounded-lg">
      <h1 className="manrope font-bold text-[24px] text-[#072635] mb-2">Diagnosis History</h1>
      <div className="w-full h-full flex justify-start items-start gap-2 bg-[#F4F0FE] rounded-xl p-2">
        <div className="basis-6/8">
          <div className="flex justify-between items-center">
            <strong className="text-[18px] mb-[8px]">Blood Pressure</strong>
            <select
              value={selectedRange}
              onChange={(e) => setSelectedRange(parseInt(e.target.value))}
              className="text-[14px] mb-[16px] py-[4px] px-[8px] focus:outline-none"
            >
              {ranges.map((range) => (
                <option key={range.months} value={range.months}>
                  {range.label}
                </option>
              ))}
            </select>
          </div>
          <Line data={data} options={options} />
        </div>
        <div className="basis-2/8 h-full flex flex-col gap-2 text-sm py-2">
          <div>
            <span className="inline-block h-[12px] w-[12px] bg-[#ff6384] rounded-full"></span>{" "}
            <strong className="text-[14px]">Systolic</strong>
            <p className="text-[22px] font-bold mt-[2px]">
              {bpData[bpData.length - 1].blood_pressure.systolic.value}
            </p>
            <p className="text-[14px] mt-[4px] flex items-center gap-1">
              {bpData[bpData.length - 1].blood_pressure.systolic.levels ==
              "Lower than Average" ? (
                <img
                  src={ArrowDown}
                  alt="arrow down"
                  className="h-[5px] w-[10]"
                />
              ) : (
                <img src={ArrowUp} alt="arrow up" className="h-[5px] w-[10]" />
              )}
              {bpData[bpData.length - 1].blood_pressure.systolic.levels}
            </p>
          </div>
          <div className="border-t-1 border-[#CBC8D4] pt-2">
            <span className="inline-block h-[12px] w-[12px] bg-[#8C6FE6] rounded-full"></span>{" "}
            <strong className="text-[14px]">Diastolic</strong>
            <p className="text-[22px] font-bold mt-[2px]">
              {bpData[bpData.length - 1].blood_pressure.diastolic.value}
            </p>
            <p className="text-[14px] mt-[4px] flex items-center gap-1">
              {bpData[bpData.length - 1].blood_pressure.diastolic.levels ==
              "Lower than Average" ? (
                <img
                  src={ArrowDown}
                  alt="arrow down"
                  className="h-[5px] w-[10]"
                />
              ) : (
                <img src={ArrowUp} alt="arrow up" className="h-[5px] w-[10]" />
              )}
              {bpData[bpData.length - 1].blood_pressure.diastolic.levels}
            </p>
          </div>
        </div>
      </div>
      <div></div>
      <div className="w-full flex justify-start items-center gap-3">
        <Card
          image={Respiratoryrate}
          color="bg-[#E0F3FA]"
          info="Respiratory Rate"
          value={`${bpData[0].respiratory_rate?.value} bpm`}
          levels={bpData[0].respiratory_rate?.levels || "No Value"}
        />
        <Card
          image={Temperature}
          color="bg-[#FFE6E9]"
          info="Tempature"
          value={`${bpData[0].temperature?.value}\u00B0F`}
          levels={bpData[0].temperature?.levels || "No Value"}
        />
        <Card
          image={HeartBPM}
          color="bg-[#FFE6F1]"
          info="Heart Rate"
          value={`${bpData[0].heart_rate.value} bpm`}
          levels={bpData[0].heart_rate.levels}
        />
      </div>
    </div>
  );
};

export default Index;
