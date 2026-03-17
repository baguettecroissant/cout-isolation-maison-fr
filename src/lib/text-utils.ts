import { City } from '@/types';

function hashCode(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        const char = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash |= 0;
    }
    return Math.abs(hash);
}

function pickVariant(options: string[], seed: string): string {
    return options[hashCode(seed) % options.length];
}

function pickVariantIdx(count: number, seed: string): number {
    return hashCode(seed) % count;
}

export function getCityIntro(city: City, categorySlug: string): string {
    const pop = city.population || 0;
    const seed = `${city.slug}-${categorySlug}`;

    const introsByCategory: Record<string, Record<string, string[]>> = {
        "isolation-combles": {
            large: [
                `Avec son parc immobilier dense, ${city.name} concentre un grand nombre de maisons dont les combles sont mal isolés ou pas isolés du tout. La déperdition thermique par la toiture peut atteindre 30% de la facture de chauffage.`,
                `Dans l'agglomération de ${city.name}, les diagnostiqueurs DPE constatent que l'isolation des combles est le premier levier d'économies d'énergie pour les propriétaires de maisons individuelles.`,
                `Le bassin de vie de ${city.name} (${pop.toLocaleString('fr-FR')} habitants) bénéficie d'un réseau dense d'artisans RGE spécialisés en isolation des combles : soufflage, panneaux rampants ou sarking.`,
                `À ${city.name}, la rénovation énergétique des combles est une priorité portée par les politiques locales du ${city.department_name}. Les aides cumulées peuvent couvrir jusqu'à 90% du chantier pour les ménages modestes.`,
                `L'urbanisme de ${city.name} mêle maisons anciennes et pavillons des années 70-80 : deux typologies où l'isolation des combles procure les gains les plus spectaculaires, avec un retour sur investissement de 3 à 5 ans.`,
            ],
            medium: [
                `La commune de ${city.name} voit les chantiers d'isolation des combles se multiplier, encouragés par MaPrimeRénov' et le renforcement des audits DPE obligatoires à la vente.`,
                `Fort de ses ${pop.toLocaleString('fr-FR')} habitants, ${city.name} dispose d'artisans qualifiés RGE capables d'intervenir en soufflage (combles perdus) comme en isolation sous rampants (combles aménagés).`,
                `À ${city.name}, isoler ses combles permet de gagner 1 à 2 classes DPE. Un investissement moyen de 1 500 à 3 000 € (avant aides) amorti en 3 ans grâce aux économies de chauffage.`,
                `Le patrimoine bâti de ${city.name} se rénove : l'isolation des combles est le geste n°1 recommandé par les audits énergétiques dans le ${city.department_name}.`,
            ],
            small: [
                `Les maisons individuelles de ${city.name} offrent un potentiel d'isolation des combles important. La technique du soufflage de laine isolante est rapide (une demi-journée) et les résultats sont immédiats.`,
                `En plein ${city.department_name}, ${city.name} bénéficie d'artisans isoleurs intervenant sur toute la zone pour l'isolation des combles perdus et aménageables.`,
                `Les propriétaires de ${city.name} profitent des mêmes aides que les grandes villes pour l'isolation de leurs combles. Le coût moyen de 25 à 45 €/m² est rapidement amorti.`,
                `Dans la commune de ${city.name}, les habitations individuelles avec combles non isolés sont particulièrement énergivores : l'isolation par soufflage représente le meilleur ratio investissement/économie.`,
            ],
            default: [
                `Dans le département ${city.department_name}, le secteur de ${city.name} est couvert par notre réseau d'artisans isoleurs certifiés RGE pour l'isolation des combles.`,
                `Les habitants de ${city.name} peuvent bénéficier de MaPrimeRénov' et des primes CEE pour isoler leurs combles à moindre coût dans le ${city.department_name}.`,
            ],
        },
        "isolation-exterieure": {
            large: [
                `L'ITE se développe fortement à ${city.name}, portée par les obligations de rénovation énergétique des copropriétés et la volonté des propriétaires d'améliorer leur DPE sans perdre de surface habitable.`,
                `Avec ses ${pop.toLocaleString('fr-FR')} habitants, ${city.name} concentre un grand nombre de façades à rénover. L'isolation par l'extérieur (enduit ou bardage) supprime les ponts thermiques tout en ravivant l'esthétique du bâti.`,
                `Le parc immobilier de ${city.name} offre un potentiel considérable pour l'ITE : les murs non isolés représentent 20 à 25% des pertes de chaleur dans les constructions d'avant 1975.`,
                `À ${city.name}, les entreprises spécialisées en ITE maîtrisent les deux systèmes : enduit sur isolant (ETICS) et bardage ventilé, pour s'adapter à chaque type de façade du ${city.department_name}.`,
            ],
            medium: [
                `La commune de ${city.name} connaît une hausse significative des chantiers d'ITE. Le système enduit sur polystyrène reste le plus économique (100-150 €/m²), tandis que le bardage bois séduit pour son esthétique.`,
                `À ${city.name}, l'isolation extérieure est plébiscitée pour sa double fonction : performance thermique et ravalement de façade en un seul chantier, éligible à MaPrimeRénov'.`,
                `Les artisans façadiers RGE de ${city.name} et du ${city.department_name} proposent des solutions d'ITE adaptées au bâti local, avec un accompagnement complet pour le montage des dossiers d'aides.`,
            ],
            small: [
                `Les maisons individuelles de ${city.name} sont idéalement adaptées à l'ITE : aucune perte de surface habitable et un confort thermique été comme hiver nettement amélioré.`,
                `À ${city.name}, l'ITE en bardage bois offre une isolation performante (R ≥ 3.7) tout en apportant un cachet architectural aux façades des maisons du ${city.department_name}.`,
                `Les propriétaires de ${city.name} bénéficient d'aides majorées pour l'ITE, premier poste de déperdition après les combles, avec un reste à charge réduit grâce au cumul MaPrimeRénov' + CEE.`,
            ],
            default: [
                `Les entreprises d'ITE du ${city.department_name} couvrent le secteur de ${city.name} et proposent des devis gratuits pour votre projet d'isolation extérieure.`,
                `À ${city.name}, l'isolation par l'extérieur est recommandée pour les maisons dont les murs n'atteignent pas la résistance thermique cible de R = 3.7 m².K/W.`,
            ],
        },
        "isolation-phonique": {
            large: [
                `La densité urbaine de ${city.name} rend l'isolation phonique indispensable. Bruits de voisinage, circulation, équipements : chaque source sonore nécessite un traitement acoustique adapté.`,
                `À ${city.name} (${city.zip}), les nuisances sonores sont la première cause de plaintes en copropriété. L'isolation acoustique des murs mitoyens, plafonds et sols permet de retrouver un confort de vie optimal.`,
                `Le parc immobilier de ${city.name} comprend de nombreux logements construits avant les normes acoustiques de 1996 : l'isolation phonique y est un investissement santé et confort majeur.`,
                `Avec ses ${pop.toLocaleString('fr-FR')} habitants, la métropole de ${city.name} concentre les meilleurs acousticiens et isolateurs phoniques de la région ${city.region}.`,
            ],
            medium: [
                `À ${city.name}, l'isolation phonique des cloisons et planchers est une demande croissante, portée par le télétravail et le besoin d'espaces calmes au sein du logement.`,
                `La commune de ${city.name} recense de nombreux logements où l'affaiblissement acoustique des parois est insuffisant : une isolation phonique performante peut réduire le bruit de 30 à 50 dB.`,
                `Les résidents de ${city.name} bénéficient d'un réseau d'artisans qualifiés en acoustique du bâtiment, capables d'intervenir sur murs, plafonds, sols et fenêtres.`,
            ],
            small: [
                `Les habitations de ${city.name} peuvent souffrir de bruits extérieurs liés aux routes départementales ou au voisinage. Une isolation phonique ciblée apporte un confort immédiat.`,
                `À ${city.name}, l'isolation phonique des planchers intermédiaires (bruits de pas, impacts) est souvent le premier besoin exprimé par les propriétaires de maisons à étages.`,
                `Les propriétaires de ${city.name} trouvent dans l'isolation phonique un investissement qui valorise leur bien immobilier tout en améliorant leur qualité de vie quotidienne.`,
            ],
            default: [
                `Dans le ${city.department_name}, les spécialistes en acoustique interviennent à ${city.name} pour diagnostiquer et traiter les problèmes d'isolation phonique de votre logement.`,
                `À ${city.name}, une isolation phonique correctement dimensionnée élimine les nuisances sonores et améliore significativement le confort de vie au quotidien.`,
            ],
        },
    };

    const catIntros = introsByCategory[categorySlug] || introsByCategory["isolation-combles"];

    if (pop > 50000) return pickVariant(catIntros.large, seed);
    if (pop > 10000) return pickVariant(catIntros.medium, seed);
    if (pop > 2000) return pickVariant(catIntros.small, seed);
    return pickVariant(catIntros.default, seed);
}

