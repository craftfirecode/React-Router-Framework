import {useParams} from "react-router";
import type {Route} from "../../.react-router/types/app/routes/+types/_protected.account._index";

export function meta({params}: Route.MetaArgs) {
    return [
        {title: `Invoice ${params.id} edit`},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function AccountInvoiceDemoPage() {
    const {id} = useParams();
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <b>Edit Invoice</b>
                <div>
                    {id}
                </div>
            </div>
        </main>
    );
}
