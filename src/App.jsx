import {Button} from "@/components/ui/button.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Navbar} from "@/demo/Navbar.jsx";


function App() {

  return (
      <div className="dark home h-screen based-text">

          <div className="">
          <Navbar></Navbar>
          </div>
          <h1 className="based">Test</h1>
          <div className="mt-52 text-card-foreground border-4 border-zinc-600">
             <Slider></Slider>
              <Button>Test</Button>
          </div>

      </div>
  )
}

export default App