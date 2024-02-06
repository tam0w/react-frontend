import {Route, Routes} from "react-router-dom";
import {LandingPage} from "@/pages/LandingPage.jsx";
import {Appli} from "@/pages/Appli.jsx";

function App() {

  return (

      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Appli />} />
      <Route path="/sidebar" element={<Test />} />
    </Routes>

  )
}

export default App