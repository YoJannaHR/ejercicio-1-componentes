import "./App.css";
import AboutMe from "./components/AboutMe";
import Food from "./components/Food";
import FreeTime from "./components/FreeTime";
import Hobbies from "./components/Hobbies";
import Technologies from "./components/Technologies";

function App() {

  

  return (
    <>
      <div className="App">

        <AboutMe/>
        <Food />
        <FreeTime/>
        <Hobbies/>
        <Technologies/>
   
      </div>
    </>
  );
}

export default App;
