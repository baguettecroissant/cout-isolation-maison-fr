import { City } from "@/types";
import { Euro, FileText, Landmark } from "lucide-react";
import Link from "next/link";

export function LocalAidsModule({ city }: { city: City }) {
    return (
        <div className="bg-teal-600 text-white rounded-2xl p-7 shadow-xl">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2"><Landmark className="h-5 w-5" /> Aides isolation à {city.name}</h3>
            <ul className="space-y-2 text-teal-100 text-sm mb-5">
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> MaPrimeRénov&apos; isolation : jusqu&apos;à 75 €/m²</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> Prime CEE isolation : jusqu&apos;à 12 €/m²</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> TVA réduite : 5,5%</li>
                <li className="flex items-start gap-2"><Euro className="h-4 w-4 mt-0.5 flex-shrink-0" /> Éco-PTZ : 50 000 € à taux 0</li>
                {city.department_info?.aide_locale && (
                    <li className="flex items-start gap-2"><FileText className="h-4 w-4 mt-0.5 flex-shrink-0" /> {city.department_info.aide_locale}</li>
                )}
            </ul>
            <Link href="/guides/maprimenov-isolation-bareme" className="underline text-teal-200 hover:text-white text-sm font-semibold">
                Détails des aides isolation 2026 →
            </Link>
        </div>
    );
}
