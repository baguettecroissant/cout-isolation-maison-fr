import Link from "next/link";
import { City, InsulationCategory } from "@/types";
import { MapPin } from "lucide-react";
import { getNearbyCities } from "@/lib/cities";

export function NearbyCitiesModule({ city, category }: { city: City; category: InsulationCategory }) {
    const nearby = getNearbyCities(city, 8);

    if (nearby.length === 0) return null;

    return (
        <section className="py-12">
            <div className="container mx-auto px-4 max-w-5xl">
                <h2 className="text-2xl font-bold text-zinc-900 mb-6">{category.shortLabel} dans les villes proches</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {nearby.map(c => (
                        <Link
                            key={c.slug}
                            href={`/${category.slug}/${c.slug}`}
                            className="flex items-center gap-2 p-3 bg-white border border-zinc-200 rounded-lg hover:border-teal-300 hover:shadow-sm transition-all text-sm group"
                        >
                            <MapPin className="h-3 w-3 text-teal-500 flex-shrink-0" />
                            <span className="text-zinc-700 group-hover:text-teal-600 font-medium truncate">{c.name} ({c.zip})</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