export function getLocalInsight(city: City, categorySlug: string): string {
    const pop = city.population || 0;
    const seed = `insight-${city.slug}-${categorySlug}`;
    const idx = pickVariantIdx(6, seed);

    const climateZones: Record<string, string> = {
        'Île-de-France': 'zone H1a, aux hivers modérés mais humides — une bonne isolation est cruciale pour limiter les besoins en chauffage',
        'Hauts-de-France': 'zone H1a, parmi les plus froides de France — l\'isolation thermique y est un enjeu majeur de confort et d\'économies',
        'Grand Est': 'zone H1b, soumise à des hivers rigoureux — l\'isolation doit être dimensionnée pour des résistances thermiques élevées (R ≥ 6 en combles)',
        'Normandie': 'zone H1a, au climat océanique frais et humide — l\'isolation doit aussi gérer les problèmes de condensation et d\'humidité',
        'Bretagne': 'zone H2a, au climat doux mais venteux — l\'étanchéité à l\'air est aussi importante que l\'isolation thermique',
        'Pays de la Loire': 'zone H2b, au climat océanique tempéré — une isolation R=4 des murs et R=6 des combles offre un excellent confort',
        'Centre-Val de Loire': 'zone H1b, aux hivers frais avec des épisodes de gel — l\'isolation des combles et des murs est prioritaire',
        'Bourgogne-Franche-Comté': 'zone H1c, au climat semi-continental — des épaisseurs d\'isolant supérieures sont recommandées pour un confort optimal',
        'Nouvelle-Aquitaine': 'zone H2c, au climat globalement doux — mais l\'isolation thermique reste essentielle pour le confort d\'été',
        'Occitanie': 'zone H3, au climat méditerranéen — l\'isolation protège autant de la chaleur estivale que du froid hivernal',
        'Auvergne-Rhône-Alpes': 'zone H1c, marquée par des hivers froids en altitude — les exigences d\'isolation y sont parmi les plus élevées de France',
        'Provence-Alpes-Côte d\'Azur': 'zone H3, la plus ensoleillée — l\'isolation joue un rôle clé pour le confort d\'été (déphasage thermique)',
        'Corse': 'zone H3, au climat méditerranéen avec des nuances montagnardes — l\'isolation doit s\'adapter à des besoins variés selon l\'altitude',
    };

    const climate = climateZones[city.region] || `une zone climatique spécifique du ${city.department_name} où l'isolation thermique est un enjeu central`;

    const insights = [
        `${city.name} se situe en ${climate}. Ce facteur influence directement le choix de l'isolant et l'épaisseur à mettre en œuvre. Les professionnels du ${city.department_name} intègrent ces données dans chaque étude pour optimiser le rapport épaisseur/performance.`,
        `Avec un parc immobilier dont une part significative date d'avant 1975, ${city.name} est un territoire prioritaire pour l'isolation thermique. Les diagnostiqueurs DPE du ${city.department_name} constatent régulièrement des classements E à G : isoler permet de gagner 2 à 3 classes DPE.`,
        `La position géographique de ${city.name} en ${climate}. Les besoins d'isolation varient selon l'exposition, l'altitude et le micro-climat local. Un audit énergétique préalable permet de cibler les travaux les plus rentables.`,
        `Les artisans RGE intervenant à ${city.name} et dans le ${city.department_name} connaissent les spécificités du bâti local. Maisons en pierre, pavillons des années 70 ou constructions récentes : chaque type de logement requiert une approche isolante adaptée.`,
        `Le marché de l'isolation à ${city.name} est dynamique : les demandes de devis ont augmenté de plus de 35% en un an dans le ${city.department_name}. Cette tendance s'explique par la hausse du prix de l'énergie et les aides renforcées qui rendent les projets très accessibles.`,
        `${pop > 10000 ? `Ville de ${pop.toLocaleString('fr-FR')} habitants, ${city.name}` : `Commune du ${city.department_name}, ${city.name}`} bénéficie de l'expertise des bureaux d'études thermiques et des isolateurs spécialisés de la région. La concurrence locale garantit des tarifs compétitifs et un délai d'intervention rapide, généralement sous 2 à 3 semaines.`,
    ];

    return insights[idx];
}

