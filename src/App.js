import "./App.css";
import MainDash from "./components/mainDash/MainDash";
import Sidebar from "./components/sidebar/Sidebar";
import RightSide from "./components/RigtSide/RightSide";

function App() {
  return (
    <div className="App">
      <div className="appglass">
        <Sidebar />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default App;
