import TestLogo from "../../assets/TestLogo.svg";
import HomeLogo from "../../assets/home_FILL0_wght300_GRAD0_opsz24.svg";
import GroupLogo from "../../assets/group_FILL0_wght300_GRAD0_opsz24.svg";
import CalenderLogo from "../../assets/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import ChatLogo from "../../assets/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import CreditCardLogo from "../../assets/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import SettingsLogo from "../../assets/settings_FILL0_wght300_GRAD0_opsz24.svg"
import MoreLogo from "../../assets/more_horiz_FILL0_wght300_GRAD0_opsz24.svg";
import seniorWoman from "../../assets/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc.png";

const index = () => {
  return (
    <header className="w-full flex justify-between items-center gap-2 rounded-full font-manrope font-bold text-[14px] px-6 py-2 bg-[#ffffff]">
      <aside>
        <img src={TestLogo} height="48px" width="211px" alt="Site Logo" />
      </aside>
      <nav>
        <ul className="list-none flex justify-between items-center gap-4">
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 hover:bg-[#01F0D0] px-3 py-2 rounded-full"
            >
              {" "}
              <img src={HomeLogo} height="16px" width="17px" alt="Home Logo" />
              Overview
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 bg-[#01F0D0] hover:bg-[#01F0D0] px-3 py-2 rounded-full"
            >
              {" "}
              <img
                src={GroupLogo}
                height="16px"
                width="17px"
                alt="About Logo"
              />
              Patients
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 hover:bg-[#01F0D0] px-3 py-2 rounded-full"
            >
              <img
                src={CalenderLogo}
                height="16px"
                width="17px"
                alt="Home Logo"
              />
              Schedule
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 hover:bg-[#01F0D0] px-3 py-2 rounded-full"
            >
              <img src={ChatLogo} height="16px" width="17px" alt="Home Logo" />
              Message
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex items-center justify-center gap-2 hover:bg-[#01F0D0] px-3 py-2 rounded-full"
            >
              <img
                src={CreditCardLogo}
                height="16px"
                width="17px"
                alt="Home Logo"
              />
              Transactions
            </a>
          </li>
        </ul>
      </nav>
      <figure className="flex items-center gap-3">
        <img src={seniorWoman} height="44px" width="44px" alt="user profile" />
        <aside className="border-[#EDEDED] border-r-2 pr-2">
          <strong className="text-[#072635]">
            Dr. Jose Simmons
          </strong>
          <figcaption className="text-[#707070] font-normal">
            General Practitioner
          </figcaption>
        </aside>
        <aside className="flex justify-center items-center gap-2">
          <img src={SettingsLogo} height="20px" width="19px" alt="user profile float-left" />
          <img src={MoreLogo} height="20px" width="19px" alt="user profile" className="rotate-90"/>
          </aside>
      </figure>
    </header>
  );
};

export default index;