export function getWhyChoose(city: City, categorySlug: string): string {
    const seed = `why-${city.slug}-${categorySlug}`;

    const whyByCategory: Record<string, string[]> = {
        "isolation-combles": [
            `Isoler les combles à ${city.name} est le geste de rénovation le plus rentable : pour un investissement de 20 à 60 €/m², vous réduisez votre facture de chauffage de 25 à 30%. Sur 20 ans, les économies cumulées dépassent largement le coût des travaux.`,
            `L'isolation des combles à ${city.name} offre le meilleur retour sur investissement de tous les travaux de rénovation énergétique. Avec les aides MaPrimeRénov' et CEE, le reste à charge peut descendre sous les 500 € pour une maison de 100 m².`,
            `À ${city.name}, 30% de la chaleur de votre logement s'échappe par la toiture si vos combles ne sont pas isolés. La technique du soufflage (laine de verre ou ouate de cellulose) permet d'atteindre une résistance thermique R = 7 en une demi-journée de travaux.`,
        ],
        "isolation-exterieure": [
            `L'ITE à ${city.name} est la solution la plus complète : elle supprime 100% des ponts thermiques, améliore le confort été/hiver et rénove la façade en un seul chantier. L'investissement de 100 à 200 €/m² est amorti en 8 à 12 ans.`,
            `Isoler par l'extérieur à ${city.name} préserve votre surface habitable et l'inertie thermique des murs. En été, votre maison reste fraîche naturellement grâce au déphasage thermique. En hiver, les murs stockent et restituent la chaleur.`,
            `L'ITE enduit ou bardage à ${city.name} est éligible à MaPrimeRénov' jusqu'à 75 €/m² pour les ménages modestes. Combinée aux primes CEE et à la TVA 5,5%, le reste à charge peut être réduit de 50 à 70%.`,
        ],
        "isolation-phonique": [
            `L'isolation phonique à ${city.name} est un investissement bien-être : un traitement acoustique adapté réduit les nuisances sonores de 30 à 50 dB, transformant votre logement en havre de paix.`,
            `Investir dans l'isolation acoustique à ${city.name} valorise votre bien immobilier : les acquéreurs sont de plus en plus sensibles au confort phonique, surtout en zone urbaine du ${city.department_name}.`,
        ],
    };

    const variants = whyByCategory[categorySlug] || whyByCategory["isolation-combles"];
    return pickVariant(variants, seed);
}

