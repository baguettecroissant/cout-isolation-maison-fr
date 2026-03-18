export const dynamic = 'force-dynamic';

import { notFound } from "next/navigation";
import { Metadata } from "next";
import { CATEGORIES } from "@/data/categories";
import { getCityFromSlug, getAllCitySlugs, generateCityMetadata } from "@/lib/seo-utils";
import { CategoryCityPage } from "@/components/psea/CategoryCityPage";

const CATEGORY = CATEGORIES["isolation-phonique"];

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) return {};
    return generateCityMetadata(city, CATEGORY.label, CATEGORY.slug);
}

export function generateStaticParams() {
    return getAllCitySlugs().slice(0, 500).map(slug => ({ slug }));
}

export default async function IsolationPhoniquePage({ params }: Props) {
    const { slug } = await params;
    const city = getCityFromSlug(slug);
    if (!city) notFound();
    return <CategoryCityPage city={city} category={CATEGORY} />;
}
