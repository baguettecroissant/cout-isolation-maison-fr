import { City, InsulationCategory } from "@/types";
import { CityHero } from "./CityHero";
import { SchemaOrg } from "./SchemaOrg";
import { DepartmentBreadcrumb } from "./DepartmentBreadcrumb";
import { StepsModule } from "./StepsModule";
import { LocalAidsModule } from "./LocalAidsModule";
import { NearbyCitiesModule } from "./NearbyCitiesModule";
import { ViteUnDevisWidget } from "@/components/affiliation/ViteUnDevisWidget";
import { getCityIntro, getLocalInsight, getWhyChoose, getPriceBreakdown, getMaterialAdvice, getEnergyStats, getExpertTip } from "@/lib/text-utils";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, ThermometerSnowflake, Gauge, ArrowRight, Lightbulb, BarChart3, Wrench, BookOpen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CategoryCityPage({ city, category }: { city: City; category: InsulationCategory }) {
    const intro = getCityIntro(city, category.slug);
    const insight = getLocalInsight(city, category.slug);
    const whyChoose = getWhyChoose(city, category.slug);
    const priceBreakdown = getPriceBreakdown(city, category.slug);
    const materialAdvice = getMaterialAdvice(city, category.slug);
    const energyStats = getEnergyStats(city, category.slug);
    const expertTip = getExpertTip(city, category.slug);

    const faqItems = [
        {
            q: `Quel est le prix ${category.article} à ${city.name} ?`,
            a: `Le prix moyen ${category.article} à ${city.name} se situe entre ${category.priceMin} et ${category.priceMax} ${category.unit}, matériaux et pose TTC. Le tarif exact dépend de la surface, de l'isolant choisi et de l'accès au chantier. Demandez 3 devis gratuits pour comparer les prix locaux.`,
        },
        {
            q: `Quelles aides pour ${category.article} à ${city.name} ?`,
            a: `Les habitants de ${city.name} (${city.zip}) bénéficient de MaPrimeRénov' (jusqu'à 75 €/m²), des primes CEE, de la TVA à 5,5% et de l'Éco-PTZ (50 000 € à taux 0). Le cumul de ces aides peut couvrir 50 à 90% du coût des travaux.`,
        },
        {
            q: `Combien de temps durent les travaux d'isolation à ${city.name} ?`,
            a: `La durée varie selon le type d'isolation : 1 jour pour l'isolation de combles par soufflage, 2 à 5 jours pour l'isolation sous rampants, et 1 à 3 semaines pour une ITE complète. Les artisans RGE du ${city.department_name} confirmeront le délai après visite technique.`,
        },
        {
            q: `Comment trouver un artisan RGE à ${city.name} ?`,
            a: `Utilisez notre formulaire ci-dessus pour recevoir jusqu'à 3 devis d'artisans RGE certifiés à ${city.name} et dans le ${city.department_name}. La certification RGE est indispensable pour bénéficier des aides MaPrimeRénov'.`,
        },
        {
            q: `L'isolation est-elle rentable à ${city.name} ?`,
            a: `Oui, l'isolation à ${city.name} offre un retour sur investissement de 3 à 7 ans pour les combles et 8 à 12 ans pour l'ITE. Avec les aides, le reste à charge est réduit de 50 à 90% et les économies d'énergie sont immédiates dès le premier hiver.`,
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqItems.map(item => ({
            "@type": "Question",
            "name": item.q,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.a,
            },
        })),
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Accueil", "item": "https://www.cout-isolation-maison.fr" },
            { "@type": "ListItem", "position": 2, "name": "Annuaire", "item": "https://www.cout-isolation-maison.fr/annuaire" },
            { "@type": "ListItem", "position": 3, "name": city.department_name, "item": `https://www.cout-isolation-maison.fr/annuaire/${city.department_name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${city.department_code}` },
            { "@type": "ListItem", "position": 4, "name": `${category.shortLabel} à ${city.name}`, "item": `https://www.cout-isolation-maison.fr/${category.slug}/${city.slug}` },
        ],
    };

    const rValueTargets: Record<string, { target: string; label: string }> = {
        "isolation-combles": { target: "R ≥ 7 m².K/W", label: "Combles perdus (recommandé RE2020)" },
        "isolation-exterieure": { target: "R ≥ 3.7 m².K/W", label: "Murs extérieurs (minimum RT existant)" },
        "isolation-phonique": { target: "Rw+C ≥ 53 dB", label: "Affaiblissement acoustique murs mitoyens" },
    };
    const rTarget = rValueTargets[category.slug] || rValueTargets["isolation-combles"];

    const guideLinks: Record<string, { slug: string; label: string }[]> = {
        "isolation-combles": [
            { slug: "prix-isolation-combles-2026", label: "Prix isolation combles 2026" },
            { slug: "epaisseur-isolant-guide", label: "Quelle épaisseur d'isolant ?" },
            { slug: "meilleurs-isolants-2026", label: "Comparatif des meilleurs isolants" },
            { slug: "maprimenov-isolation-bareme", label: "MaPrimeRénov' : barème complet" },
        ],
        "isolation-exterieure": [
            { slug: "isolation-exterieure-ite-prix", label: "ITE : prix, enduit vs bardage" },
            { slug: "isolation-interieure-vs-exterieure", label: "ITI vs ITE : comparatif" },
            { slug: "meilleurs-isolants-2026", label: "Comparatif des isolants" },
            { slug: "maprimenov-isolation-bareme", label: "Aides MaPrimeRénov'" },
        ],
        "isolation-phonique": [
            { slug: "isolation-phonique-solutions", label: "Isolation phonique : solutions et prix" },
            { slug: "meilleurs-isolants-2026", label: "Meilleurs isolants acoustiques" },
            { slug: "epaisseur-isolant-guide", label: "Épaisseurs recommandées" },
            { slug: "maprimenov-isolation-bareme", label: "Aides financières" },
        ],
    };
    const relevantGuides = guideLinks[category.slug] || guideLinks["isolation-combles"];

    return (
        <div className="min-h-screen bg-zinc-50">
            <SchemaOrg city={city} category={category} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

            <CityHero city={city} category={category} />

            {/* Breadcrumb */}
            <div className="bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-4 max-w-5xl">
                    <DepartmentBreadcrumb city={city} category={category} />
                </div>
            </div>

            {/* Main content */}
            <div className="container mx-auto px-4 max-w-5xl py-10">
                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Main column */}
                    <div className="lg:col-span-2 space-y-10">
                        {/* Intro */}
                        <div className="prose prose-lg prose-zinc max-w-none font-serif">
                            <p>{intro}</p>
                            <p>{insight}</p>
                        </div>

                        {/* Energy Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                            {energyStats.map((stat, i) => (
                                <div key={i} className="bg-white border border-zinc-200 rounded-xl p-4 text-center">
                                    <span className="text-2xl">{stat.icon}</span>
                                    <p className="text-lg font-bold text-zinc-900 mt-1">{stat.value}</p>
                                    <p className="text-xs text-zinc-500">{stat.label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Performance targets */}
                        <div className="bg-teal-50 border border-teal-200 rounded-2xl p-6">
                            <h2 className="flex items-center gap-2 text-lg font-bold text-teal-800 mb-3">
                                <Gauge className="h-5 w-5" /> Performance cible
                            </h2>
                            <div className="flex items-center gap-4">
                                <div className="flex-shrink-0 w-24 h-24 bg-teal-600 text-white rounded-xl flex flex-col items-center justify-center">
                                    <span className="text-2xl font-black font-mono">{rTarget.target.split(' ')[0]}</span>
                                    <span className="text-xs text-teal-200">{rTarget.target.split(' ').slice(1).join(' ')}</span>
                                </div>
                                <div>
                                    <p className="text-sm text-teal-700 font-medium">{rTarget.label}</p>
                                    <p className="text-xs text-teal-600 mt-1">Pour bénéficier de MaPrimeRénov&apos;, votre isolation doit atteindre cette résistance thermique minimum.</p>
                                </div>
                            </div>
                        </div>

                        {/* Price Breakdown */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <BarChart3 className="h-6 w-6 text-teal-600" />
                                Décomposition du prix à {city.name}
                            </h2>
                            <div className="bg-white border border-zinc-200 rounded-2xl overflow-hidden">
                                {priceBreakdown.map((item, i) => (
                                    <div key={i} className={`flex items-center justify-between px-5 py-4 ${i % 2 === 1 ? 'bg-zinc-50' : ''}`}>
                                        <div>
                                            <p className="font-semibold text-zinc-800 text-sm">{item.label}</p>
                                            <p className="text-xs text-zinc-500">{item.detail}</p>
                                        </div>
                                        <span className="font-bold text-teal-700 font-mono text-sm whitespace-nowrap ml-4">{item.price}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Widget */}
                        <div id="devis">
                            <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-2">
                                <ThermometerSnowflake className="h-6 w-6 text-teal-600" />
                                Devis {category.label} à {city.name}
                            </h2>
                            <ViteUnDevisWidget />
                        </div>

                        {/* Material Advice */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <Wrench className="h-6 w-6 text-teal-600" />
                                Quel isolant choisir à {city.name} ?
                            </h2>
                            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                                <p className="text-zinc-700 leading-relaxed font-serif">{materialAdvice}</p>
                            </div>
                        </section>

                        {/* Steps */}
                        <StepsModule city={city} category={category} />

                        {/* Expert Tip */}
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                            <h3 className="flex items-center gap-2 text-lg font-bold text-amber-800 mb-3">
                                <Lightbulb className="h-5 w-5" /> Conseil d&apos;expert
                            </h3>
                            <p className="text-amber-800 text-sm leading-relaxed font-serif">{expertTip}</p>
                        </div>

                        {/* Why choose */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4">
                                Pourquoi investir dans {category.article} à {city.name} ?
                            </h2>
                            <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                                <div className="flex items-start gap-3">
                                    <CheckCircle className="h-5 w-5 text-teal-600 mt-1 flex-shrink-0" />
                                    <p className="text-zinc-700 leading-relaxed font-serif">{whyChoose}</p>
                                </div>
                            </div>
                        </section>

                        {/* Related Guides */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-4 flex items-center gap-2">
                                <BookOpen className="h-6 w-6 text-teal-600" />
                                Guides liés
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {relevantGuides.map((guide) => (
                                    <Link key={guide.slug} href={`/guides/${guide.slug}`} className="flex items-center gap-3 bg-white border border-zinc-200 rounded-xl p-4 hover:border-teal-400 hover:shadow-md transition-all group">
                                        <BookOpen className="h-4 w-4 text-teal-500 flex-shrink-0" />
                                        <span className="text-sm font-semibold text-zinc-700 group-hover:text-teal-600 transition-colors">{guide.label}</span>
                                        <ArrowRight className="h-3 w-3 text-teal-400 ml-auto" />
                                    </Link>
                                ))}
                            </div>
                        </section>

                        {/* FAQ */}
                        <section>
                            <h2 className="text-2xl font-bold text-zinc-900 mb-6">Questions fréquentes</h2>
                            <Accordion type="single" collapsible className="bg-white rounded-2xl border border-zinc-200 px-6">
                                {faqItems.map((item, idx) => (
                                    <AccordionItem key={idx} value={`faq-${idx}`}>
                                        <AccordionTrigger className="text-base font-semibold text-zinc-800 py-5">{item.q}</AccordionTrigger>
                                        <AccordionContent className="text-zinc-600 font-serif">{item.a}</AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <aside className="space-y-6">
                        <LocalAidsModule city={city} />

                        {/* Price summary card */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-lg font-bold text-zinc-900 mb-4">Tarif {category.shortLabel}</h3>
                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Prix minimum</span>
                                    <span className="font-bold text-zinc-800">{category.priceMin} {category.unit}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Prix maximum</span>
                                    <span className="font-bold text-zinc-800">{category.priceMax} {category.unit}</span>
                                </div>
                                <hr className="border-zinc-100" />
                                <div className="flex justify-between">
                                    <span className="text-zinc-500">Aides max</span>
                                    <span className="font-bold text-teal-600">Jusqu&apos;à 90%</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl p-6 text-center text-white">
                            <h3 className="text-lg font-bold mb-3">Votre devis en 2 min</h3>
                            <p className="text-teal-100 text-sm mb-4">Comparez les prix et trouvez le meilleur artisan RGE à {city.name}.</p>
                            <Link href="#devis">
                                <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-6 py-4 rounded-xl shadow-md w-full">
                                    Comparer les devis <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </Link>
                        </div>

                        {/* Other categories */}
                        <div className="bg-white border border-zinc-200 rounded-2xl p-6 shadow-sm">
                            <h3 className="text-sm font-bold text-zinc-700 mb-3">Autres services à {city.name}</h3>
                            <div className="space-y-2">
                                {["isolation-combles", "isolation-exterieure", "isolation-phonique"]
                                    .filter(s => s !== category.slug)
                                    .map(slug => {
                                        const labels: Record<string, string> = {
                                            "isolation-combles": "Isolation combles",
                                            "isolation-exterieure": "Isolation extérieure (ITE)",
                                            "isolation-phonique": "Isolation phonique",
                                        };
                                        return (
                                            <Link key={slug} href={`/${slug}/${city.slug}`} className="flex items-center gap-2 text-sm text-teal-600 hover:text-teal-700 font-semibold">
                                                <ArrowRight className="h-3 w-3" /> {labels[slug]}
                                            </Link>
                                        );
                                    })}
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            <NearbyCitiesModule city={city} category={category} />
        </div>
    );
}
