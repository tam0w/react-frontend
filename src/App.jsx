import {Button} from "@/components/ui/button.jsx";
import {Slider} from "@/components/ui/slider.jsx";
import {Navbar} from "@/demo/Navbar.jsx";


function App() {

  return (
      <div className="dark home h-screen">

          <div className="">
          <Navbar></Navbar>
          </div>
          <div className="flex flex-col justify-center items-center mt-52 text-card-foreground">
              <div className="py-4">
              <h1 className="normal text-accent-foreground">Counter: </h1>
              <h1 className="flex justify-center based">0</h1>
              </div>
              <Button variant='' size='lg'><h1 className="text-4xl font text-accent-foreground">Add number</h1></Button>
          </div>

      </div>
  )
}

export default App