export function getPriceBreakdown(city: City, categorySlug: string): { label: string; price: string; detail: string }[] {
    const seed = `price-${city.slug}-${categorySlug}`;
    const idx = pickVariantIdx(2, seed);

    const breakdowns: Record<string, { label: string; price: string; detail: string }[][]> = {
        "isolation-combles": [
            [
                { label: "Isolant (laine de verre soufflée)", price: "8 – 12 €/m²", detail: "R = 7 — 30 cm d'épaisseur" },
                { label: "Main d'œuvre (soufflage machine)", price: "10 – 15 €/m²", detail: "Pose par artisan RGE" },
                { label: "Préparation du chantier", price: "2 – 5 €/m²", detail: "Protection, accès, repérage réseau" },
                { label: "TVA réduite (5,5%)", price: "−1 à −2 €/m²", detail: "Au lieu de 20% — logement > 2 ans" },
            ],
            [
                { label: "Isolant (ouate de cellulose soufflée)", price: "10 – 15 €/m²", detail: "R = 7 — 32 cm d'épaisseur" },
                { label: "Main d'œuvre + machine", price: "12 – 18 €/m²", detail: "Intervention par professionnel RGE du " + city.department_name },
                { label: "Pare-vapeur + scotch", price: "3 – 5 €/m²", detail: "Étanchéité à l'air obligatoire" },
                { label: "TVA réduite (5,5%)", price: "−1 à −2 €/m²", detail: "Économie automatique" },
            ],
        ],
        "isolation-exterieure": [
            [
                { label: "Panneaux isolants (PSE ou laine de roche)", price: "20 – 40 €/m²", detail: "Épaisseur 12-16 cm — R ≥ 3.7" },
                { label: "Sous-enduit armé + finition crépis", price: "30 – 50 €/m²", detail: "Système ETICS complet" },
                { label: "Échafaudage + sécurité", price: "10 – 20 €/m²", detail: "Location et montage" },
                { label: "Main d'œuvre façadier RGE", price: "35 – 55 €/m²", detail: "Artisans qualifiés du " + city.department_name },
            ],
            [
                { label: "Isolant fibre de bois (Steico/Isonat)", price: "25 – 45 €/m²", detail: "Épaisseur 14-18 cm — Déphasage 10h+" },
                { label: "Bardage ventilé (bois ou composite)", price: "40 – 70 €/m²", detail: "Esthétique et durable 40+ ans" },
                { label: "Ossature et fixations", price: "15 – 25 €/m²", detail: "Structure aluminium ou bois" },
                { label: "Main d'œuvre", price: "40 – 60 €/m²", detail: "Pose par entreprise spécialisée ITE" },
            ],
        ],
        "isolation-phonique": [
            [
                { label: "Laine de roche acoustique (45mm)", price: "5 – 12 €/m²", detail: "Rockwool Alpharock ou équivalent" },
                { label: "Ossature métallique + suspentes", price: "8 – 15 €/m²", detail: "Désolidarisation anti-vibrations" },
                { label: "Plaques de plâtre BA13 acoustique", price: "5 – 10 €/m²", detail: "Double parement recommandé" },
                { label: "Main d'œuvre plaquiste", price: "15 – 30 €/m²", detail: "Artisan spécialisé acoustique" },
            ],
            [
                { label: "Panneau acoustique composite", price: "15 – 30 €/m²", detail: "Masse-ressort-masse intégré" },
                { label: "Joints acoustiques + bandes résilientes", price: "3 – 6 €/m²", detail: "Traitement des liaisons" },
                { label: "Sous-couche résiliente sol", price: "8 – 15 €/m²", detail: "Atténuation bruits d'impact" },
                { label: "Main d'œuvre", price: "20 – 35 €/m²", detail: "Pose conforme NRA" },
            ],
        ],
    };

    const catBreakdowns = breakdowns[categorySlug] || breakdowns["isolation-combles"];
    return catBreakdowns[idx];
}

