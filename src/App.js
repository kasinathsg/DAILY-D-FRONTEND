import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom"
import Ars from './Components/ArsTechnica';
import "./App.css"
import Tnw from './Components/Tnw';
import Eng from './Components/Engadget';
import Venture from './Components/VentureBeat';
import Giz from './Components/Gizmodo';
import Digi from './Components/DigitalTrends';
import Android from './Components/AndroidAuthority';
import Verge from './Components/TheVerge';
import Police from './Components/AndroidPolice';
import Muo from './Components/Muo';
import Navbar2 from './Components/navbar2';

function App() {
  return (
      <div className="container">
        <Navbar2/>
        <Routes>
          <Route path={"/arstechnica"} element={<Ars />} />
          <Route path={"/tnw"} element={<Tnw />} />
          <Route path={"/engadget"} element={<Eng/>}/>
          <Route path={"/androidpolice"} element={<Police/>}></Route>
          <Route path={"/venture"} element={<Venture/>}></Route>
          <Route path={"/gizmodo"} element={<Giz/>}></Route>
          <Route path={"/digitaltrends"} element={<Digi/>}></Route>
          <Route path={"/androidauthority"} element={<Android/>}></Route>
          <Route path={"/theverge"} element={<Verge/>}></Route>
          <Route path={"/muo"} element={<Muo/>}></Route>
          <Route path='/a' element={<Navbar2/>}/>
        </Routes>
        
      </div>

  );
}

export default App;
