import {Route, Routes} from "react-router-dom";
import {LandingPage} from "@/pages/LandingPage.jsx";
import {Appli} from "@/pages/Appli.jsx";
import {Test1} from "@/pages/Summary.jsx";

function App() {

  return (

      <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/app" element={<Appli />}>
          <Route index element={<h1 className={'big font'}>Im testing this out.</h1>} />
          <Route path="test" element={<Test1 />} />
          <Route path="test2" element={<Test1 />} />
          <Route path="test3" element={<Test1 />} />
          <Route path="test4" element={<Test1 />} />
      </Route>
          <Route path="/sidebar" element={<Test1 />} />
    </Routes>

  )
}

export default App