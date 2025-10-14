import Message from "./Message";

import './style/firstSection.css';
import './style/secondSection.css';
import './style/thirdSection.css';
import './style/appStyle.css';
import './style/forthSection.css';
import Navbar from "./Navbar";


function App(){

  return (
  <div>
  <Navbar />
    <div className="background"></div> {/* Background div */}
    <div><Message /></div>
  </div>

  );
}

export default App;

