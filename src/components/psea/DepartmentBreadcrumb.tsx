import Link from "next/link";
import { City, InsulationCategory } from "@/types";
import { ChevronRight } from "lucide-react";

export function DepartmentBreadcrumb({ city, category }: { city: City; category: InsulationCategory }) {
    const deptSlug = `${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}`;

    return (
        <nav aria-label="Breadcrumb" className="py-3 text-sm text-zinc-500">
            <ol className="flex flex-wrap items-center gap-1">
                <li><Link href="/" className="hover:text-teal-600 transition-colors">Accueil</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li><Link href="/annuaire" className="hover:text-teal-600 transition-colors">Annuaire</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li><Link href={`/annuaire/${deptSlug}`} className="hover:text-teal-600 transition-colors">{city.department_name}</Link></li>
                <li><ChevronRight className="h-3 w-3" /></li>
                <li className="text-zinc-800 font-semibold">{category.shortLabel} à {city.name} ({city.zip})</li>
            </ol>
        </nav>
    );
}
