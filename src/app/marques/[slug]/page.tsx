import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { brands } from "@/data/brands";
import { CheckCircle, ChevronRight, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const brand = brands.find(b => b.slug === slug);
    if (!brand) return {};
    return {
        title: `${brand.name} — Avis, Gamme & Performances Isolation 2026`,
        description: `Découvrez la gamme ${brand.name} (${brand.country}) : ${brand.tagline}. Points forts, catégories d'isolation et avis de professionnels.`,
        alternates: { canonical: `https://www.cout-isolation-maison.fr/marques/${brand.slug}` },
    };
}

export function generateStaticParams() {
    return brands.map(b => ({ slug: b.slug }));
}

export default async function BrandPage({ params }: Props) {
    const { slug } = await params;
    const brand = brands.find(b => b.slug === slug);

    if (!brand) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl py-3 text-sm text-zinc-500">
                    <nav className="flex items-center gap-1">
                        <Link href="/" className="hover:text-teal-600">Accueil</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/marques" className="hover:text-teal-600">Marques</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-zinc-800 font-semibold">{brand.name}</span>
                    </nav>
                </div>
            </header>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="flex items-center gap-6 mb-8">
                    <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-3xl font-black text-teal-700">{brand.letter}</span>
                    </div>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black text-zinc-900">{brand.name}</h1>
                        <p className="text-zinc-500">{brand.country} · {brand.tagline}</p>
                    </div>
                </div>

                <div className="prose prose-lg prose-zinc max-w-none mb-10 font-serif">
                    <p>{brand.description}</p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">Points forts</h2>
                        <ul className="space-y-3">
                            {brand.strengths.map(s => (
                                <li key={s} className="flex items-center gap-3 text-zinc-700">
                                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                                    {s}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-zinc-900 mb-4">Catégories</h2>
                        <div className="flex flex-wrap gap-2">
                            {brand.categories.map(c => (
                                <Link key={c} href={`/${c}/paris-75000`} className="bg-teal-50 text-teal-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-100 transition-colors capitalize">
                                    {c.replace(/-/g, ' ')}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-2xl p-8 text-center">
                    <h2 className="text-2xl font-bold mb-3">Comparez les prix {brand.name}</h2>
                    <p className="text-teal-100 mb-6">Obtenez des devis d&apos;artisans certifiés utilisant les isolants {brand.name}.</p>
                    <Link href="/devis">
                        <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-6 rounded-xl shadow-lg">
                            Demander un devis gratuit <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </article>
        </div>
    );
}
