import fs from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const DOMAIN = 'https://onetechfuse.com';

async function generateSitemap() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  
  // Pages to exclude from the sitemap
  const excludedRoutes = ['/404', '/500', '/api'];

  // Get all .tsx pages
  const pages = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
    '!src/pages/500.tsx',
  ]);

  // Get all dynamic routes (if any)
  const services = [
    'web-development',
    'mobile-development',
    'cloud-computing',
    'salesforce-solutions',
    'database-solutions',
    'api-development'
  ];

  const industries = [
    'financial-services',
    'healthcare',
    'retail',
    'education',
    'manufacturing',
    'business-services'
  ];

  const dynamicRoutes = [
    ...services.map(service => `/services/${service}`),
    ...industries.map(industry => `/industries/${industry}`)
  ];

  const allRoutes = [
    ...pages.map(page => page
      .replace('src/pages', '')
      .replace('.tsx', '')
      .replace('/index', '')
    ),
    ...dynamicRoutes
  ];

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${allRoutes
        .filter(route => !excludedRoutes.includes(route))
        .map(route => {
          const path = route === '' ? '' : route;
          return `
            <url>
              <loc>${DOMAIN}${path}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>${
                path === '' || path === '/blog' ? 'daily' :
                path.startsWith('/services') || path.startsWith('/industries') ? 'weekly' :
                'monthly'
              }</changefreq>
              <priority>${
                path === '' ? '1.0' :
                path === '/services' || path === '/blog' ? '0.9' :
                path.startsWith('/services/') || path.startsWith('/industries/') ? '0.8' :
                '0.7'
              }</priority>
            </url>
          `;
        })
        .join('')}
    </urlset>
  `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  fs.writeFileSync('public/sitemap.xml', formatted);
}

export default generateSitemap; 