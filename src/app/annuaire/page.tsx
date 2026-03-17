import { Metadata } from "next";
import Link from "next/link";
import { getAllDepartments } from "@/lib/cities";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Annuaire Isolation par Département — Artisans RGE | Cout-Isolation-Maison.fr",
    description: "Retrouvez les artisans isoleurs certifiés RGE département par département. Isolation des combles, ITE, phonique : devis gratuits partout en France.",
    alternates: { canonical: 'https://www.cout-isolation-maison.fr/annuaire' },
};

export default function AnnuairePage() {
    const departments = getAllDepartments();
    const regions = [...new Set(departments.map(d => d.region))].sort();

    return (
        <div className="min-h-screen bg-white">
            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">Annuaire isolation par département</h1>
                <p className="text-lg text-zinc-500 mb-10 font-serif">Retrouvez les prix et artisans certifiés RGE dans votre département.</p>

                <div className="space-y-10">
                    {regions.map(region => {
                        const regionDepts = departments.filter(d => d.region === region).sort((a, b) => a.code.localeCompare(b.code));
                        return (
                            <div key={region}>
                                <h2 className="text-xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                    <MapPin className="h-5 w-5 text-teal-500" /> {region}
                                </h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                                    {regionDepts.map(dept => (
                                        <Link
                                            key={dept.code}
                                            href={`/annuaire/${dept.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${dept.code}`}
                                            className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-teal-300 hover:shadow-sm transition-all group text-sm"
                                        >
                                            <span className="text-teal-600 font-bold font-mono min-w-[2rem]">{dept.code}</span>
                                            <span className="text-zinc-700 group-hover:text-teal-600 font-medium truncate">{dept.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