export function getMaterialAdvice(city: City, categorySlug: string): string {
    const seed = `mat-${city.slug}-${categorySlug}`;

    const adviceByCategory: Record<string, string[]> = {
        "isolation-combles": [
            `Pour les combles de votre maison à ${city.name}, la laine de verre soufflée reste le choix le plus économique (lambda 0.032-0.040). Pour un meilleur confort d'été en ${city.region}, privilégiez la ouate de cellulose (déphasage 10-12h) ou la fibre de bois (12-14h). L'épaisseur minimum pour atteindre R = 7 est de 28 cm en laine minérale.`,
            `Les artisans RGE du ${city.department_name} recommandent souvent la ouate de cellulose soufflée pour les combles perdus à ${city.name} : excellent rapport qualité/prix, bon déphasage thermique et matériau recyclé. Pour les rampants, les panneaux semi-rigides en fibre de bois offrent le meilleur confort tout au long de l'année.`,
            `En ${city.region}, le climat impose une isolation des combles avec R ≥ 7 pour être éligible à MaPrimeRénov'. À ${city.name}, les professionnels posent généralement 30 à 35 cm de laine soufflée pour atteindre R = 8, un investissement minime qui surpasse les exigences réglementaires et maximise les économies.`,
        ],
        "isolation-exterieure": [
            `Pour l'ITE de votre maison à ${city.name}, le polystyrène expansé (PSE) reste le plus économique en enduit (lambda 0.032). En ${city.region}, les façadiers recommandent de plus en plus la laine de roche (incompustible, A1 au feu) ou la fibre de bois (déphasage thermique supérieur pour le confort d'été).`,
            `Le bardage ventilé en fibre de bois gagne du terrain à ${city.name} et dans le ${city.department_name} : aspect esthétique, déphasage thermique de 10h+ et bilan carbone négatif. C'est l'option idéale en climat ${city.region === 'Provence-Alpes-Côte d\'Azur' || city.region === 'Occitanie' ? 'chaud' : 'continental'} pour allier performance hiver et confort d'été.`,
        ],
        "isolation-phonique": [
            `Pour l'isolation phonique à ${city.name}, la laine de roche en panneaux semi-rigides de densité 40-70 kg/m³ offre les meilleures performances acoustiques. En cloison séparative, un système masse-ressort-masse (2 plaques BA13 + isolant) permet d'atteindre un affaiblissement de Rw+C = 55 dB.`,
            `Les acousticiens du ${city.department_name} privilégient les systèmes désolidarisés pour traiter les bruits d'impact à ${city.name}. Une sous-couche résiliente sous chape flottante réduit les bruits de pas de 15 à 25 dB (ΔLw), conformément à la NRA.`,
        ],
    };

    const variants = adviceByCategory[categorySlug] || adviceByCategory["isolation-combles"];
    return pickVariant(variants, seed);
}

