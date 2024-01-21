import {Button} from "@/components/ui/button.jsx";
import {TypographyDemo} from "@/demo/Typing.jsx";
import {Slider} from "@/components/ui/slider.jsx";


function App() {

  return (
      <div className="dark bg-background">

          <div className="p-12 text-card-foreground bg-card">
            <TypographyDemo/>
             <Slider></Slider>
              <Button>Test</Button>
          </div>

      </div>
  )
}

export default App