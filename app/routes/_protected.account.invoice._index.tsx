import type {Route} from "./+types/_protected.account.invoice._index";
import {Link} from "react-router";
import {Button} from "@/components/ui/button";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Account"},
        {name: "description", content: "Your account"},
    ];
}

export default function AccountInvoicePage() {

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <h1>Invoice</h1>
                <div className="flex gap-4">
                    <Link to={"/account/invoice/28941"}>
                        <Button>Invoice 28941</Button>
                    </Link>
                    <Link to={"/account/invoice/98571"}>
                        <Button>Invoice 98571</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
