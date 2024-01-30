import {Navbar} from "@/demo/Navbar.jsx";
import {Counter} from "@/demo/Counter.jsx";
import {GetAPI} from "@/demo/GetAPI.jsx";
import {Button} from "@/components/ui/button.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {PostAPI} from "@/demo/PostAPI.jsx";
function App() {

  return (
      <div className="dark home min-h-screen h-max">
          <div className="">
              <Navbar/>
              <Counter/>
              <Separator/>
              <GetAPI/>
              <PostAPI/>
          </div>
      </div>
  )
}

export default App