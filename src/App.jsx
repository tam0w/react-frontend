import {Navbar} from "@/demo/Navbar.jsx";
import {Counter} from "@/demo/Counter.jsx";
import {GetAPI} from "@/demo/GetAPI.jsx";
import {Button} from "@/components/ui/button.jsx";
function App() {

  return (
      <div className="dark home h-screen">
          <div className="">
          <Navbar/>
          <Counter/>
              <GetAPI/>

          </div>
      </div>
  )
}

export default App