import {Navbar} from "@/demo/Navbar.jsx";
import {Counter} from "@/demo/Counter.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {GetAPI} from "@/demo/GetAPI.jsx";
import {PostAPI} from "@/demo/PostAPI.jsx";

export function LandingPage() {
    return (
        <div className="dark home min-h-svh w-full pb-0.5">
            <div className="">
                <Navbar/>
                <Counter/>
                <Separator className='my-6'/>
                <GetAPI/>
                <PostAPI/>
            </div>
        </div>
    )
}