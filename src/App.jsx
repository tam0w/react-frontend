import {Route, Routes} from "react-router-dom";
import {LandingPage} from "@/pages/LandingPage.jsx";
import {Appli} from "@/pages/Appli.jsx";
import {Trends} from "@/pages/app/Trends.jsx";
import {MatchReport} from "@/pages/app/MatchReport.jsx";
import {Scrimset} from "@/pages/app/Scrimset.jsx";
import {MapWise} from "@/pages/app/MapWise.jsx";
import {ButtonSpin} from "@/localComponents/ButtonSpin.jsx";
import {Today} from "@/pages/app/Today.jsx";
import {Query} from "@/pages/app/Query.jsx";

function App() {

  return (

  <Routes>

      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Appli />}>
          <Route path="dashboard" element={<Today />} />
          <Route path="trends" element={<Trends />} />
          <Route path="matchreport" element={<MatchReport />} />
          <Route path="maps" element={<MapWise />} />
          <Route path="scrimset" element={<Scrimset />} />
          <Route path="query" element={<Query />} />
      </Route>

  </Routes>

  )
}

export default App