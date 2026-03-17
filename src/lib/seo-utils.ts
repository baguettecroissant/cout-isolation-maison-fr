import { City } from "@/types";
import citiesData from "@/lib/db/cities.json";
import departmentsData from "@/lib/db/departments-infos.json";

const cities = citiesData as City[];

export function getCityFromSlug(slug: string): City | undefined {
    const city = cities.find(c => c.slug === slug);
    if (!city) return undefined;

    const deptInfo = departmentsData.find(d => d.code === city.department_code);
    return {
        ...city,
        department_info: deptInfo
    };
}

export function getAllCitySlugs(): string[] {
    return [...cities]
        .sort((a, b) => (b.population || 0) - (a.population || 0))
        .map(c => c.slug);
}

export function generateCityMetadata(city: City, categoryLabel: string, categorySlug: string) {
    const title = `${categoryLabel} à ${city.name} (${city.zip}) — Prix au m² et devis 2026`;
    const description = `Quel est le coût ${categoryLabel.toLowerCase().startsWith('i') ? "d'" : "de l'"}${categoryLabel.toLowerCase()} à ${city.name} ? Comparez les tarifs des artisans RGE du ${city.department_name} et obtenez votre devis gratuit.`;
    const url = `https://www.cout-isolation-maison.fr/${categorySlug}/${city.slug}`;
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: 'article' as const,
        },
        twitter: {
            card: 'summary' as const,
            title,
            description,
        },
    };
}

export function getAllDepartmentCodes(): string[] {
    return departmentsData.map(d => d.code);
}

export function getCitiesByDepartment(departmentCode: string): City[] {
    return cities.filter(c => c.department_code === departmentCode);
}
