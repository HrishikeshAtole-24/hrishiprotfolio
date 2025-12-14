export default function handler(req, res) {
  // Set the appropriate headers
  res.setHeader('Content-Type', 'application/xml');
  res.setHeader('Cache-Control', 'public, s-maxage=86400, stale-while-revalidate');

  const baseUrl = 'https://hrishikeshatole.com';
  const currentDate = new Date().toISOString();

  // Define your site URLs here
  const urls = [
    {
      loc: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.00'
    }
    // Add more URLs as your site grows
    // {
    //   loc: `${baseUrl}/about`,
    //   lastmod: currentDate,
    //   changefreq: 'monthly',
    //   priority: '0.8'
    // }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  res.status(200).end(sitemap);
}