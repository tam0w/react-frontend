import {Button} from "@/components/ui/button.jsx";
import {useState} from "react";

export function Counter() {

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

    return (
        <div>
          <div className="flex flex-col justify-center items-center mt-12 text-card-foreground">
              <div className="py-4">
              <h1 className="big py-4">Counter: </h1>
              <h1 className=" flex justify-center based">{count}</h1>
              </div>
          </div>
          <div className="flex items-center justify-center">
              <Button className="mx-4" onClick={increaseCount} size='lg'><h1 className="text-4xl font text-accent-foreground">+</h1></Button>
              <Button className="mx-4" onClick={decreaseCount} size='lg'><h1 className="text-4xl font text-accent-foreground">-</h1></Button>
          </div>
        </div>
    )
}