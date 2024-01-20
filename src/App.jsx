import {Button} from "@/components/ui/button.jsx";
import {TypographyDemo} from "@/demo/Typing.jsx";
import {Slider} from "@/components/ui/slider.jsx";


function App() {

  return (
      <div>
          <div className="p-12 primary">
            <TypographyDemo/>
             <Slider className="bg-primary-foreground"></Slider>
          </div>

      </div>
  )
}

export default App
