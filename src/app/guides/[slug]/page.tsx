import { notFound } from "next/navigation";
import { Metadata } from "next";
import Link from "next/link";
import { guides } from "@/data/guides";
import { GUIDE_CATEGORIES } from "@/types/guide";
import { Clock, ArrowLeft, ArrowRight, ChevronRight } from "lucide-react";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const guide = guides.find(g => g.slug === slug);
    if (!guide) return {};
    return {
        title: guide.metaTitle,
        description: guide.metaDescription,
        alternates: { canonical: `https://www.cout-isolation-maison.fr/guides/${guide.slug}` },
    };
}

export function generateStaticParams() {
    return guides.map(g => ({ slug: g.slug }));
}

export default async function GuidePage({ params }: Props) {
    const { slug } = await params;
    const guide = guides.find(g => g.slug === slug);

    if (!guide) {
        notFound();
    }

    const cat = GUIDE_CATEGORIES[guide.category];
    const currentIndex = guides.findIndex(g => g.slug === slug);
    const prevGuide = currentIndex > 0 ? guides[currentIndex - 1] : null;
    const nextGuide = currentIndex < guides.length - 1 ? guides[currentIndex + 1] : null;

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": guide.title,
        "description": guide.metaDescription,
        "datePublished": guide.updatedAt,
        "dateModified": guide.updatedAt,
        "author": { "@type": "Organization", "name": "Cout-Isolation-Maison.fr" },
        "publisher": { "@type": "Organization", "name": "Cout-Isolation-Maison.fr" },
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
            />

            <header className="bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-4 max-w-4xl py-3 text-sm text-zinc-500">
                    <nav className="flex items-center gap-1">
                        <Link href="/" className="hover:text-teal-600">Accueil</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/guides" className="hover:text-teal-600">Guides</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-zinc-800 font-semibold truncate">{guide.title}</span>
                    </nav>
                </div>
            </header>

            <article className="container mx-auto px-4 py-12 max-w-4xl">
                <div className="mb-8">
                    <span className="text-sm font-semibold text-teal-600">{cat.emoji} {cat.label}</span>
                    <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mt-2 mb-4 tracking-tight">{guide.title}</h1>
                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                        <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {guide.readTime}</span>
                        <span>Mis à jour le {new Date(guide.updatedAt).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    </div>
                </div>

                <div
                    className="prose prose-lg prose-zinc prose-headings:font-extrabold prose-headings:tracking-tight prose-a:text-teal-600 prose-strong:text-zinc-800 max-w-none font-serif"
                    dangerouslySetInnerHTML={{ __html: guide.content }}
                />

                <nav className="mt-16 pt-8 border-t border-zinc-200 grid md:grid-cols-2 gap-4">
                    {prevGuide ? (
                        <Link href={`/guides/${prevGuide.slug}`} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-teal-300 transition-all group">
                            <ArrowLeft className="h-5 w-5 text-teal-500 flex-shrink-0" />
                            <div>
                                <span className="text-xs text-zinc-400">Précédent</span>
                                <span className="block text-sm font-semibold text-zinc-800 group-hover:text-teal-700 line-clamp-1">{prevGuide.title}</span>
                            </div>
                        </Link>
                    ) : <div />}
                    {nextGuide && (
                        <Link href={`/guides/${nextGuide.slug}`} className="flex items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-200 hover:border-teal-300 transition-all group text-right md:justify-end">
                            <div>
                                <span className="text-xs text-zinc-400">Suivant</span>
                                <span className="block text-sm font-semibold text-zinc-800 group-hover:text-teal-700 line-clamp-1">{nextGuide.title}</span>
                            </div>
                            <ArrowRight className="h-5 w-5 text-teal-500 flex-shrink-0" />
                        </Link>
                    )}
                </nav>
            </article>
        </div>
    );
}