export function getEnergyStats(city: City, categorySlug: string): { label: string; value: string; icon: string }[] {
    const pop = city.population || 0;
    const seed = `stats-${city.slug}-${categorySlug}`;
    const idx = pickVariantIdx(3, seed);

    const localSavingsMultiplier = pop > 50000 ? 1.1 : pop > 10000 ? 1.0 : 0.95;
    const baseGasSaving = Math.round(350 * localSavingsMultiplier);
    const baseElecSaving = Math.round(280 * localSavingsMultiplier);

    const statSets = [
        [
            { label: "Économie chauffage/an", value: `${baseGasSaving} – ${Math.round(baseGasSaving * 1.4)} €`, icon: "💰" },
            { label: "Gain DPE estimé", value: "+1 à 2 classes", icon: "📊" },
            { label: "Retour sur investissement", value: "3 – 7 ans", icon: "⏱️" },
            { label: "Réduction CO₂/an", value: "0.8 – 1.5 t", icon: "🌿" },
        ],
        [
            { label: "Économie énergie annuelle", value: `${baseElecSaving} – ${Math.round(baseElecSaving * 1.5)} €`, icon: "⚡" },
            { label: "Confort thermique", value: "+3 à 5 °C l'hiver", icon: "🌡️" },
            { label: "Durée de vie isolant", value: "30 – 50 ans", icon: "🔧" },
            { label: "Valorisation du bien", value: "+5 à 15 %", icon: "🏠" },
        ],
        [
            { label: "Réduction facture", value: `${Math.round(baseGasSaving * 0.8)} – ${Math.round(baseGasSaving * 1.2)} €/an`, icon: "📉" },
            { label: "Amélioration DPE", value: "Jusqu'à +3 classes", icon: "🔋" },
            { label: "Amortissement aides", value: "1 – 4 ans", icon: "🎯" },
            { label: "Température été", value: "−3 à −6 °C", icon: "❄️" },
        ],
    ];

    return statSets[idx];
}

