export async function get() {
  const robotsTxt = `User-agent: *
Allow: /

Sitemap: https://abdoutalby.github.io/thexbyte_landing_page/sitemap.xml

# SEO directives
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Crawl delay (optional)
Crawl-delay: 1`;

  return {
    body: robotsTxt,
    headers: {
      'Content-Type': 'text/plain'
    }
  };
}