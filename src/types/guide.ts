export interface Guide {
    id: number;
    title: string;
    slug: string;
    metaTitle: string;
    metaDescription: string;
    category: GuideCategory;
    readTime: string;
    updatedAt: string;
    excerpt: string;
    heroImage?: string;
    heroAlt?: string;
    content: string;
}

export type GuideCategory =
    | 'combles'
    | 'ite'
    | 'phonique'
    | 'aides'
    | 'renovation'
    | 'materiaux'
    | 'reglementation'
    | 'comparatifs';

export const GUIDE_CATEGORIES: Record<GuideCategory, { label: string; emoji: string; color: string }> = {
    combles: { label: 'Combles', emoji: '🏠', color: 'teal' },
    ite: { label: 'ITE', emoji: '🧱', color: 'emerald' },
    phonique: { label: 'Phonique', emoji: '🔇', color: 'cyan' },
    aides: { label: 'Aides & Financement', emoji: '🏛️', color: 'purple' },
    renovation: { label: 'Rénovation', emoji: '🔨', color: 'orange' },
    materiaux: { label: 'Matériaux', emoji: '🧶', color: 'green' },
    reglementation: { label: 'Réglementation', emoji: '📋', color: 'blue' },
    comparatifs: { label: 'Comparatifs', emoji: '⚖️', color: 'amber' },
};
