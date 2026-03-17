import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CATEGORY_LIST } from "@/data/categories";
import { guides } from "@/data/guides";
import { brands } from "@/data/brands";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight, Shield, CheckCircle, Home, Layers, Volume2, MapPin, Star, Zap, BookOpen, Award } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
    Home: <Home className="h-8 w-8" />,
    Layers: <Layers className="h-8 w-8" />,
    Volume2: <Volume2 className="h-8 w-8" />,
};

const faqItems = [
    { q: "Quel est le prix moyen d'une isolation de combles ?", a: "Le prix de l'isolation des combles varie de 20 à 60 €/m² selon la technique (soufflage, panneaux, sarking). Pour une maison de 100 m², comptez entre 2 000 et 6 000 € TTC avant aides. Le soufflage en combles perdus est le moins cher (20-30 €/m²)." },
    { q: "Quelles aides pour l'isolation en 2026 ?", a: "MaPrimeRénov' prend en charge jusqu'à 75 €/m² pour l'ITE et 25 €/m² pour les combles. Les primes CEE ajoutent 8 à 12 €/m². La TVA est réduite à 5,5% et l'Éco-PTZ permet d'emprunter jusqu'à 50 000 € à taux 0 sur 20 ans." },
    { q: "Combien de temps durent les travaux d'isolation ?", a: "L'isolation de combles par soufflage prend 4 à 6 heures. L'isolation sous rampants nécessite 2 à 5 jours. L'ITE complète d'une maison individuelle demande 2 à 4 semaines selon la surface et la technique choisie (enduit ou bardage)." },
    { q: "Comment choisir le bon isolant ?", a: "Le choix dépend du poste à isoler : laine de verre ou ouate de cellulose en combles, polystyrène ou fibre de bois en ITE, laine de roche en phonique. Les critères clés sont la résistance thermique (R), le lambda (λ), le déphasage et le prix." },
    { q: "L'isolation est-elle rentable ?", a: "L'isolation est le geste de rénovation le plus rentable : retour sur investissement en 3 à 7 ans pour les combles, 8 à 12 ans pour l'ITE. Sur 20 ans, vous économisez 15 000 à 40 000 € selon votre chauffage actuel." },
    { q: "Faut-il un artisan RGE pour l'isolation ?", a: "Oui, la certification RGE (Reconnu Garant de l'Environnement) est obligatoire pour bénéficier de MaPrimeRénov', des primes CEE et de l'Éco-PTZ. Un artisan non RGE vous prive de toutes les aides financières." },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
        "@type": "Question",
        "name": item.q,
        "acceptedAnswer": { "@type": "Answer", "text": item.a },
    })),
};

const topCities = [
    { name: "Paris", slug: "paris-75000" },
    { name: "Lyon", slug: "lyon-69000" },
    { name: "Marseille", slug: "marseille-13000" },
    { name: "Toulouse", slug: "toulouse-31000" },
    { name: "Bordeaux", slug: "bordeaux-33000" },
    { name: "Nantes", slug: "nantes-44000" },
    { name: "Strasbourg", slug: "strasbourg-67000" },
    { name: "Lille", slug: "lille-59000" },
];

