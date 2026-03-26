<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" version="1.0" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <html lang="pl">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex, nofollow"/>
        <title>Sitemap — Pillo</title>
        <style>
          * { box-sizing: border-box; margin: 0; padding: 0; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #f8f9f7; color: #2B2B2B; padding: 40px 20px; }
          .container { max-width: 860px; margin: 0 auto; }
          header { display: flex; align-items: center; gap: 16px; margin-bottom: 32px; }
          header h1 { font-size: 1.5rem; font-weight: 700; }
          header p { color: #5F5F5F; font-size: 0.9rem; margin-top: 4px; }
          table { width: 100%; border-collapse: collapse; background: #fff; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
          thead tr { background: #2F4A3F; color: #fff; }
          th { padding: 14px 20px; text-align: left; font-size: 0.8rem; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; }
          td { padding: 13px 20px; font-size: 0.9rem; border-bottom: 1px solid #eef0ed; }
          tr:last-child td { border-bottom: none; }
          tr:hover td { background: #f4f7f5; }
          a { color: #2F4A3F; text-decoration: none; }
          a:hover { text-decoration: underline; }
          .badge { display: inline-block; padding: 2px 8px; border-radius: 99px; font-size: 0.75rem; font-weight: 600; }
          .p-high { background: #d4edda; color: #1a5c2a; }
          .p-mid  { background: #fff3cd; color: #7a5200; }
          .p-low  { background: #f0f0f0; color: #555; }
          footer { margin-top: 24px; color: #5F5F5F; font-size: 0.8rem; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <header>
            <div>
              <h1>Sitemap — Pillo</h1>
              <p><xsl:value-of select="count(sitemap:urlset/sitemap:url)"/> URLs</p>
            </div>
          </header>
          <table>
            <thead>
              <tr>
                <th>URL</th>
                <th>Last modified</th>
                <th>Change freq</th>
                <th>Priority</th>
              </tr>
            </thead>
            <tbody>
              <xsl:for-each select="sitemap:urlset/sitemap:url">
                <tr>
                  <td><a href="{sitemap:loc}"><xsl:value-of select="sitemap:loc"/></a></td>
                  <td><xsl:value-of select="sitemap:lastmod"/></td>
                  <td><xsl:value-of select="sitemap:changefreq"/></td>
                  <td>
                    <xsl:variable name="p" select="sitemap:priority"/>
                    <xsl:choose>
                      <xsl:when test="$p >= 0.8"><span class="badge p-high"><xsl:value-of select="$p"/></span></xsl:when>
                      <xsl:when test="$p >= 0.5"><span class="badge p-mid"><xsl:value-of select="$p"/></span></xsl:when>
                      <xsl:otherwise><span class="badge p-low"><xsl:value-of select="$p"/></span></xsl:otherwise>
                    </xsl:choose>
                  </td>
                </tr>
              </xsl:for-each>
            </tbody>
          </table>
          <footer>Pillo · trypillo.pl</footer>
        </div>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
