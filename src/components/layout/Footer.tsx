import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gradient-to-b from-emerald-900 to-emerald-950 text-emerald-50">
            {/* Main footer content */}
            <div className="container mx-auto px-4 py-14">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <h3 className="text-xl font-bold text-white mb-4">
                            Cout-Isolation-Maison<span className="text-teal-400">.fr</span>
                        </h3>
                        <p className="text-emerald-300 text-sm leading-relaxed mb-4">
                            Le guide indépendant pour comparer les prix d&apos;isolation thermique et phonique en France. Artisans RGE certifiés.
                        </p>
                        <Link
                            href="/devis"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-bold py-2.5 px-5 rounded-lg text-sm transition-colors"
                        >
                            Devis gratuit →
                        </Link>
                    </div>

                    {/* Guides populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Guides</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/guides/prix-isolation-combles-2026" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Prix isolation combles</Link></li>
                            <li><Link href="/guides/isolation-exterieure-ite-prix" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">ITE : prix au m²</Link></li>
                            <li><Link href="/guides/maprimenov-isolation-bareme" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">MaPrimeRénov&apos; isolation</Link></li>
                            <li><Link href="/guides/meilleurs-isolants-2026" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Meilleurs isolants 2026</Link></li>
                            <li><Link href="/guides" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">Tous les guides →</Link></li>
                        </ul>
                    </div>

                    {/* Villes populaires */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Villes</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/isolation-combles/paris-75000" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Isolation Paris</Link></li>
                            <li><Link href="/isolation-exterieure/lyon-69000" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">ITE Lyon</Link></li>
                            <li><Link href="/isolation-combles/marseille-13000" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Combles Marseille</Link></li>
                            <li><Link href="/isolation-exterieure/toulouse-31000" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">ITE Toulouse</Link></li>
                            <li><Link href="/annuaire" className="text-teal-400 hover:text-teal-300 text-sm font-semibold transition-colors">Tout l&apos;annuaire →</Link></li>
                        </ul>
                    </div>

                    {/* Infos */}
                    <div>
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Informations</h4>
                        <ul className="space-y-2.5">
                            <li><Link href="/" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Accueil</Link></li>
                            <li><Link href="/marques" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Marques</Link></li>
                            <li><Link href="/marques/isover" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Isover</Link></li>
                            <li><Link href="/marques/rockwool" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Rockwool</Link></li>
                            <li><Link href="/faq" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">FAQ</Link></li>
                            <li><Link href="/mentions-legales" className="text-emerald-300 hover:text-teal-300 text-sm transition-colors">Mentions légales</Link></li>
                        </ul>
                    </div>
                </div>

            </div>

            {/* Bottom bar */}
            <div className="border-t border-emerald-800/50">
                <div className="container mx-auto px-4 py-5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-emerald-500">
                    <p>© 2026 Cout-Isolation-Maison.fr — Tous droits réservés.</p>
                    <p>Guide indépendant · Devis gratuits d&apos;artisans certifiés RGE · France métropolitaine</p>
                </div>
            </div>
        </footer>
    );
}
