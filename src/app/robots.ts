import { MetadataRoute } from 'next';
import { getAllDepartments } from '@/lib/cities';

export default function robots(): MetadataRoute.Robots {
    const BASE_URL = 'https://www.cout-isolation-maison.fr';
    const departments = getAllDepartments();

    // Generate sitemap list: /sitemap/0.xml for static, /sitemap/N.xml for each department
    const sitemaps = [
        `${BASE_URL}/sitemap/0.xml`,
        ...departments.map((_, i) => `${BASE_URL}/sitemap/${i + 1}.xml`),
    ];

    return {
        rules: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/private/', '/api/'],
            },
        ],
        sitemap: sitemaps,
    };
}
