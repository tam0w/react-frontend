import {Button} from "@/components/ui/button.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Navbar} from "@/demo/Navbar.jsx";


function App() {

  return (
      <div className="dark home h-screen">

          <div className="">
          <Navbar></Navbar>
          </div>
          <div className="p-12 text-card-foreground bg-card">
             <Slider></Slider>
              <Button>Test</Button>
          </div>

      </div>
  )
}

export default App