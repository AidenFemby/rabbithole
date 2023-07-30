import yes from "./yes.png";
import "./App.css";
import { IoIosStats } from "react-icons/io";
import { BsSpotify } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";
import { RiTimerLine } from "react-icons/ri";
import { SlCalender } from "react-icons/sl";
import { LuSettings2 } from "react-icons/lu";
import { AiFillFilePdf } from "react-icons/ai";
function App() {
  return (
    <div className="App">
      <h1>RabbitHole</h1>
      <div className="home-container">
        <div className="side-bar">
          <div
            className="icon-container"
            style={{
              borderTopRightRadius: "12px",
              borderTopLeftRadius: "12px",
            }}
          >
            <BsSpotify className="icon" />
          </div>
          <div className="icon-container">
            <CgNotes className="icon" />
          </div>
          <div className="icon-container">
            <IoIosStats className="icon" />
          </div>
          <div className="icon-container">
            <RiTimerLine className="icon" />
          </div>
          <div className="icon-container">
            <SlCalender className="icon" />
          </div>
          <div className="icon-container">
            <AiFillFilePdf className="icon" />
          </div>
          <div className="icon-container radiusbuttom">
            <LuSettings2 className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
