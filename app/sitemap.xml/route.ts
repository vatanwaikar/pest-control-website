import { NextResponse } from 'next/server'

export async function GET() {
  const baseUrl = 'https://globalvisionpestcontrol.in'
  const currentDate = new Date().toISOString()

  const staticPages = [
    {
      url: `${baseUrl}/`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '1.0'
    },
    {
      url: `${baseUrl}/about`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/contact`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: '0.8'
    },
    {
      url: `${baseUrl}/blog`,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: '0.9'
    }
  ]

  const areaPages = [
    'wakad',
    'baner', 
    'hinjewadi',
    'kothrud',
    'hadapsar',
    'viman-nagar',
    'pimpri',
    'chinchwad',
    'aundh',
    'pimple-saudagar',
    'kharadi',
    'wagholi'
  ].map(area => ({
    url: `${baseUrl}/pest-control-in-${area}-pune`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  }))

  const servicePages = [
    'termite-control',
    'bed-bug-control',
    'cockroach-control',
    'rodent-control',
    'mosquito-control',
    'general-pest-control'
  ].map(service => ({
    url: `${baseUrl}/services/${service}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.8'
  }))

  const blogPages = [
    'pest-control-cost-in-pune',
    'termite-treatment-cost-in-pune',
    'bed-bug-treatment-price-pune',
    'how-to-remove-cockroaches-in-pune',
    'monsoon-pest-control-tips-pune'
  ].map(post => ({
    url: `${baseUrl}/blog/${post}`,
    lastmod: currentDate,
    changefreq: 'monthly',
    priority: '0.7'
  }))

  const allPages = [...staticPages, ...areaPages, ...servicePages, ...blogPages]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages.map(page => `  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600'
    }
  })
}
