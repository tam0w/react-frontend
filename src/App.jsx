import {Route, Routes} from "react-router-dom";
import {LandingPage} from "@/pages/LandingPage.jsx";
import {Appli} from "@/pages/Appli.jsx";
import {Summary} from "@/pages/app/Summary.jsx";
import {MatchReport} from "@/pages/app/MatchReport.jsx";
import {Scrimset} from "@/pages/app/Scrimset.jsx";
import {MapWise} from "@/pages/app/MapWise.jsx";
import {ButtonSpin} from "@/demo/ButtonSpin.jsx";

function App() {

  return (

  <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Appli />}>
          <Route path="" element={<Summary />} />
          <Route path="matchreport" element={<MatchReport />} />
          <Route path="maps" element={<MapWise />} />
          <Route path="scrimset" element={<Scrimset />} />
      </Route>

  </Routes>

  )
}

export default App