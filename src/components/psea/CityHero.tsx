import { City, InsulationCategory } from "@/types";
import { MapPin, Shield } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CityHero({ city, category }: { city: City; category: InsulationCategory }) {
    const pop = city.population || 0;
    const popLabel = pop > 0 ? `${pop.toLocaleString('fr-FR')} habitants` : '';

    return (
        <section className="bg-gradient-to-br from-teal-950 via-teal-900 to-emerald-900 py-12 lg:py-20">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="flex items-center gap-2 text-teal-300 text-sm mb-4">
                    <MapPin className="h-4 w-4" />
                    <span>{city.department_name} · {city.region}</span>
                    {popLabel && <span className="text-teal-400/60">· {popLabel}</span>}
                </div>
                <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">
                    {category.label} à {city.name}{' '}
                    <span className="text-teal-400">({city.zip})</span>
                </h1>
                <p className="text-lg text-teal-100 max-w-2xl mb-6 font-serif">
                    Prix au m² et artisans certifiés RGE dans le {city.department_name}.
                    Tarifs entre <strong className="text-white">{category.priceMin}€</strong> et{' '}
                    <strong className="text-white">{category.priceMax}€/{category.unit.replace('€/', '')}</strong>, matériaux et pose compris.
                </p>
                <div className="flex flex-wrap gap-3 items-center">
                    <Link href="#devis">
                        <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-400 hover:to-red-400 text-white font-bold px-8 py-6 rounded-xl shadow-lg">
                            <Shield className="mr-2 h-5 w-5" />
                            Estimer mon isolation à {city.name}
                        </Button>
                    </Link>
                    <span className="text-teal-300 text-sm flex items-center gap-1.5">
                        <span className="inline-block w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        Éligible MaPrimeRénov&apos; 2026
                    </span>
                </div>
            </div>
        </section>
    );
}
