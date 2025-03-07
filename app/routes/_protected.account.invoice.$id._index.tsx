import {Link, useParams} from "react-router";
import {Button} from "@/components/ui/button";
import type {Route} from "../../.react-router/types/app/routes/+types/_protected.account._index";
import LayoutContainer from "@/layout/layoutContainer";

export function meta({params}: Route.MetaArgs) {
    return [
        {title: `Invoice ${params.id}`},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function AccountInvoiceDemoPage() {
    const {id} = useParams();
    return (
        <LayoutContainer>
            <div className="flex items-center justify-center pt-16 pb-4">
                <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
                    <b>View Invoice</b> {id}<br/>
                    <div>
                        <Link to={"/account/invoice/" + id + "/edit"}>
                            <Button>Edit</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </LayoutContainer>
    );
}
