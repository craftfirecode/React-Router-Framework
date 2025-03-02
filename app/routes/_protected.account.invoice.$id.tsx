import {useParams} from "react-router";

export default function AccountInvoiceDemoPage() {
    const {id} = useParams();
    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <div>
                    <h1>Invoice {id}</h1>
                </div>
            </div>
        </main>
    );
}
