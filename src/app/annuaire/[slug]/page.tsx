import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllDepartments } from "@/lib/cities";
import { getCitiesByDepartment } from "@/lib/seo-utils";
import { MapPin, ChevronRight } from "lucide-react";
import { CATEGORY_LIST } from "@/data/categories";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const deptCode = slug.split('-').pop() || '';
    const departments = getAllDepartments();
    const dept = departments.find(d => d.code === deptCode);
    if (!dept) return {};
    return {
        title: `Isolation ${dept.name} (${dept.code}) — Prix et Artisans RGE`,
        description: `Trouvez un artisan isoleur certifié RGE dans le ${dept.name}. Combles, ITE, phonique : devis gratuits.`,
        alternates: { canonical: `https://www.cout-isolation-maison.fr/annuaire/${slug}` },
    };
}

export function generateStaticParams() {
    const departments = getAllDepartments();
    return departments.map(d => ({
        slug: `${d.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')}-${d.code}`
    }));
}

export default async function DepartmentPage({ params }: Props) {
    const { slug } = await params;
    const deptCode = slug.split('-').pop() || '';
    const departments = getAllDepartments();
    const dept = departments.find(d => d.code === deptCode);

    if (!dept) {
        notFound();
    }

    const cities = getCitiesByDepartment(deptCode);
    const sortedCities = [...cities].sort((a, b) => (b.population || 0) - (a.population || 0)).slice(0, 50);
    const mainCategory = CATEGORY_LIST[0];

    return (
        <div className="min-h-screen bg-white">
            <header className="bg-zinc-50 border-b border-zinc-200">
                <div className="container mx-auto px-4 max-w-5xl py-3 text-sm text-zinc-500">
                    <nav className="flex items-center gap-1">
                        <Link href="/" className="hover:text-teal-600">Accueil</Link>
                        <ChevronRight className="h-3 w-3" />
                        <Link href="/annuaire" className="hover:text-teal-600">Annuaire</Link>
                        <ChevronRight className="h-3 w-3" />
                        <span className="text-zinc-800 font-semibold">{dept.name} ({dept.code})</span>
                    </nav>
                </div>
            </header>

            <section className="container mx-auto px-4 py-12 max-w-5xl">
                <h1 className="text-3xl md:text-4xl font-black text-zinc-900 mb-2">
                    Isolation dans le {dept.name}
                </h1>
                <p className="text-lg text-zinc-600 mb-8 font-serif">
                    {sortedCities.length} villes couvertes · Région {dept.region}
                    {dept.aide_locale && <span className="block text-sm text-teal-600 mt-1">💡 {dept.aide_locale}</span>}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {sortedCities.map(city => (
                        <Link
                            key={city.slug}
                            href={`/${mainCategory.slug}/${city.slug}`}
                            className="flex items-center gap-2 p-3 bg-zinc-50 border border-zinc-200 rounded-lg hover:border-teal-300 hover:shadow-sm transition-all group text-sm"
                        >
                            <MapPin className="h-3 w-3 text-teal-500 flex-shrink-0" />
                            <div className="min-w-0">
                                <span className="text-zinc-700 group-hover:text-teal-600 font-medium block truncate">{city.name}</span>
                                <span className="text-xs text-zinc-400">{city.zip}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