export function getExpertTip(city: City, categorySlug: string): string {
    const seed = `tip-${city.slug}-${categorySlug}`;

    const tipsByCategory: Record<string, string[]> = {
        "isolation-combles": [
            `Astuce pro : à ${city.name}, demandez systématiquement un test d'infiltrométrie (blower door) après l'isolation de vos combles. Un bon artisan RGE le propose en option (200-400 €) — il vérifie que l'étanchéité à l'air est conforme et que votre isolation atteint son potentiel maximum.`,
            `Conseil local : les artisans RGE du ${city.department_name} recommandent de profiter de l'isolation des combles pour vérifier l'état de la ventilation (VMC). Une bonne isolation sans ventilation adaptée crée des problèmes de condensation. Le combo isolation + VMC hygroréglable est l'approche optimale.`,
            `À ${city.name}, pensez à vérifier l'état de votre charpente avant d'isoler vos combles. Les artisans sérieux incluent un diagnostic charpente gratuit dans leur devis. Un traitement préventif (350-800 €) protège votre investissement pour 10+ ans.`,
            `Le saviez-vous ? À ${city.name}, le soufflage de ouate de cellulose offre un avantage méconnu : sa densité de 25-30 kg/m³ atténue les bruits de pluie sur la toiture, combinant ainsi isolation thermique et acoustique en un seul geste.`,
        ],
        "isolation-exterieure": [
            `À ${city.name}, si vous prévoyez une ITE, renseignez-vous auprès de la mairie sur les règles d'urbanisme : certains PLU imposent des contraintes de couleur ou de matériaux en façade. Le dépôt de déclaration préalable est obligatoire.`,
            `Conseil d'expert pour ${city.name} : combinez votre ITE avec le remplacement des menuiseries (fenêtres, portes). L'échafaudage étant déjà en place, le surcoût est modéré et vous traitez les deux principales sources de ponts thermiques en un seul chantier.`,
            `Astuce budget : à ${city.name}, synchronisez votre ITE avec un ravalement obligatoire. Certaines mairies du ${city.department_name} imposent un ravalement tous les 10-15 ans. En combinant les deux, vous mutualisez l'échafaudage et bénéficiez des aides isolation en bonus.`,
        ],
        "isolation-phonique": [
            `À ${city.name}, avant d'investir dans l'isolation phonique, demandez un diagnostic acoustique (300-600 €). Il identifie précisément les sources de bruit et oriente la solution vers le meilleur rapport coût/efficacité. Sans diagnostic, vous risquez de traiter le mauvais mur.`,
            `Conseil local : dans les appartements de ${city.name}, les nuisances sonores viennent souvent des canalisations ou de la VMC autant que des murs. Un acousticien du ${city.department_name} identifie ces sources invisibles et propose des solutions ciblées bien plus économiques qu'un doublage complet.`,
        ],
    };

    const variants = tipsByCategory[categorySlug] || tipsByCategory["isolation-combles"];
    return pickVariant(variants, seed);
}
