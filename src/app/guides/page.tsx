import { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Guides Isolation 2026 — Combles, ITE, Phonique, Aides | Cout-Isolation-Maison.fr",
    description: "Tous nos guides experts sur l'isolation : prix des combles, ITE, isolation phonique, aides MaPrimeRénov', comparatifs isolants et réglementation.",
    alternates: { canonical: 'https://www.cout-isolation-maison.fr/guides' },
};

export default function GuidesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">Guides Isolation</h1>
                <p className="text-lg text-zinc-500 mb-10 font-serif">Nos experts décryptent les prix, techniques et aides pour réussir votre isolation en 2026.</p>

                <div className="grid md:grid-cols-2 gap-6">
                    {guides.map(guide => {
                        const cat = GUIDE_CATEGORIES[guide.category];
                        return (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
                                <article className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-md transition-all h-full flex flex-col">
                                    <span className="text-xs font-semibold text-teal-600 mb-2">{cat.emoji} {cat.label}</span>
                                    <h2 className="text-lg font-bold text-zinc-900 mb-3 group-hover:text-teal-600 transition-colors">{guide.title}</h2>
                                    <p className="text-zinc-500 text-sm font-serif flex-1 line-clamp-3">{guide.excerpt}</p>
                                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-zinc-200">
                                        <span className="flex items-center gap-1 text-xs text-zinc-400"><Clock className="h-3 w-3" /> {guide.readTime}</span>
                                        <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Lire <ArrowRight className="h-3 w-3" /></span>
                                    </div>
                                </article>
                            </Link>
                        );
                    })}
                </div>
            </section>
        </div>
    );
}
