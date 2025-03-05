import LayoutContainer from "@/layout/layoutContainer";
import type {Route} from "../../.react-router/types/app/routes/+types/team";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Datenschutz"},
        {name: "description", content: "Welcome to React Router!"},
    ];
}

export default function DatenschutzPage() {
    return (
        <LayoutContainer>
            <div><h4>Datenschutzerklärung</h4><p>&nbsp;</p><p>Der Schutz Ihrer persönlichen Daten ist mir ein besonderes
                Anliegen. Ich verarbeite Ihre Daten daher ausschließlich auf Grundlage der gesetzlichen Bestimmungen
                (DSGVO, TMG). In dieser Datenschutzerklärung informiere ich Sie über die wichtigsten Aspekte der
                Datenverarbeitung im Rahmen meiner Website.</p><p>&nbsp;</p><p><strong>1. Allgemeine Hinweise zur
                Datenverarbeitung</strong><br/>Beim Besuch dieser Website werden keine personenbezogenen Daten erhoben,
                gespeichert oder verarbeitet. Es kommen weder Kontaktformulare, noch Cookies, noch iFrames zum Einsatz.
            </p><p>&nbsp;</p><p><strong>2. Server-Logfiles</strong><br/>Der Hosting-Provider dieser Website erhebt und
                speichert automatisch Informationen in sogenannten Server-Logfiles, die Ihr Browser automatisch
                übermittelt. Dazu gehören:</p>
                <ul>
                    <li>Browsertyp und -version</li>
                    <li>Verwendetes Betriebssystem</li>
                    <li>Referrer-URL</li>
                    <li>Hostname des zugreifenden Rechners</li>
                    <li>Uhrzeit der Serveranfrage</li>
                </ul>
                <p>Diese Daten sind nicht bestimmten Personen zuordenbar. Eine Zusammenführung dieser Daten mit anderen
                    Datenquellen wird nicht vorgenommen.</p><p>&nbsp;</p><p><strong>3. Ihre Rechte</strong><br/>Sie
                    haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
                    Datenübertragbarkeit, Widerruf und Widerspruch. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten
                    gegen das Datenschutzrecht verstößt, können Sie sich bei der zuständigen Aufsichtsbehörde
                    beschweren.</p><p>&nbsp;</p><p><strong>4. Kontakt</strong><br/>Bei Fragen zum Datenschutz können Sie
                    mich unter der im Impressum angegebenen Adresse kontaktieren.</p></div>
        </LayoutContainer>
    )
}