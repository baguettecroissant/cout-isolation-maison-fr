import { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "Marques d'Isolants — Isover, Rockwool, Knauf | Cout-Isolation-Maison.fr",
    description: "Découvrez les meilleures marques d'isolants : Isover, Rockwool, Knauf, Ursa, Isonat, Steico. Comparatif, points forts et gammes.",
    alternates: { canonical: 'https://www.cout-isolation-maison.fr/marques' },
};

export default function MarquesPage() {
    return (
        <div className="min-h-screen bg-white">
            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">Marques d&apos;isolants</h1>
                <p className="text-lg text-zinc-500 mb-10 font-serif">Les fabricants d&apos;isolants les plus reconnus du marché français et européen.</p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {brands.map(brand => (
                        <Link key={brand.slug} href={`/marques/${brand.slug}`} className="group">
                            <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-md transition-all h-full">
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-14 h-14 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                                        <span className="text-2xl font-black text-teal-700">{brand.letter}</span>
                                    </div>
                                    <div>
                                        <h2 className="text-lg font-bold text-zinc-900 group-hover:text-teal-600 transition-colors">{brand.name}</h2>
                                        <p className="text-xs text-zinc-400">{brand.country}</p>
                                    </div>
                                </div>
                                <p className="text-zinc-500 text-sm font-serif line-clamp-2 mb-3">{brand.tagline}</p>
                                <span className="text-teal-600 text-sm font-semibold flex items-center gap-1">Découvrir <ArrowRight className="h-3 w-3" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
