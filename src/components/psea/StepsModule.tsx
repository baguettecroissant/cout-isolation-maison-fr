import { City, InsulationCategory } from "@/types";

export function StepsModule({ city, category }: { city: City; category: InsulationCategory }) {
    return (
        <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-8">
                Comment réussir {category.article} à {city.name} ?
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
                {[
                    { step: "1", title: "Comparez", desc: `Remplissez le formulaire ci-dessus pour recevoir jusqu'à 3 devis d'artisans RGE à ${city.name}.` },
                    { step: "2", title: "Visite technique", desc: "Un professionnel vient chez vous pour évaluer l'existant, mesurer les surfaces et recommander l'isolant adapté." },
                    { step: "3", title: "Travaux d'isolation", desc: `Les travaux durent 1 à 5 jours selon le projet. Nos artisans du ${city.department_name} sont certifiés RGE et Qualibat.` },
                    { step: "4", title: "Économies", desc: "Dès la fin du chantier, vous constatez une baisse de votre facture de chauffage. Confort immédiat, été comme hiver." },
                ].map(s => (
                    <div key={s.step} className="relative bg-white p-6 rounded-2xl border border-zinc-100 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                            <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-lg">{s.step}</div>
                            <h3 className="text-lg font-bold text-zinc-800">{s.title}</h3>
                        </div>
                        <p className="text-zinc-600 text-sm leading-relaxed">{s.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
