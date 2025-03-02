import type {Route} from "./+types/_protected.tax";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Account"},
        {name: "description", content: "Your account"},
    ];
}

export default function AccountTaxPage() {

    return (
        <main className="flex items-center justify-center pt-16 pb-4">
            <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                <div>
                    <h1>TAX</h1>
                </div>
            </div>
        </main>
    );
}
