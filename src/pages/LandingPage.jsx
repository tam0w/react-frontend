import {Navbar} from "@/localComponents/Navbar.jsx";
import {Counter} from "@/localComponents/Counter.jsx";
import {Separator} from "@/components/ui/separator.jsx";
import {GetAPI} from "@/localComponents/GetAPI.jsx";
import {PostAPI} from "@/localComponents/PostAPI.jsx";

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