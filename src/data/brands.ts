export interface Brand {
    slug: string;
    name: string;
    country: string;
    tagline: string;
    description: string;
    strengths: string[];
    categories: string[];
    letter: string;
    letterColor: string;
    image?: string;
    imageAlt?: string;
}

export const brands: Brand[] = [
    {
        slug: "isover",
        name: "Isover",
        country: "France (Saint-Gobain)",
        tagline: "Leader mondial de l'isolation en laine de verre",
        description: "Isover, filiale du groupe Saint-Gobain, est le n°1 mondial de l'isolation en laine de verre minérale. Avec plus de 80 ans d'expérience et des usines en France (Orange, Chemillé, Chalon-sur-Saône), Isover propose une gamme complète pour l'isolation des combles (IBR, Isoconfort), des murs (GR32, Optima) et des sols. La technologie Multimax garantit des performances thermiques et acoustiques optimales. Certifié ACERMI, chaque produit Isover est testé et garanti pour sa résistance thermique effective.",
        strengths: ["N°1 mondial laine de verre", "Technologie Multimax", "Usines en France", "Certification ACERMI", "Gamme très large"],
        categories: ["isolation-combles", "isolation-exterieure", "isolation-phonique"],
        letter: "I",
        letterColor: "yellow",
    },
    {
        slug: "rockwool",
        name: "Rockwool",
        country: "Danemark",
        tagline: "Spécialiste mondial de l'isolation en laine de roche",
        description: "Rockwool est le leader mondial de l'isolation en laine de roche, un matériau naturel issu du basalte volcanique. Fondée en 1937, l'entreprise danoise se distingue par l'exceptionnel comportement au feu de ses produits (classement A1, incombustible). La gamme Rockfaçade pour l'ITE et Rockmur pour l'isolation intérieure offre des performances thermiques et acoustiques supérieures. La laine de roche Rockwool résiste à l'humidité, ne se tasse pas et conserve ses propriétés pendant plus de 50 ans.",
        strengths: ["Incombustible (classe A1)", "Durée de vie 50+ ans", "Excellente acoustique", "Résistant à l'humidité", "Recyclable"],
        categories: ["isolation-combles", "isolation-exterieure", "isolation-phonique"],
        letter: "R",
        letterColor: "red",
    },
    {
        slug: "knauf",
        name: "Knauf Insulation",
        country: "Allemagne",
        tagline: "Innovation et confort thermique depuis 1932",
        description: "Knauf Insulation, division du groupe allemand Knauf, propose une large gamme d'isolants en laine de verre (technologie ECOSE® sans formaldéhyde), laine de roche et polystyrène expansé. La technologie ECOSE® utilise un liant biosourcé à base d'amidon de maïs, rendant la pose plus agréable (moins irritant) et réduisant l'empreinte carbone de 70%. La gamme Thane (polyuréthane) offre les meilleures performances thermiques à épaisseur réduite (lambda = 0.022 W/m.K).",
        strengths: ["Technologie ECOSE® sans formaldéhyde", "Lambda record 0.022", "Pose non irritante", "Empreinte carbone -70%", "Large gamme"],
        categories: ["isolation-combles", "isolation-exterieure"],
        letter: "K",
        letterColor: "green",
    },
    {
        slug: "ursa",
        name: "Ursa",
        country: "Espagne (Xella)",
        tagline: "Solutions d'isolation thermique et acoustique haute performance",
        description: "Ursa, filiale du groupe allemand Xella, est un acteur majeur de l'isolation en laine de verre et polystyrène extrudé (XPS). La gamme URSA PUREONE se distingue par sa couleur blanche caractéristique et sa composition sans formaldéhyde ajouté. Pour l'ITE, la gamme URSA XPS offre une résistance mécanique exceptionnelle, idéale pour l'isolation des soubassements et terrasses. L'usine française de Desselgem produit une part significative de la gamme pour le marché européen.",
        strengths: ["PUREONE sans formaldéhyde", "XPS haute résistance", "Confort de pose", "Excellente acoustique", "Prix compétitifs"],
        categories: ["isolation-combles", "isolation-exterieure", "isolation-phonique"],
        letter: "U",
        letterColor: "blue",
    },
    {
        slug: "isonat",
        name: "Isonat",
        country: "France",
        tagline: "L'isolant biosourcé français en fibre de bois",
        description: "Isonat est le pionnier français de l'isolation biosourcée en fibre de bois. Basée à Mably (Loire), l'entreprise fabrique des panneaux isolants à partir de fibres de bois issues de forêts gérées durablement (PEFC). Le produit phare Isonat Plus 55 Flex offre un excellent déphasage thermique (confort d'été supérieur à la laine de verre) et une résistance thermique compétitive. Idéal pour les projets écologiques, Isonat a un bilan carbone négatif : le panneau stocke plus de CO₂ qu'il n'en émet lors de sa fabrication.",
        strengths: ["Bilan carbone négatif", "Déphasage thermique supérieur", "100% Made in France", "PEFC, biosourcé", "Confort d'été excellent"],
        categories: ["isolation-combles", "isolation-exterieure"],
        letter: "I",
        letterColor: "emerald",
    },
    {
        slug: "steico",
        name: "Steico",
        country: "Allemagne",
        tagline: "Leader européen des isolants en fibre de bois",
        description: "Steico est le premier fabricant européen d'isolants à base de fibre de bois. Fondée en 1986, l'entreprise allemande propose une gamme complète pour l'isolation écologique : panneaux rigides pour l'ITE (Steico Protect), panneaux flexibles pour l'isolation intérieure et des combles (Steico Flex), et ouate de cellulose soufflée (Steico Zell). Le système constructif intégré Steico (structure + isolation + étanchéité) simplifie les chantiers d'ITE en bois et garantit une performance globale certifiée.",
        strengths: ["N°1 européen fibre de bois", "Système constructif intégré", "Déphasage 10-14h", "Certification complète", "Innovation continue"],
        categories: ["isolation-combles", "isolation-exterieure"],
        letter: "S",
        letterColor: "amber",
    },
];
