import {Link, useParams} from "react-router";
import {Button} from "@/components/ui/button";

export default function AccountInvoiceDemoPage() {
    const {id} = useParams();
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <b>View Invoice</b> {id}<br/>
                <div>
                    <Link to={"/account/invoice/" + id + "/edit"}>
                        <Button>Edit</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
