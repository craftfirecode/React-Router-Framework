import {Link} from "react-router";
import {Button} from "@/components/ui/button";

export const CardFx = ({blogID}: { blogID: string }) => {
    return (
        <div className="border-fx">
            <div className="bg-white h-full">
                <Link to={"/blog/" + blogID}>
                    <img
                        src="/hero-bg.webp"
                        className="w-full object-cover hover:grayscale"
                        alt="..."
                    />
                </Link>
                <div className="p-4">
                    <div className="text-black">Title</div>
                    <p className="text-dark text-[14px] mt-2">description</p>
                    <Link to={"/blog/" + blogID}>
                        <Button>Link</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}