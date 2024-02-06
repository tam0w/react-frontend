import {Route, Routes} from "react-router-dom";
import {LandingPage} from "@/pages/LandingPage.jsx";
import {Appli} from "@/pages/Appli.jsx";
import {Test1} from "@/pages/Test1.jsx";

function App() {

  return (

      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Appli />} />
      <Route path="/sidebar" element={<Test1 />} />
    </Routes>

  )
}

export default App