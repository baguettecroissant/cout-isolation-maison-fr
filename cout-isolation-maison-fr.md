# cout-isolation-maison.fr — Project Spec

## Identité
- **Domaine** : `cout-isolation-maison.fr`
- **Type** : Cluster multi-niche (4 catégories ViteUnDevis)
- **Baseline** : Prix isolation thermique et phonique — Artisans RGE certifiés
- **Ton éditorial** : Écologique et économique. On parle d'économies d'énergie, confort thermique, impact carbone. Ton engagé mais factuel.
- **Persona** : Propriétaire maison ancienne, 35-55 ans, motivé par les économies et les aides d'État

## Catégories ViteUnDevis
| # | Catégorie | CPL moy | Rev/100 leads |
|---|-----------|---------|--------------|
| #153 | Isolation des combles | 21.6€ | 761€ |
| #103 | Isolation extérieure (ITE) | 16.6€ | 710€ |
| #157 | Isolation phonique | 8€ | 81€ |
| #12 | Isolation (général) | 12.7€ | 165€ |

---

## 🎨 Design System (UNIQUE)

### Typographie
- **Headings** : `Plus Jakarta Sans` (moderne, geo, friendly)
- **Body** : `Lora` (serif classique, éditorial confiance)
- **Data** : `Space Mono`

### Palette
```css
--primary: #0D9488;        /* Teal-600 — éco/isolation */
--primary-light: #CCFBF1;  /* Teal-100 */
--secondary: #065F46;      /* Emerald-800 — nature profond */
--accent: #EA580C;         /* Orange-600 — urgence, CTA chaud */
--text: #1E293B;           /* Slate-800 */
--bg: #F0FDFA;             /* Teal-50 — fond frais */
--card-bg: #FFFFFF;
```

### Layout Homepage
- **Hero** : Split 50/50. Gauche = titre + stats économies + CTA. Droite = illustration maison avec thermographie (zones chaudes/froides)
- **Style** : Cards avec gradient subtil (teal-50 → white), coins 12px, ombre diffuse
- **Icônes** : Phosphor Icons, style duotone
- **Section separators** : Feuille/leaf pattern léger en background

### Style des composants
- **Cards** : `border-radius: 12px`, gradient background, hover shadow-xl
- **Boutons CTA** : Rounded-lg, fond orange-600, icône flèche animée
- **Badges** : Pastilles "Éligible MaPrimeRénov'" en vert sur les pages
- **Footer** : Fond emerald-900, texte emerald-100, 4 colonnes irrégulières

---

## 📄 Template Page Ville (UNIQUE wording)

### Pattern titre H1
```
Isolation {TYPE} à {VILLE} — Prix au m² et artisans RGE {CODE_POSTAL}
```

### Pattern intro (spintax)
```
Isoler votre maison à {VILLE} permet de réduire jusqu'à {POURCENTAGE}% de vos factures de chauffage. 
{VARIANTE_INTRO}. Pour une isolation {TYPE} en {DEPT_NOM}, comptez entre {PRIX_MIN}€ 
et {PRIX_MAX}€ le m², matériaux et main-d'œuvre compris.
```

Variantes intro :
1. "Les artisans RGE du {CODE_POSTAL} maîtrisent les techniques adaptées au bâti local"
2. "En zone climatique {ZONE}, l'isolation {TYPE} offre le meilleur retour sur investissement"
3. "Les aides de l'État prennent en charge jusqu'à 75% du chantier pour les foyers modestes"
4. "Ne laissez plus la chaleur s'échapper : votre maison à {VILLE} mérite une isolation performante"

### Pattern CTA
```
Estimer mon isolation à {VILLE}
```

### Modules uniques
- **Bilan énergétique simplifié** : DPE moyen du parc bâti local
- **Gains estimés** : "Passer de DPE F à DPE C = ~{MONTANT}€/an d'économies"
- **Résistance thermique cible** par zone (R=6 combles, R=3.7 murs...)

---

## Structure
```
/                                  → Homepage
/devis                             → Widget ViteUnDevis #12
/isolation-combles/[slug]          → Pages villes combles (#153)
/isolation-exterieure/[slug]       → Pages villes ITE (#103)
/isolation-phonique/[slug]         → Pages villes phonique (#157)
/guides + /guides/[slug]
/marques + /marques/[slug]
/annuaire + /annuaire/[slug]
/faq · /mentions-legales
/sitemap.xml + /sitemap/[id]
```

## Guides (8)
1. Prix isolation combles 2026 : soufflée, rampants, sarking
2. Isolation extérieure (ITE) : prix au m², enduit vs bardage
3. MaPrimeRénov' isolation : barème complet et simulation
4. Isolation intérieure vs extérieure : avantages et limites
5. Quelle épaisseur d'isolant ? (R, lambda, guide par poste)
6. Isolation phonique : solutions par pièce et prix
7. Meilleurs isolants 2026 : laine de verre, roche, ouate, biosourcés
8. RE2025 et isolation : nouvelles exigences résidentielles

## Marques : Isover, Rockwool, Knauf, Ursa, Isonat, Steico

## Maillage externe
- `cout-chauffage-energie.fr` → "isoler avant de chauffer"
- `prix-fenetre-menuiserie.fr` → "fenêtres isolantes"
- `ta-pompe-a-chaleur.fr` → "isolation + PAC = combo gagnant"
