import { Metadata } from "next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "FAQ Isolation — Questions Fréquentes | Cout-Isolation-Maison.fr",
    description: "Réponses à toutes vos questions sur l'isolation : prix, aides, techniques, artisans RGE, réglementation. Guide complet.",
    alternates: { canonical: 'https://www.cout-isolation-maison.fr/faq' },
};

const faqItems = [
    { q: "Quel est le prix moyen de l'isolation des combles ?", a: "L'isolation des combles coûte entre 20 et 60 €/m² TTC, matériaux et pose inclus. Le soufflage en combles perdus est le plus économique (20-30 €/m²), tandis que l'isolation sous rampants (combles aménagés) monte à 40-60 €/m². Pour une maison de 100 m², comptez entre 2 000 et 6 000 € avant déductions d'aides." },
    { q: "Combien coûte une isolation par l'extérieur (ITE) ?", a: "L'ITE coûte entre 100 et 200 €/m² TTC. Le système enduit sur polystyrène est le moins cher (100-150 €/m²), tandis que le bardage bois monte à 150-200 €/m². Pour une maison de 100 m² de façade, le budget se situe entre 10 000 et 20 000 € avant aides. MaPrimeRénov' peut prendre en charge jusqu'à 75 €/m²." },
    { q: "Quelles aides pour l'isolation de ma maison en 2026 ?", a: "Vous pouvez cumuler : MaPrimeRénov' (jusqu'à 75 €/m² pour l'ITE), les primes CEE (8-12 €/m²), la TVA réduite à 5,5% et l'Éco-PTZ (50 000 € à taux 0). Le cumul de ces aides peut couvrir 50 à 90% du coût des travaux selon vos revenus." },
    { q: "Quel isolant choisir pour les combles ?", a: "Pour les combles perdus, la laine de verre soufflée (Isover, Knauf) ou la ouate de cellulose sont les meilleurs choix en rapport qualité/prix. Pour les combles aménagés, les panneaux de laine de roche (Rockwool) ou de fibre de bois (Steico) offrent un meilleur confort d'été grâce à leur déphasage thermique supérieur." },
    { q: "Quelle épaisseur d'isolant faut-il mettre ?", a: "L'épaisseur dépend du poste isolé et de la résistance thermique (R) visée. Pour les combles perdus : R ≥ 7 soit 28-35 cm de laine de verre. Pour les murs (ITE) : R ≥ 3.7 soit 12-16 cm de polystyrène ou fibre de bois. Ces valeurs sont les minimums pour bénéficier de MaPrimeRénov'." },
    { q: "L'isolation phonique est-elle éligible aux aides ?", a: "L'isolation phonique seule n'est généralement pas éligible à MaPrimeRénov'. Cependant, si les travaux améliorent aussi la performance thermique (ce qui est souvent le cas), ils peuvent y être éligibles. La TVA à 5,5% s'applique à tous les travaux d'amélioration dans un logement de plus de 2 ans." },
    { q: "Comment savoir si ma maison est bien isolée ?", a: "Faites réaliser un audit énergétique ou un DPE (Diagnostic de Performance Énergétique). Un DPE classé E, F ou G indique une maison mal isolée. Vous pouvez aussi vérifier les signes : murs froids au toucher, condensation sur les fenêtres, factures de chauffage élevées (> 15 €/m²/an)." },
    { q: "Quelle est la durée de vie d'une isolation ?", a: "Une isolation bien posée dure 30 à 50 ans minimum. La laine de verre et la laine de roche conservent leurs propriétés pendant plus de 50 ans. Les isolants biosourcés (fibre de bois, ouate de cellulose) ont une durée de vie similaire si correctement protégés de l'humidité." },
    { q: "Faut-il un artisan RGE pour isoler ?", a: "Oui, la certification RGE est obligatoire pour bénéficier de toutes les aides : MaPrimeRénov', primes CEE, Éco-PTZ et TVA 5,5%. Sans artisan RGE, vous perdez toutes les aides, soit des milliers d'euros d'économies. Vérifiez la certification sur le site france-renov.gouv.fr." },
    { q: "Combien de temps durent les travaux d'isolation ?", a: "L'isolation de combles par soufflage : 4 à 6 heures. L'isolation sous rampants : 2 à 5 jours. L'ITE enduit : 2 à 3 semaines. L'ITE bardage : 1 à 2 semaines. L'isolation phonique d'une pièce : 1 à 3 jours. Ces durées sont indicatives pour une maison individuelle de 100 m²." },
];

const faqSchema = {
    "@context": "https://schema.org", "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({ "@type": "Question", "name": item.q, "acceptedAnswer": { "@type": "Answer", "text": item.a } })),
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <section className="container mx-auto px-4 py-12 max-w-3xl">
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-4">Questions fréquentes</h1>
                <p className="text-lg text-zinc-500 mb-10 font-serif">Trouvez les réponses à vos questions sur l&apos;isolation de votre maison.</p>

                <Accordion type="single" collapsible className="bg-zinc-50 rounded-2xl border border-zinc-200 px-6">
                    {faqItems.map((item, idx) => (
                        <AccordionItem key={idx} value={`faq-${idx}`}>
                            <AccordionTrigger className="text-base font-semibold text-zinc-800 py-5">{item.q}</AccordionTrigger>
                            <AccordionContent className="text-zinc-600 font-serif">{item.a}</AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>

                <div className="text-center mt-12 bg-gradient-to-r from-teal-600 to-emerald-700 text-white rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-3">Vous avez un projet d&apos;isolation ?</h2>
                    <p className="text-teal-100 mb-6">Obtenez 3 devis gratuits d&apos;artisans certifiés RGE.</p>
                    <Link href="/devis">
                        <Button className="bg-white text-teal-700 hover:bg-teal-50 font-bold px-8 py-5 rounded-xl shadow-lg">
                            Demander mes devis <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </section>
        </div>
    );
}
