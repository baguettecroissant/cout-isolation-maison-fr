import { InsulationCategory } from "@/types";

export const CATEGORIES: Record<string, InsulationCategory> = {
    "isolation-combles": {
        id: 153,
        slug: "isolation-combles",
        label: "Isolation des combles",
        shortLabel: "Combles",
        article: "une isolation des combles",
        priceMin: 20,
        priceMax: 60,
        unit: "€/m²",
        cpl: 21.6,
        icon: "Home",
        color: "teal",
        description: "L'isolation des combles est le geste le plus rentable : les combles non isolés représentent jusqu'à 30% des déperditions thermiques d'une maison. Soufflage, panneaux rampants ou sarking, chaque technique s'adapte à votre configuration.",
        vudBoxId: "b4fec02231",
    },
    "isolation-exterieure": {
        id: 103,
        slug: "isolation-exterieure",
        label: "Isolation extérieure (ITE)",
        shortLabel: "ITE",
        article: "une isolation par l'extérieur",
        priceMin: 100,
        priceMax: 200,
        unit: "€/m²",
        cpl: 16.6,
        icon: "Layers",
        color: "emerald",
        description: "L'ITE (Isolation Thermique par l'Extérieur) enveloppe votre maison d'un manteau isolant continu, supprimant les ponts thermiques. Enduit ou bardage, elle offre le meilleur rapport performance/confort sans réduire la surface habitable.",
        vudBoxId: "b4fec02231",
    },
    "isolation-phonique": {
        id: 157,
        slug: "isolation-phonique",
        label: "Isolation phonique",
        shortLabel: "Phonique",
        article: "une isolation phonique",
        priceMin: 30,
        priceMax: 80,
        unit: "€/m²",
        cpl: 8,
        icon: "Volume2",
        color: "cyan",
        description: "L'isolation phonique ou acoustique réduit les nuisances sonores (voisinage, rue, équipements). Cloisons, plafonds, sols : chaque paroi requiert une solution adaptée pour un confort acoustique optimal.",
        vudBoxId: "b4fec02231",
    },
};

export const CATEGORY_LIST = Object.values(CATEGORIES);
export const CATEGORY_SLUGS = Object.keys(CATEGORIES);
