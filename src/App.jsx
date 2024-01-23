import {Button} from "@/components/ui/button.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Navbar} from "@/demo/Navbar.jsx";


function App() {

  return (
      <div className="dark home h-screen">

          <div className="">
          <Navbar></Navbar>
          </div>
          <div className="p-56 text-card-foreground border-4 border-zinc-600">
             <Slider></Slider>
              <Button>Test</Button>
          </div>

      </div>
  )
}

export default App