export default function HomePage() {
    return (
        <div className="min-h-screen">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

            {/* ── Hero ── */}
            <section className="bg-gradient-to-br from-teal-950 via-emerald-900 to-teal-800 py-16 md:py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(20,184,166,0.15),transparent_50%)]" />
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <div className="grid md:grid-cols-2 gap-10 items-center">
                        <div>
                            <div className="flex items-center gap-2 text-teal-300 text-sm font-medium mb-6">
                                <Shield className="h-4 w-4" />
                                <span>Guide indépendant — Artisans certifiés RGE</span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight leading-[1.1]">
                                Prix <span className="text-teal-400">isolation maison</span> 2026 : comparez les devis au m²
                            </h1>
                            <p className="text-lg md:text-xl text-teal-100 mb-8 font-serif max-w-2xl">
                                Combles, ITE, phonique — estimez le coût de votre isolation et recevez 3 devis gratuits d&apos;artisans RGE dans votre ville.
                            </p>
                            <div className="flex flex-wrap gap-4 items-center">
                                <Link href="/devis">
                                    <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-7 rounded-xl shadow-lg text-lg">
                                        Devis gratuit en 2 min <ArrowRight className="ml-2 h-5 w-5" />
                                    </Button>
                                </Link>
                                <Link href="/guides">
                                    <Button variant="outline" className="border-white/40 bg-white/10 text-white hover:bg-white/20 px-6 py-7 rounded-xl text-lg">
                                        <BookOpen className="mr-2 h-5 w-5" /> Lire les guides
                                    </Button>
                                </Link>
                            </div>
                            <div className="flex flex-wrap gap-6 mt-8 text-sm text-teal-300">
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> 100% gratuit</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Sans engagement</span>
                                <span className="flex items-center gap-1.5"><CheckCircle className="h-4 w-4 text-green-400" /> Artisans RGE</span>
                            </div>
                        </div>
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <div className="hidden md:block">
                            <img
                                src="/images/hero-isolation.png"
                                alt="Isolation thermique d'une maison - vue en coupe montrant les différentes couches d'isolant"
                                className="rounded-2xl shadow-2xl border-2 border-teal-700/30 w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ── Categories ── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-black text-zinc-900 text-center mb-4">Quel type d&apos;isolation ?</h2>
                    <p className="text-zinc-500 text-center mb-12 max-w-2xl mx-auto font-serif">Chaque poste d&apos;isolation a ses prix, ses techniques et ses aides. Sélectionnez votre projet pour découvrir les tarifs dans votre ville.</p>
                    <div className="grid md:grid-cols-3 gap-6">
                        {CATEGORY_LIST.map(cat => (
                            <Link key={cat.slug} href={`/${cat.slug}/paris-75000`} className="group">
                                <div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-8 hover:border-teal-400 hover:shadow-lg transition-all h-full">
                                    <div className="text-teal-600 mb-4">{iconMap[cat.icon]}</div>
                                    <h3 className="text-xl font-bold text-zinc-900 mb-2 group-hover:text-teal-600 transition-colors">{cat.label}</h3>
                                    <p className="text-zinc-500 text-sm mb-4 font-serif">{cat.description}</p>
                                    <div className="flex items-center justify-between">
                                        <span className="text-teal-600 font-bold font-mono">{cat.priceMin}–{cat.priceMax} {cat.unit}</span>
                                        <ArrowRight className="h-5 w-5 text-teal-500 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── Guides ── */}
            <section className="py-16 bg-zinc-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <h2 className="text-3xl md:text-4xl font-black text-zinc-900 text-center mb-12">Guides isolation</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {guides.slice(0, 4).map(guide => (
                            <Link key={guide.slug} href={`/guides/${guide.slug}`} className="group">
                                <div className="bg-white border border-zinc-200 rounded-2xl p-6 hover:border-teal-400 hover:shadow-md transition-all h-full flex flex-col">
                                    <div className="flex items-center gap-2 text-xs text-teal-600 font-semibold mb-3">
                                        <BookOpen className="h-3 w-3" /> {guide.readTime}
                                    </div>
                                    <h3 className="text-base font-bold text-zinc-900 mb-3 group-hover:text-teal-600 transition-colors line-clamp-2">{guide.title}</h3>
                                    <p className="text-zinc-500 text-sm flex-1 font-serif line-clamp-3">{guide.excerpt}</p>
                                    <span className="text-teal-600 text-sm font-semibold mt-4 flex items-center gap-1">Lire <ArrowRight className="h-3 w-3" /></span>
                                </div>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-8">
                        <Link href="/guides">
                            <Button variant="outline" className="border-teal-600 text-teal-700 hover:bg-teal-50 px-8 py-5 rounded-xl font-semibold">
                                Tous les guides <ArrowRight className="ml-2 h-4 w-4" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Value Stack ── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-black text-zinc-900 text-center mb-12">Pourquoi nous faire confiance ?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: <Shield className="h-8 w-8 text-teal-600" />, title: "Artisans certifiés RGE", desc: "Tous nos partenaires sont certifiés RGE et Qualibat, gage de qualité et condition pour les aides financières." },
                            { icon: <Zap className="h-8 w-8 text-orange-500" />, title: "Devis en 2 minutes", desc: "Remplissez un seul formulaire et recevez jusqu'à 3 devis personnalisés, gratuitement et sans engagement." },
                            { icon: <Star className="h-8 w-8 text-yellow-500" />, title: "Guide indépendant", desc: "Nous ne vendons rien : nos comparatifs et conseils sont 100% indépendants, basés sur les données du marché." },
                        ].map((v, i) => (
                            <div key={i} className="text-center">
                                <div className="mx-auto w-16 h-16 bg-zinc-50 rounded-2xl flex items-center justify-center mb-4">{v.icon}</div>
                                <h3 className="font-bold text-zinc-900 mb-2">{v.title}</h3>
                                <p className="text-zinc-500 text-sm font-serif">{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── City Finder ── */}
            <section className="py-16 bg-zinc-50">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-black text-zinc-900 text-center mb-4">Prix isolation par ville</h2>
                    <p className="text-zinc-500 text-center mb-10 font-serif">Retrouvez les tarifs, artisans RGE et aides locales pour votre commune.</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {topCities.map(city => (
                            <Link key={city.slug} href={`/isolation-combles/${city.slug}`} className="flex items-center gap-2 p-4 bg-white border border-zinc-200 rounded-xl hover:border-teal-400 hover:shadow-md transition-all group">
                                <MapPin className="h-4 w-4 text-teal-500 flex-shrink-0" />
                                <span className="font-semibold text-zinc-700 group-hover:text-teal-600 transition-colors">{city.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/annuaire" className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors">
                            Voir tout l&apos;annuaire par département →
                        </Link>
                    </div>
                </div>
            </section>

            {/* ── Brands ── */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 max-w-5xl">
                    <h2 className="text-3xl font-black text-zinc-900 text-center mb-10">Marques d&apos;isolants</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                        {brands.map(brand => (
                            <Link key={brand.slug} href={`/marques/${brand.slug}`} className="group text-center p-4 bg-zinc-50 rounded-2xl border border-zinc-200 hover:border-teal-400 hover:shadow-md transition-all">
                                <div className="w-12 h-12 bg-teal-100 rounded-full mx-auto flex items-center justify-center mb-2">
                                    <span className="text-xl font-black text-teal-700">{brand.letter}</span>
                                </div>
                                <span className="text-sm font-semibold text-zinc-700 group-hover:text-teal-600">{brand.name}</span>
                            </Link>
                        ))}
                    </div>
                    <div className="text-center mt-6">
                        <Link href="/marques" className="text-teal-600 font-semibold text-sm hover:text-teal-700">Toutes les marques →</Link>
                    </div>
                </div>
            </section>

            {/* ── FAQ ── */}
            <section className="py-16 bg-zinc-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <h2 className="text-3xl font-black text-zinc-900 text-center mb-10">Questions fréquentes</h2>
                    <Accordion type="single" collapsible className="bg-white rounded-2xl border border-zinc-200 px-6 shadow-sm">
                        {faqItems.map((item, idx) => (
                            <AccordionItem key={idx} value={`faq-${idx}`}>
                                <AccordionTrigger className="text-base font-semibold text-zinc-800 py-5">{item.q}</AccordionTrigger>
                                <AccordionContent className="text-zinc-600 font-serif">{item.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* ── Bottom CTA ── */}
            <section className="py-20 bg-gradient-to-r from-teal-600 to-emerald-700 text-white">
                <div className="container mx-auto px-4 max-w-3xl text-center">
                    <Award className="h-12 w-12 mx-auto mb-6 text-teal-200" />
                    <h2 className="text-3xl md:text-4xl font-black mb-4">Prêt à isoler votre maison ?</h2>
                    <p className="text-teal-100 text-lg mb-8 font-serif">Comparez les devis d&apos;artisans certifiés RGE et bénéficiez des aides 2026. C&apos;est gratuit, rapide et sans engagement.</p>
                    <Link href="/devis">
                        <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-10 py-7 rounded-xl shadow-lg text-lg">
                            Demander mes 3 devis gratuits <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
