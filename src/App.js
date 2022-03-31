import logo from "./logo.svg";
import Navbar from "./component/navbar/Navbar";
import Vision from "./component/vision/Vision";
import Service from "./component/service/Service";
import "./App.css";
import Delivering from "./component/delevring/Delivering";
import CoreValues from "./component/core-values/CoreValues";
import Makeus from "./component/makeus/Makeus";
import OurClient from "./component/our-client/OurClient";
import Contactus from "./component/contactus/Contactus";
import Copyright from "./component/copyright/Copyright";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Delivering />
      <Vision />
      <CoreValues />
      <Service />
      <Makeus />
      <OurClient />
      <Contactus />
      <Copyright />
    </div>
  );
}

export default App;
