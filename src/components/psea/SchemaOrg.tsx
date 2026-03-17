import { City, InsulationCategory } from "@/types";

export function SchemaOrg({ city, category }: { city: City; category: InsulationCategory }) {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Artisans ${category.label} à ${city.name}`,
        "description": `Trouvez un artisan certifié RGE pour ${category.article} à ${city.name} (${city.zip}). Comparez les devis et les prix au m² dans le ${city.department_name}.`,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.name,
            "postalCode": city.zip,
            "addressRegion": city.region,
            "addressCountry": "FR",
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coordinates.lat,
            "longitude": city.coordinates.lng,
        },
        "areaServed": {
            "@type": "City",
            "name": city.name,
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
