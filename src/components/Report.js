const {
  Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell,
  AlignmentType, LevelFormat, HeadingLevel, BorderStyle, WidthType,
  ShadingType, VerticalAlign, PageNumber, PageBreak, Header, Footer,
  TabStopType, TabStopPosition
} = require('docx');
const fs = require('fs');

// ── Color palette ──────────────────────────────────────────────
const C = {
  navy:     "0D1B2A",
  blue:     "1A56DB",
  lightBlue:"EBF3FF",
  red:      "C81E1E",
  orange:   "D97706",
  green:    "065F46",
  greenBg:  "ECFDF5",
  redBg:    "FEF2F2",
  orangeBg: "FFFBEB",
  gray:     "374151",
  lightGray:"F9FAFB",
  midGray:  "E5E7EB",
  white:    "FFFFFF",
  darkText: "111827",
};

// ── Helpers ────────────────────────────────────────────────────
const border = (color = C.midGray) => ({ style: BorderStyle.SINGLE, size: 1, color });
const borders = (color) => ({ top: border(color), bottom: border(color), left: border(color), right: border(color) });
const noBorder = () => ({ style: BorderStyle.NONE, size: 0, color: "FFFFFF" });
const noBorders = () => ({ top: noBorder(), bottom: noBorder(), left: noBorder(), right: noBorder() });

function h1(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 360, after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.blue, space: 6 } },
    children: [new TextRun({ text, font: "Arial", size: 36, bold: true, color: C.navy })]
  });
}
function h2(text, color = C.navy) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 280, after: 120 },
    children: [new TextRun({ text, font: "Arial", size: 28, bold: true, color })]
  });
}
function h3(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_3,
    spacing: { before: 200, after: 80 },
    children: [new TextRun({ text, font: "Arial", size: 24, bold: true, color: C.gray })]
  });
}
function p(text, opts = {}) {
  return new Paragraph({
    spacing: { before: 60, after: 100 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: C.darkText, ...opts })]
  });
}
function pb() {
  return new Paragraph({ children: [new PageBreak()] });
}
function spacer(lines = 1) {
  return new Paragraph({ spacing: { before: 0, after: lines * 120 }, children: [new TextRun("")] });
}
function bullet(text, ref = "bullets", opts = {}) {
  return new Paragraph({
    numbering: { reference: ref, level: 0 },
    spacing: { before: 40, after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: C.darkText, ...opts })]
  });
}
function boldBullet(label, detail) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 60 },
    children: [
      new TextRun({ text: label + ": ", font: "Arial", size: 22, bold: true, color: C.darkText }),
      new TextRun({ text: detail, font: "Arial", size: 22, color: C.darkText })
    ]
  });
}

// ── Cover page ─────────────────────────────────────────────────
function coverPage() {
  return [
    spacer(4),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 120 },
      children: [new TextRun({ text: "PROFESSIONAL SEO AUDIT REPORT", font: "Arial", size: 52, bold: true, color: C.blue })]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 80, after: 80 },
      children: [new TextRun({ text: "terrafineco.com", font: "Arial", size: 36, color: C.navy })]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 0, after: 400 },
      children: [new TextRun({ text: "Buildico Terrafine LLP — Gypsum Plastering & Construction Chemicals, Kerala", font: "Arial", size: 24, color: C.gray })]
    }),
    spacer(2),
    new Table({
      width: { size: 7000, type: WidthType.DXA },
      columnWidths: [3500, 3500],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Report Date", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "June 26, 2026", font: "Arial", size: 20, color: C.darkText })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Website", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "https://terrafineco.com/", font: "Arial", size: 20, color: C.darkText })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Industry", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Construction Materials / Gypsum Plastering", font: "Arial", size: 20, color: C.darkText })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Location", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Kerala, India (Kochi + Kozhikode)", font: "Arial", size: 20, color: C.darkText })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "Overall SEO Score", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.redBg, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 200, right: 200 }, children: [new Paragraph({ children: [new TextRun({ text: "28 / 100  ⚠ CRITICAL", font: "Arial", size: 20, bold: true, color: C.red })] })] }),
        ]}),
      ]
    }),
    pb()
  ];
}

// ── Section 1: Website Overview ────────────────────────────────
function section1() {
  return [
    h1("1. Website Overview"),
    h2("Business Niche"),
    p("Buildico Terrafine LLP operates in the construction materials and specialty chemicals sector in Kerala, India. Their primary offering is gypsum wall plastering products and services, with an extended range covering waterproofing compounds, floor coatings, industrial chemicals, special paints, and spray products. The company positions itself as both a manufacturer/supplier of branded Terrafine products and a plastering contractor."),
    h2("Target Audience"),
    bullet("Residential homeowners planning new builds or renovation in Kerala"),
    bullet("Construction companies and general contractors requiring plastering materials at scale"),
    bullet("Architects, interior designers, and project managers"),
    bullet("Dealers and distributors across India (100+ claimed)"),
    bullet("Commercial and industrial builders (hospitals, hotels, educational institutions)"),
    h2("Main Services / Products"),
    bullet("Wall Plastering — Terrafine Gypsum Plaster, ReadyMix Plaster, Bondit"),
    bullet("Waterproofing — MS Polymer, MS Polia, Gypsum Sealer Primer"),
    bullet("Floor Coatings"),
    bullet("Special Paints — Thermal Paint, Anti-Moisture Paint, Elastic Waterproof Exterior Paint"),
    bullet("Industrial Chemicals"),
    bullet("Spray Products"),
    h2("Website Architecture"),
    p("The website uses a custom PHP/CodeIgniter CMS. The structure is:"),
    bullet("Homepage → 6 product category pages → individual product detail pages"),
    bullet("Static pages: About, Gallery, Contact, Blogs (index) → blog detail pages"),
    bullet("UAE subdomain: uae.terrafineco.com (separate site)"),
    p("Architecture is flat with only 2-3 levels of depth, which is acceptable. However, product pages lack SEO-structured category landing pages with sufficient content — they function purely as listings."),
    h2("Navigation Quality ★★☆☆☆"),
    p("Navigation is duplicated across the page (desktop nav appears 4 times in the HTML — once in top bar, once in mobile nav, once in an off-canvas menu, once in footer nav sidebar). This is a significant HTML bloat issue. 'Products' dropdown uses javascript:void(0) as the href, which is inaccessible and non-crawlable."),
    h2("Internal Linking Structure ★★☆☆☆"),
    p("Internal links are minimal. Product category pages do not link to each other or to related blog posts. Blog posts do not contextually link to product pages. The footer contains only 5 links (Home, About, Gallery, Blogs, Contact) — missing all 6 product category pages. There is virtually no cross-linking between the blog and product sections, which severely limits PageRank flow and crawl depth."),
    spacer()
  ];
}

// ── Section 2: Technical SEO Audit ────────────────────────────
function issueRow(issue, what, why, sev, rec) {
  const sevColor = sev === "HIGH" ? C.red : sev === "MEDIUM" ? C.orange : C.green;
  return new Table({
    width: { size: 9360, type: WidthType.DXA },
    columnWidths: [9360],
    rows: [
      new TableRow({ children: [new TableCell({
        borders: borders(C.midGray),
        shading: { fill: C.lightGray, type: ShadingType.CLEAR },
        margins: { top: 80, bottom: 80, left: 160, right: 160 },
        children: [new Paragraph({ children: [
          new TextRun({ text: `⚠ ${issue}  `, font: "Arial", size: 22, bold: true, color: C.navy }),
          new TextRun({ text: `[${sev}]`, font: "Arial", size: 20, bold: true, color: sevColor }),
        ]})]
      })] }),
      new TableRow({ children: [new TableCell({
        borders: borders(C.midGray),
        margins: { top: 80, bottom: 80, left: 160, right: 160 },
        children: [
          new Paragraph({ children: [new TextRun({ text: "What is wrong: ", font: "Arial", size: 20, bold: true }), new TextRun({ text: what, font: "Arial", size: 20 })] }),
          new Paragraph({ spacing: { before: 60 }, children: [new TextRun({ text: "Why it matters: ", font: "Arial", size: 20, bold: true }), new TextRun({ text: why, font: "Arial", size: 20 })] }),
          new Paragraph({ spacing: { before: 60 }, children: [new TextRun({ text: "Recommendation: ", font: "Arial", size: 20, bold: true, color: C.blue }), new TextRun({ text: rec, font: "Arial", size: 20, color: C.blue })] }),
        ]
      })] }),
    ]
  });
}

function section2() {
  return [
    h1("2. Technical SEO Audit"),
    h2("2.1 Critical Issues Found"),
    spacer(0.5),

    issueRow(
      "Wrong Meta Title & Description on Multiple Pages",
      "The /blogs page, /contact page, and all individual blog post pages return the title 'Best Immigration Agency in Kerala | Immigration Consultants' and a meta description referencing 'Amster' — an entirely different business (an immigration firm). These are clearly copied from a template without being changed.",
      "Google indexes the wrong title and description, destroying click-through rate and sending completely irrelevant signals. Users searching for gypsum plastering see 'immigration consultants' in search results. This is a catastrophic on-page SEO failure that likely causes active ranking suppression.",
      "HIGH",
      "Immediately write unique, keyword-rich title tags and meta descriptions for EVERY page. Blogs page: 'Gypsum Plastering Blog | Tips, Guides & News – Terrafine Kerala'. Contact: 'Contact Buildico Terrafine LLP | Gypsum Plaster Kochi & Kozhikode'."
    ),
    spacer(0.5),

    issueRow(
      "PHP Error Exposed Publicly on Product Pages",
      "The /water-proofing and /wall-plastering pages display a live PHP Notice error: 'A PHP Error was encountered — Undefined index: sort — Filename: main/products.php — Line Number: 425' along with the full server file path (/home/admterrafineco/public_html/...).",
      "Exposing server-side errors and full directory paths is a security vulnerability. Google sees error messages in the page content, which harms content quality signals. Competitors or hackers can exploit directory paths for server attacks.",
      "HIGH",
      "Set error_reporting(0) and display_errors = Off in PHP production environment. Handle the missing 'sort' index with isset() checks. Add proper error logging to server-side logs instead of the browser."
    ),
    spacer(0.5),

    issueRow(
      "No XML Sitemap Detected",
      "There is no sitemap.xml at terrafineco.com/sitemap.xml. The website has no declared sitemap submitted to Google Search Console.",
      "Without a sitemap, Google must rely entirely on crawl discovery. Product pages and deep content may never be crawled or indexed, especially new blog posts. This is a foundational technical SEO requirement.",
      "HIGH",
      "Generate a dynamic XML sitemap including all product pages, category pages, blog posts, and static pages. Submit to Google Search Console and Bing Webmaster Tools. Include lastmod dates."
    ),
    spacer(0.5),

    issueRow(
      "No Robots.txt File Detected",
      "Accessing terrafineco.com/robots.txt returns no valid robots.txt file.",
      "Without robots.txt, search engines have no guidance on which pages to crawl or avoid. Admin/backend paths may get crawled and indexed.",
      "HIGH",
      "Create a robots.txt at the server root. Disallow /admin, /application, /system, and other non-public paths. Include the Sitemap URL: Sitemap: https://terrafineco.com/sitemap.xml"
    ),
    spacer(0.5),

    issueRow(
      "No Structured Data / Schema Markup",
      "Zero schema markup exists on any page. No Organization, LocalBusiness, Product, BreadcrumbList, FAQPage, or Article schema is implemented.",
      "Schema markup enables rich results in Google SERPs: star ratings, FAQ dropdowns, breadcrumbs, product prices. Without it, Terrafine appears as a plain blue link while competitors with schema get enhanced visual results that dominate clicks.",
      "HIGH",
      "Implement LocalBusiness schema on homepage with @type: Organization + LocalBusiness. Add Product schema on each product page (price, availability). Add FAQPage schema on pages with Q&A sections. Add BreadcrumbList on all inner pages. Add Article schema on blog posts."
    ),
    spacer(0.5),

    issueRow(
      "No Canonical Tags on Any Page",
      "No rel='canonical' tags are present on any inspected page.",
      "Without canonical tags, duplicate content issues (www vs non-www, HTTP vs HTTPS, URL parameters like ?sort=) dilute PageRank across multiple URL variants and confuse Google about the authoritative version.",
      "HIGH",
      "Add self-referencing canonical tags to every page. Handle www/non-www redirect at server level (301 redirect www to non-www or vice versa, consistently)."
    ),
    spacer(0.5),

    issueRow(
      "Navigation Uses javascript:void(0) for Products Dropdown",
      "The 'Products' menu item uses href='javascript:void(0)' — a non-navigable link. Googlebot cannot follow JavaScript-void hrefs.",
      "The entire Products section of the navigation is invisible to Googlebot. This breaks crawl paths to all 6 product category pages via the primary navigation element.",
      "HIGH",
      "Replace javascript:void(0) with a real URL (e.g., href='/products' pointing to a products landing page, or use the first dropdown item's URL). Use CSS/JS for dropdown toggle independently of the href."
    ),
    spacer(0.5),

    issueRow(
      "Duplicate Navigation HTML (4x in DOM)",
      "The header navigation HTML appears 4 times in the page source: top bar nav, mobile nav, off-canvas nav, and a visible desktop nav.",
      "This creates massive HTML bloat, confuses Google's understanding of site structure, dilutes anchor text signal, and slows page load due to unnecessary DOM size.",
      "MEDIUM",
      "Consolidate to 1 desktop nav + 1 mobile nav. Use CSS/JS to show/hide based on screen size. Remove redundant nav instances from the HTML output."
    ),
    spacer(0.5),

    issueRow(
      "Blog Post Content References Competitor Brand 'Kanish Plasters'",
      "The blog post 'How To Choose The Right Gypsum Plastering Company' explicitly names 'Kanish Plasters' multiple times, including mentioning their prices and ratings. This appears to be copy-pasted from a competitor's content.",
      "This is both an E-E-A-T failure (it signals the content was not written by Terrafine) and a duplication issue (Google may treat it as scraped content). It actively promotes a competitor within Terrafine's own website.",
      "HIGH",
      "Rewrite this blog post from scratch using Terrafine's own brand, data, and case studies. Remove all references to Kanish Plasters immediately."
    ),
    spacer(0.5),

    issueRow(
      "Broken/Empty Social Media Links in Footer",
      "Multiple social media links in the footer (Facebook, Instagram, Twitter, YouTube) use href='<>' — literally an empty angle bracket href, rendering them non-functional. The Twitter link points to https://twitter.com/ (homepage, not a Terrafine profile).",
      "Broken links send negative crawl signals. Social proof links that don't work harm trust and UX.",
      "MEDIUM",
      "Replace all social links with correct, live profile URLs. Facebook: https://www.facebook.com/terrafinegypsumplaster — verify others are live and correct."
    ),
    spacer(0.5),

    issueRow(
      "Partner Logos Link to Empty Href",
      "All partner/client logo links on the About page use href='<>' — not linked to actual partner websites.",
      "Dead links waste crawl budget and hurt UX. Partner links, if linked to real partner sites, can also build trust signals.",
      "LOW",
      "Either link partner logos to their actual websites (opens in new tab with rel='noopener') or remove the anchor tags entirely."
    ),
    spacer(0.5),

    issueRow(
      "Team Section Uses Placeholder/Fake Data",
      "The About page 'Our Team' section shows generic stock-photo names: 'Kari Bates (CEO)', 'Bertha Day (Art Director)', 'Kirk Dixon (Architecter)' — none of whom are actual Terrafine employees. These appear to be demo/template placeholder data.",
      "Using fake team information is an E-E-A-T catastrophe. Google's Helpful Content System evaluates who is behind a website. Fake teams signal low trustworthiness and hurt rankings especially for YMYL-adjacent content.",
      "HIGH",
      "Replace all team members with real Buildico Terrafine LLP staff, actual photos, names, roles, and optionally LinkedIn links. If team photos aren't available, remove the section entirely rather than keep fake data."
    ),
    spacer(0.5),

    issueRow(
      "Testimonials Are Lorem Ipsum Placeholder Text",
      "All three testimonials on the About page use 'Lorem ipsum dolor sit amet...' — they are unfilled template placeholders. Reviewer names are 'Tim Holand (Developer)' and 'Katy Gomez (Designer)' — irrelevant roles for a construction materials company.",
      "Lorem ipsum testimonials destroy all trust and social proof. They are embarrassing and anti-conversion. They signal a low-effort, template-cloned website.",
      "HIGH",
      "Replace immediately with real customer testimonials from actual Kerala construction projects. Include customer name, company, project type, and location. Video testimonials are ideal."
    ),
    spacer(0.5),

    issueRow(
      "Page Speed — Large Unoptimized Images Detected",
      "Multiple JPEG/WebP banner images are loaded at full resolution (168317348627.jpg, 168492838735.webp) without explicit width/height attributes or responsive srcset. Product thumbnails use a server-side resize script (250x250) but source images may be much larger.",
      "Large images are the #1 cause of poor LCP (Largest Contentful Paint). A slow LCP directly harms Core Web Vitals scores, which are a confirmed Google ranking factor.",
      "HIGH",
      "Compress all banner images to < 200KB at 1440px width. Add explicit width/height attributes to all img tags to prevent CLS. Implement responsive srcset with multiple sizes. Convert all images to WebP format."
    ),
    spacer(0.5),

    issueRow(
      "No Breadcrumb Navigation",
      "No breadcrumb navigation exists on product pages, blog posts, or any inner pages. Only text breadcrumbs like 'Home / Water Proofing' appear without proper markup.",
      "Breadcrumbs help Google understand site hierarchy and display richer search results. Without BreadcrumbList schema, Google cannot show breadcrumbs in SERPs.",
      "MEDIUM",
      "Add visible breadcrumb navigation to all inner pages with BreadcrumbList schema markup. Follow the pattern: Home > Products > Water Proofing > Product Name."
    ),
    spacer(0.5),

    issueRow(
      "No Hreflang Tags",
      "The site serves both Indian and UAE markets (uae.terrafineco.com subdomain) without any hreflang tags defining language/region targeting.",
      "Without hreflang, Google cannot properly segment traffic between the Kerala India site and the UAE site, causing cannibalization in SERPs.",
      "MEDIUM",
      "Implement hreflang tags: x-default and en-in for the main domain; en-ae for the UAE subdomain. Add hreflang in both <head> and the sitemap."
    ),
    spacer()
  ];
}

// ── Section 3: On-Page SEO ─────────────────────────────────────
function pageRow(page, title, titleScore, meta, h1, content, overall) {
  return [
    h3(page),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2000, 7360],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Title Tag", font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: title, font: "Arial", size: 20 })] }), new Paragraph({ children: [new TextRun({ text: `Score: ${titleScore}`, font: "Arial", size: 20, bold: true, color: C.blue })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Meta Desc", font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: meta, font: "Arial", size: 20 })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "H1", font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: h1, font: "Arial", size: 20 })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightGray, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Content", font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: content, font: "Arial", size: 20 })] })] }),
        ]}),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightBlue, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "OVERALL", font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.lightBlue, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: overall, font: "Arial", size: 20, bold: true, color: C.navy })] })] }),
        ]}),
      ]
    }),
    spacer()
  ];
}

function section3() {
  return [
    h1("3. On-Page SEO Analysis"),
    ...pageRow(
      "Homepage (terrafineco.com/)",
      "\"Gypsum plastering in kerala | Gypsum wall plastering kerala\" — Good: contains primary keyword with location. Bad: 64 characters, slightly long; brand name missing; no CTA-oriented hook.",
      "★★★☆☆",
      "\"Wall gypsum plastering contractors is here to provide you with high-quality solutions. As leading gypsum plaster suppliers, manufacturers & Dealers in Kerala\" — 161 characters, far too long. No call to action. Truncated in SERPs at ~160 chars.",
      "H1: 'Gypsum plastering in kerala' — Acceptable but repeated verbatim from title tag. H2s used for 'Products' and 'Blogs' sections only. FAQ section uses H1 tag ('Gypsum plastering in kerala') which creates a SECOND H1 on the page — a significant structural error.",
      "Multiple H1 tags. FAQ section well-written and keyword-rich. Products shown with prices (good for E-commerce signals). Stats (6000+ projects, 800+ commercial) present but no verification. No brand story in homepage body copy. Hero banners have generic CTA 'Contact now' with zero benefit language. Blog section shows 3 articles, all from Nov 2022 — no freshness signal on homepage.",
      "Rating: ★★☆☆☆ — Multiple H1 tags, truncated meta, no brand differentiation copy, stale blog previews."
    ),
    ...pageRow(
      "About Page (terrafineco.com/about)",
      "\"Premium Gypsum Plastering in Kerala | wall plastering\" — Decent keyword inclusion but reads like a service page title, not an About page. Should include brand name.",
      "★★★☆☆",
      "\"Best gypsum plastering company in Kerala. Our premium gypsum plastering services deliver smooth, durable, and aesthetically pleasing finishes for your walls\" — 158 chars, acceptable length. Generic, no unique value proposition.",
      "H1 used for the Logo link text — critically wrong. The logo anchor gets the H1 tag rather than the page heading. The actual 'About Us' heading is H2.",
      "Fake team members (Kari Bates, Bertha Day, Kirk Dixon). Lorem ipsum testimonials. Partner logos linked to empty hrefs. Company description is copy-pasted, contains typos ('iS', 'preven-tive', 'retall'). Mission statement is vague. No founding year, no certifications, no real team bios, no registration details as LLP.",
      "Rating: ★☆☆☆☆ — Fake data throughout. H1 misused. Spelling errors. Zero E-E-A-T value. Most damaging page on site."
    ),
    ...pageRow(
      "Blogs Page (terrafineco.com/blogs)",
      "\"Best Immigration Agency in Kerala | Immigration Consultants\" — COMPLETELY WRONG. This is the title of an entirely different business (immigration consultancy).",
      "★☆☆☆☆",
      "\"Choose Amster, the best immigration agency in Kerala, with skilled immigration consultants serving Kochi, Calicut...\" — COMPLETELY WRONG. References a competitor in a different industry.",
      "H1 tag set to Logo link, not a page heading. No semantic structure for blog listing page.",
      "Blog listing itself is functional — 10 posts visible. Dates span 2022-2025, showing some freshness. Author attribution exists. Post titles are keyword-relevant. However, the catastrophic meta data overrides any content benefit.",
      "Rating: ★☆☆☆☆ — Wrong meta completely. Active harm from immigration content signals. Fix immediately."
    ),
    ...pageRow(
      "Contact Page (terrafineco.com/contact)",
      "\"Best Immigration Agency in Kerala | Immigration Consultants\" — COMPLETELY WRONG. Same immigration agency title carried over.",
      "★☆☆☆☆",
      "\"Choose Amster, the best immigration agency in Kerala...\" — Same immigration meta carried over from template.",
      "H1 again used for Logo. Page heading 'Contact' is H2. Acceptable structure if meta was fixed.",
      "Google Maps embed present — good for local SEO. Two office addresses shown: Palarivattom Kochi and Kozhikode. Phone number and email visible. However: no contact form present in the crawled content. WhatsApp link in top bar. Maps embed uses iframe which may not render well on slow connections.",
      "Rating: ★☆☆☆☆ — Wrong meta catastrophically harms any local SEO value. The Google Maps embed is a positive lone feature."
    ),
    ...pageRow(
      "Wall Plastering Product Page (terrafineco.com/wall-plastering)",
      "\"Terrafine\" — Only the brand name. Zero keyword information. Wasted title opportunity.",
      "★☆☆☆☆",
      "Empty — no meta description set at all for product category pages.",
      "H1: 'Gypsum wall plastering' — H2: 'Wall gypsum plaster'. Reasonable keyword usage in headings but H1/H2 are separated and appear above the fold before the navigation loads visually.",
      "Only 3 products listed. PHP error message visible on page. FAQ section has 6 relevant questions with decent answers. No product specifications, no thickness/coverage data, no application guides. No comparison tables.",
      "Rating: ★★☆☆☆ — Correct primary H1 keyword and FAQ content are positives. PHP error, empty meta, and thin product pages are critical negatives."
    ),
    spacer()
  ];
}

// ── Section 4: Keyword Analysis ────────────────────────────────
function kw(text) {
  return new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { before: 40, after: 60 },
    children: [new TextRun({ text, font: "Arial", size: 22, color: C.darkText })]
  });
}

function section4() {
  return [
    h1("4. Keyword Analysis"),
    h2("Primary Keywords (Currently Targeted)"),
    kw("gypsum plastering in kerala"),
    kw("gypsum wall plastering kerala"),
    kw("gypsum plaster suppliers kerala"),
    kw("gypsum plaster manufacturers kerala"),
    kw("gypsum plaster dealers kerala"),
    kw("best gypsum plastering company kerala"),
    h2("Secondary Keywords (Identified from Site Content)"),
    kw("waterproofing contractors kerala"),
    kw("floor coatings kerala"),
    kw("special paints kerala"),
    kw("industrial chemicals kerala"),
    kw("readymix plaster kerala"),
    kw("gypsum bondit"),
    kw("terrafine gypsum plaster"),
    kw("buildico terrafine llp"),
    h2("Long-Tail Keyword Opportunities (MISSING — Not Currently Targeted)"),
    kw("gypsum plastering cost per sq ft kerala 2025"),
    kw("gypsum plaster vs cement plaster which is better"),
    kw("how to apply gypsum plaster on brick wall"),
    kw("waterproofing solutions for terrace in kerala"),
    kw("best waterproofing paint for walls in kerala"),
    kw("gypsum plastering contractors in kochi"),
    kw("gypsum plastering contractors in kozhikode"),
    kw("gypsum plastering contractors in thrissur"),
    kw("readymix plaster price in kerala"),
    kw("anti moisture paint for bathroom walls kerala"),
    kw("thermal paint for roof kerala"),
    kw("floor epoxy coating contractors kochi"),
    h2("Commercial / High-Intent Keywords (MISSING)"),
    kw("buy gypsum plaster online kerala"),
    kw("gypsum plaster price list kerala"),
    kw("gypsum plastering service quote"),
    kw("construction chemical suppliers kochi"),
    kw("best waterproofing company kochi"),
    h2("Local Keywords (MISSING — Critical Gap)"),
    kw("gypsum plastering ernakulam"),
    kw("gypsum plastering thrissur"),
    kw("gypsum plastering kozhikode"),
    kw("gypsum plastering trivandrum"),
    kw("wall plastering company near me kerala"),
    kw("waterproofing company palarivattom kochi"),
    h2("Keyword Cannibalization Issues"),
    p("The homepage, About page, and Wall Plastering product page all target near-identical keywords around 'gypsum plastering kerala'. None are sufficiently differentiated. Google cannot determine which page is authoritative for the primary keyword and will likely rank none well. Recommended fix: Homepage → Brand + broad gypsum plastering; Wall Plastering page → Products/pricing-focused; About page → Company credibility and E-E-A-T."),
    h2("Keyword Gaps vs Competitors"),
    p("Competitors in the Kerala construction chemicals space rank for: waterproofing solutions, floor epoxy coating, construction chemicals distributor, paint contractors kerala. Terrafine's secondary product lines (waterproofing, floor coatings, special paints) have zero dedicated SEO content, FAQ schema, or long-tail targeting despite being core offerings."),
    spacer()
  ];
}

// ── Section 5: Content Audit ───────────────────────────────────
function section5() {
  return [
    h1("5. Content Audit"),
    h2("Overall Content Quality Assessment"),
    p("The content quality is POOR overall. Three distinct categories of content exist on this website:"),
    h3("Category A — Copy-Pasted / Third-Party Content (Critical)"),
    p("Blog post 'How To Choose The Right Gypsum Plastering Company' contains entire sections written from the perspective of 'Kanish Plasters' — a different company. This is almost certainly scraped or purchased content. This directly violates Google's Helpful Content guidelines and can trigger manual penalties."),
    h3("Category B — Generic AI / Template Content"),
    p("The FAQ sections across pages (homepage, wall plastering, water proofing) are formulaic, repetitive, and answer generic questions without any specificity to Terrafine's actual products, prices, or locations. Phrases like 'strict quality control measures', 'unwavering commitment', and 'meticulous application' appear almost identically across multiple pages — hallmarks of AI-generated template content."),
    h3("Category C — Functional but Thin Blog Content (2024 posts)"),
    p("The 2024 blog posts (June-October 2024) are more brand-specific but still thin: 200-400 words each, heavy brand mentions, and lacking any original data, case studies, or expert insights. None cite sources or include images with alt text."),
    h2("E-E-A-T Assessment"),
    bullet("Experience: Zero. No case studies, no before/after photos with context, no project walkthroughs."),
    bullet("Expertise: Low. No author bios on blog posts, no technical specifications, no certifications mentioned."),
    bullet("Authoritativeness: Very Low. Fake team bios, competitor names in content, no industry awards or press mentions."),
    bullet("Trustworthiness: Very Low. Lorem ipsum testimonials, empty partner links, PHP errors visible publicly."),
    h2("Thin Pages — Recommend Expansion"),
    bullet("/water-proofing — Zero descriptive content, just product listings. Add 500+ words on waterproofing solutions for Kerala's climate."),
    bullet("/floor-coatings — Same issue. Add content on epoxy flooring, industrial floor coatings."),
    bullet("/special-paints — No description. Add thermal and anti-moisture paint application guides."),
    bullet("/gallery — Images exist but no project descriptions, no client names, no location data."),
    h2("Pages to Rewrite Completely"),
    bullet("/about — Full rewrite with real team, real testimonials, company history, certifications."),
    bullet("/how-to-choose-the-right-gypsum-plastering-company — Remove Kanish Plasters references. Rewrite from Terrafine perspective."),
    h2("Content Freshness"),
    p("The most recent blog post is dated October 2025. Three of the ten posts are from November 2022 and have not been updated. For a construction materials company where product pricing changes regularly, stale content is a trust issue. Recommend a minimum of 2 new blog posts per month targeting long-tail keywords."),
    h2("Helpful Content Compliance"),
    p("This website fails Google's Helpful Content criteria on multiple dimensions: content appears written for search engines rather than users, contains known competitor references, lacks original expertise, has placeholder data, and does not help users make actual purchasing or hiring decisions with specific, accurate information."),
    spacer()
  ];
}

// ── Section 6: Local SEO ───────────────────────────────────────
function section6() {
  return [
    h1("6. Local SEO Analysis"),
    h2("Google Business Profile"),
    p("A Google Maps embed on the Contact page pulls from a GBP listing for 'Terrafine Gypsum Plaster' at Kozhikode (coordinates visible in embed URL). However: no direct link to the GBP listing, no review count displayed, no 'Reviews on Google' widget or embed, and no evidence of active GBP management."),
    h2("NAP Consistency Issues"),
    p("The website lists TWO different company addresses and TWO different brand names:"),
    bullet("Palarivattom, Kochi (terrafineco@gmail.com / www.terrafineco.com) — 'Buildico Terrafine LLP'"),
    bullet("KM Residency, Kozhikode (buildicogroup@gmail.com / www.buildicogroup.com) — different email domain"),
    p("Using a Gmail address (terrafineco@gmail.com) instead of a professional domain email (info@terrafineco.com) harms trust signals for local SEO. The two different website URLs (terrafineco.com and buildicogroup.com) for the same company create NAP inconsistency across the web."),
    h2("Location Pages — MISSING"),
    p("No city-specific landing pages exist for Kochi, Kozhikode, Thrissur, Ernakulam, or Trivandrum. These are the highest-value local SEO assets for a Kerala-based construction company. Competitors who have these pages will outrank Terrafine for all city-specific searches."),
    h2("Local Schema — MISSING"),
    p("No LocalBusiness or Organization schema is implemented on the website. Without this, Google cannot populate Knowledge Panel information from the website itself and must rely solely on the GBP listing."),
    h2("Reviews Strategy"),
    p("No visible reviews on the website (testimonials are Lorem ipsum). No Google review count widget. No strategy for soliciting, displaying, or responding to reviews. Google Reviews and Ratings are a primary local ranking factor. Recommend: Add a 'Leave a Review' CTA linking to the GBP profile on the Contact and Thank You pages. Respond to all existing Google reviews within 24 hours."),
    h2("Local Keywords Gap"),
    p("The site targets only 'gypsum plastering in kerala' at a state level. No suburb-specific or city-specific content exists. High-volume searches like 'gypsum plastering kochi', 'waterproofing contractors ernakulam', and 'floor coating company thrissur' are completely unaddressed."),
    spacer()
  ];
}

// ── Section 7: UX ─────────────────────────────────────────────
function section7() {
  return [
    h1("7. User Experience (UX) Analysis"),
    h2("Navigation — ★★☆☆☆"),
    p("Navigation is duplicated 4x in HTML. The Products dropdown is JavaScript-based which works visually but fails accessibility and crawlability standards. There is no mega-menu or contextual navigation on product pages. Footer navigation only has 5 links, missing all product categories — a lost opportunity for both users and crawlers."),
    h2("Mobile UX — ★★☆☆☆"),
    p("Viewport meta tag is set with maximum-scale=1, which prevents users from zooming on mobile — an accessibility violation (WCAG 2.1 Success Criterion 1.4.4). The site appears mobile-responsive at a structural level, but the fixed maximum-scale prevents accessibility compliance."),
    h2("Desktop UX — ★★★☆☆"),
    p("Desktop layout appears functional with clear product grid, blog section, and gallery. However, hero banners show 'Welcome to Buildico Terrafine LLP' in tiny text with minimal visual hierarchy. The value proposition is buried below the fold. No sticky call-to-action exists."),
    h2("Accessibility Issues"),
    bullet("maximum-scale=1 in viewport meta — prevents zoom (accessibility violation)"),
    bullet("Logo images use 'Logo' as alt text across all pages — not descriptive"),
    bullet("Social media icon links appear to have no visible text — screen reader inaccessible"),
    bullet("No skip-to-content link for keyboard navigation"),
    bullet("JavaScript-void hrefs break keyboard navigation of product dropdown"),
    h2("Forms & Contact Options"),
    p("The Contact page does not appear to have a contact form in the crawled content. The primary contact mechanisms are: WhatsApp link (top bar), phone number (top bar + footer), and email in footer. WhatsApp integration is a positive for the Kerala market where WhatsApp is the dominant business communication channel. However, the absence of a web form means no data capture for leads who don't want to call or message directly."),
    h2("Call To Actions — ★★☆☆☆"),
    p("The primary CTA throughout the site is 'Contact now' or 'Contact Now' — generic and low-converting. No specific CTAs exist for: 'Get a Free Quote', 'Download Product Brochure', 'Request a Sample', 'Book a Site Visit', or 'Find a Dealer Near You'. The product pages show prices but have no 'Add to Cart', 'Request Quote', or 'Order Now' button — the intent to sell products online is unclear."),
    h2("Trust Signals — ★☆☆☆☆"),
    p("Critical trust signals that are MISSING: real testimonials, Google review widget, industry certifications, IS/ISO certificates, LLP registration number, payment security badges (if selling online), years in business prominently displayed, project photos with verified client names."),
    h2("Conversion Flow"),
    p("The current conversion flow is: Land on page → See products → Click 'Contact Now' → Land on contact page with phone/email. There is no nurturing, no quote calculator, no live chat, no lead magnet. The bounce rate for this type of site is likely very high because users who aren't immediately ready to call have no middle-funnel options."),
    spacer()
  ];
}

// ── Section 8: Performance ────────────────────────────────────
function section8() {
  return [
    h1("8. Performance Analysis"),
    h2("Identified Performance Issues"),
    boldBullet("Loading Animation GIF", "A GIF file (loading (2).gif — note the space in filename) is used as a site-wide loading screen. GIFs are highly inefficient for animations. The space in the filename is also problematic for servers and URLs."),
    boldBullet("Image Filenames as Unix Timestamps", "All images use Unix timestamp filenames (e.g., 168317348627.jpg, 166972119349.jpg). These have zero descriptive value for SEO. Google uses image filenames as a ranking signal for image search."),
    boldBullet("Mixed HTTP/HTTPS Resources", "Product thumbnail images use http:// (non-secure): http://terrafineco.com/media/img/250x250/168961053128.jpeg. The main site is served over HTTPS, but embedded HTTP resources trigger 'mixed content' browser warnings and can block resource loading."),
    boldBullet("No Width/Height on Images", "Images throughout the site lack explicit width and height attributes, causing Cumulative Layout Shift (CLS) as images load and push content around."),
    boldBullet("No Lazy Loading Detected", "No loading='lazy' attribute found on below-the-fold images. All images load immediately, increasing initial page weight unnecessarily."),
    boldBullet("No Evidence of Caching Headers", "Without inspecting server headers directly, the CodeIgniter PHP backend does not appear to implement aggressive browser caching. Static assets (CSS, JS, images) should have Cache-Control: max-age=31536000."),
    boldBullet("Third-Party Scripts", "Google Maps iframe on contact page, WhatsApp button script, and social sharing scripts all represent third-party blocking resources."),
    boldBullet("CSS/JS Not Minified (Likely)", "The custom CMS is PHP/CodeIgniter with no evidence of an asset pipeline or minification. CSS and JS files are likely unminified, increasing transfer size."),
    h2("Core Web Vitals — Estimated Assessment"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2340, 2340, 2340, 2340],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Metric", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Estimated", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Target", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Status", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        ...[ 
          ["LCP (Largest Contentful Paint)", "> 4.0s (Banner image, no preload)", "< 2.5s", "❌ POOR"],
          ["CLS (Cumulative Layout Shift)", "> 0.25 (Missing img dimensions)", "< 0.1", "❌ POOR"],
          ["INP (Interaction to Next Paint)", "~200ms (Heavy DOM from 4x nav)", "< 200ms", "⚠ NEEDS IMPROVEMENT"],
          ["FCP (First Contentful Paint)", "> 2.5s (Loading GIF blocks render)", "< 1.8s", "❌ POOR"],
          ["TTFB (Time to First Byte)", "~400-600ms (PHP/CodeIgniter CMS)", "< 200ms", "⚠ NEEDS IMPROVEMENT"],
        ].map(([m, e, t, s]) => new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: m, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: e, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: t, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: s, font: "Arial", size: 20, bold: true, color: s.includes("❌") ? C.red : C.orange })] })] }),
        ]}))
      ]
    }),
    spacer()
  ];
}

// ── Section 9: Competitor Analysis ────────────────────────────
function section9() {
  return [
    h1("9. Competitor Analysis"),
    h2("Identified Competitors"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2500, 3000, 3860],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Competitor", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Focus", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Advantage Over Terrafine", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        ...[
          ["Kanish Plasters (kanishplasters.com)", "Gypsum plastering services, Kerala & India", "Ironically, Terrafine's own blog post promotes them. Their branding, case studies, and service pages are more credible."],
          ["Saint-Gobain Gyproc (saint-gobain.co.in)", "Premium gypsum plaster, national brand", "Massive DA, product specs, technical datasheets, installer network pages. Dominates informational queries."],
          ["Birla White (birlawhite.com)", "Wall putty, plaster, cement products", "National brand authority, extensive product documentation, dealer locator, strong backlink profile."],
          ["Snowcem India (snowcem.com)", "Weatherproof coatings, waterproofing", "Established brand, product certifications, professional content, multi-language support."],
          ["Local Kerala contractors ranking for 'gypsum plastering kochi'", "Service providers, not manufacturers", "Google Map Pack presence, many reviews, city-specific pages rank above Terrafine for local queries."],
        ].map(([c, f, a]) => new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: c, font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: f, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: a, font: "Arial", size: 20 })] })] }),
        ]}))
      ]
    }),
    h2("What Competitors Do Better"),
    bullet("Real product technical datasheets with coverage rates, mix ratios, drying times"),
    bullet("City-specific landing pages for every district they serve"),
    bullet("Verified Google reviews actively displayed and responded to"),
    bullet("Dealer/distributor locator functionality"),
    bullet("SSL-secured, error-free pages with no exposed PHP errors"),
    bullet("Properly attributed author bios on blog content"),
    bullet("Schema markup for rich results"),
    bullet("Consistent NAP across all citation sources"),
    spacer()
  ];
}

// ── Section 10: Backlink Analysis ────────────────────────────
function section10() {
  return [
    h1("10. Backlink Analysis"),
    h2("Observable Backlink Signals (Based on Site Inspection)"),
    boldBullet("Outbound Link to SEO Agency", "Footer contains 'SEO Managed By Iberrtechnologies' with a dofollow link to iberrtech.com. This is a footer link credit common for SEO agencies but provides no SEO benefit to Terrafine."),
    boldBullet("Social Profiles", "Facebook (terrafinegypsumplaster) and Instagram (terrafine_gypsum_plaster) profiles exist and link back to the domain — low DA but relevant brand signals."),
    boldBullet("YouTube Channel", "@terrafinegypsumplastering588 exists — YouTube channel link is a strong Google-owned signal but the channel needs optimization with video descriptions linking back to specific product pages."),
    boldBullet("UAE Sister Site", "uae.terrafineco.com exists as a subdomain — internal link between regional sites helps establish entity signals."),
    h2("Link Building Opportunities"),
    bullet("Kerala construction industry directories (Sulekha, JustDial, IndiaMart, TradeIndia) — submit business with consistent NAP"),
    bullet("Construction and architecture blogs in Kerala — guest posting with expert gypsum content"),
    bullet("Building material YouTube collaborations with Kerala construction influencers"),
    bullet("CREDAI Kerala (Confederation of Real Estate Developers) membership and directory listing"),
    bullet("Architect and interior designer referral networks in Kochi and Kozhikode"),
    bullet("Press releases to Kerala construction trade publications about new product launches"),
    bullet("Academic institutions — Kerala Engineering colleges with construction departments"),
    h2("Toxic Link Risks"),
    p("Without a full backlink export (requires Ahrefs/SEMrush), toxic link assessment cannot be fully completed. However, the footer 'SEO Managed By' link suggests the SEO agency may have built links as part of their service — verify in Google Search Console that no spammy directory or PBN links exist."),
    spacer()
  ];
}

// ── Section 11: Schema Audit ──────────────────────────────────
function schemaRow(schema, present, priority) {
  const col = present === "YES" ? C.green : C.red;
  return new TableRow({ children: [
    new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: schema, font: "Arial", size: 20 })] })] }),
    new TableCell({ borders: borders(C.midGray), shading: { fill: present === "YES" ? C.greenBg : C.redBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: present, font: "Arial", size: 20, bold: true, color: col })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: priority, font: "Arial", size: 20 })] })] }),
  ]});
}

function section11() {
  return [
    h1("11. Schema Markup Audit"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [3500, 1500, 4360],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Schema Type", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Present", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Priority / Recommendation", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        schemaRow("Organization", "NO", "HIGH — Add to homepage with name, url, logo, contactPoint, sameAs (social profiles)"),
        schemaRow("LocalBusiness", "NO", "HIGH — Add with address (both Kochi + Kozhikode), phone, openingHours, geo"),
        schemaRow("Product", "NO", "HIGH — Add to every product detail page with name, price, currency, description, brand"),
        schemaRow("FAQPage", "NO", "HIGH — FAQ sections exist on 3+ pages. Add FAQPage schema to unlock SERP expansion"),
        schemaRow("BreadcrumbList", "NO", "MEDIUM — Add to all inner pages for enhanced SERP display"),
        schemaRow("Article", "NO", "MEDIUM — Add to all blog posts with author, datePublished, publisher"),
        schemaRow("WebSite", "NO", "MEDIUM — Add with SearchAction for sitelinks search box"),
        schemaRow("Review / AggregateRating", "NO", "HIGH — Once real reviews are collected, add to product pages for star ratings in SERPs"),
        schemaRow("ImageObject", "NO", "LOW — Add to gallery and project portfolio images"),
        schemaRow("VideoObject", "NO", "LOW — Add if YouTube videos are embedded on pages"),
      ]
    }),
    spacer()
  ];
}

// ── Section 12: Conversion Optimization ──────────────────────
function section12() {
  return [
    h1("12. Conversion Optimization"),
    h2("Current Conversion Rate Estimate: < 1%"),
    p("The website is built as a brochure site with no active conversion optimization. The following issues directly reduce conversion rate:"),
    h2("Critical Conversion Failures"),
    boldBullet("No Contact Form", "Users who prefer not to call or WhatsApp have no option to submit an inquiry. A simple name/phone/message form on the Contact page and product pages is the minimum requirement."),
    boldBullet("Product Pages Have No CTA", "Product detail pages list prices but have no 'Request Quote', 'Order Now', 'Add to Enquiry', or 'WhatsApp for Price' button. Users see a price but have no clear next step."),
    boldBullet("No Lead Magnet", "No PDF product catalogue, no 'Get a Free Plastering Quote' calculator, no sample request form. Visitors who aren't ready to buy immediately have no reason to leave their contact details."),
    boldBullet("No Live Chat or Chatbot", "For B2B construction buyers who visit at off-hours, no chat widget is available. A WhatsApp Chat Widget (wa.link) would be low-cost and highly effective for the Kerala market."),
    boldBullet("Hero Banner CTAs are Generic", "All hero slides use 'Contact now' with no value statement. Test: 'Get a Free Site Estimate' or 'Compare Our Plaster Prices' for significantly higher CTR."),
    boldBullet("No Pricing Transparency Strategy", "Prices are shown on product pages (good) but without context — no quantity discounts, no bulk pricing tiers, no delivery information. Construction buyers need to understand full cost implications."),
    boldBullet("Social Proof is Non-Existent", "The three Lorem ipsum testimonials are not just useless — they are actively harmful. Real testimonials with project details are the highest-converting trust element for B2B construction purchases."),
    h2("Positive Conversion Elements"),
    bullet("WhatsApp link in top bar — excellent for Kerala market where WhatsApp is dominant"),
    bullet("Phone number visible in top bar on desktop"),
    bullet("Project statistics (6000+ Residential, 800+ Commercial) are trust signals when real"),
    bullet("Product pricing shown openly — good for comparison shoppers"),
    bullet("Google Maps embed on Contact page — helps local visitors verify physical presence"),
    spacer()
  ];
}

// ── Section 13: AI SEO Readiness ─────────────────────────────
function section13() {
  return [
    h1("13. AI SEO Readiness Assessment"),
    h2("Current AI Search Visibility: VERY LOW"),
    p("AI-powered search systems (Google AI Overviews, ChatGPT Search, Perplexity, Gemini) rely on clear, factual, well-structured content from authoritative sources. Terrafineco.com currently fails most AI-readiness criteria:"),
    h2("Google AI Overviews Readiness"),
    bullet("FAIL: FAQ content exists but lacks FAQPage schema to signal structured Q&A to Google"),
    bullet("FAIL: No clear 'author expertise' signals for AI to attribute answers to"),
    bullet("FAIL: Competitor brand (Kanish Plasters) mentioned in content confuses entity resolution"),
    bullet("FAIL: Thin product pages with no specifications cannot be cited in AI product comparisons"),
    bullet("PASS: Some specific factual claims (6000+ projects, 100+ dealers) are AI-citeable if verified"),
    h2("ChatGPT / Perplexity / Bing Copilot Readiness"),
    bullet("FAIL: No author bios, no E-E-A-T signals for AI to trust as a source"),
    bullet("FAIL: No clear 'About the Company' machine-readable structured data"),
    bullet("FAIL: Placeholder content (Lorem ipsum, fake team) would be picked up and cited incorrectly"),
    bullet("PASS: Company name and location are clearly stated and consistent in footer"),
    h2("Recommendations for AI Search Optimization"),
    bullet("Implement comprehensive schema markup (Organization, Product, FAQ, Article)"),
    bullet("Add a detailed 'About' page with real team bios, founding year, certifications, and LinkedIn profiles"),
    bullet("Create a 'Gypsum Plastering Guide for Kerala' cornerstone article — this type of comprehensive, original content is most likely to be cited in AI Overviews"),
    bullet("Add explicit author bylines on blog posts with structured author schema"),
    bullet("Create a clear entity footprint: consistent brand name, address, phone across all platforms (GBP, IndiaMART, JustDial, social media)"),
    bullet("Structure content with clear question-and-answer formatting using H2/H3 for questions"),
    spacer()
  ];
}

// ── Section 14-15: Strengths & Weaknesses ────────────────────
function section14() {
  return [
    h1("14. Strengths"),
    h2("What the Website Does Well"),
    boldBullet("Homepage Meta Title", "The homepage title 'Gypsum plastering in kerala | Gypsum wall plastering kerala' correctly targets the primary local keyword with geographic modifier. This is one of the few correctly configured SEO elements."),
    boldBullet("Google Verification Meta Tag", "Google Site Verification tag is present on homepage, meaning Google Search Console is connected. This is a basic but important technical positive."),
    boldBullet("Blog Content Volume", "10 blog posts across 2022-2025 demonstrates some content commitment. The blog URLs are clean (domain.com/post-slug) with no dates or category prefixes cluttering the URL."),
    boldBullet("Breadcrumb Text on Inner Pages", "Visual breadcrumb text ('Home / Blogs / Blog Detail') exists — just needs schema markup to unlock full SEO value."),
    boldBullet("WhatsApp Integration", "WhatsApp link in the header is an effective, locally relevant conversion tool for the Kerala B2B and B2C market."),
    boldBullet("Social Media Presence", "Active Facebook, Instagram, and YouTube profiles exist with relevant handles. YouTube channel specifically is underutilized but a strong opportunity."),
    boldBullet("Product Pricing Transparency", "Displaying product prices (₹650 - ₹11,000) directly on listing pages is good for both SEO (product schema) and conversion (reduces friction)."),
    boldBullet("Regional Expansion Signal", "UAE subdomain shows market expansion, which can be positive for brand authority and international reach if properly configured with hreflang."),
    boldBullet("FAQ Sections Exist", "Multiple pages have FAQ sections addressing common buyer questions. The content quality is acceptable, just needs FAQPage schema to unlock rich results."),
    boldBullet("Homepage Statistics", "Project counts (6000+ Residential, 800+ Commercial, 150+ Mega Projects, 100+ Dealers) are strong trust signals when real and verifiable."),
    spacer()
  ];
}

function section15() {
  return [
    h1("15. Weaknesses (Prioritized by Impact)"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [200, 4000, 2580, 2580],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 80, right: 80 }, children: [new Paragraph({ children: [new TextRun({ text: "#", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Issue", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Severity", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "SEO Impact", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        ...[
          ["1", "Wrong immigration meta titles on Blogs/Contact/Blog posts", "CRITICAL", "Actively misdirects Google — likely causing deindexing of these pages"],
          ["2", "Fake team bios and Lorem ipsum testimonials on About page", "CRITICAL", "Destroys E-E-A-T — Google's quality raters penalize this"],
          ["3", "Blog content references competitor brand 'Kanish Plasters'", "CRITICAL", "Promotes competitor, signals scraped/AI-generated content"],
          ["4", "PHP errors visible in product category pages", "HIGH", "Harms content quality signals, exposes security info"],
          ["5", "No XML sitemap and no robots.txt", "HIGH", "Pages may never be crawled or indexed"],
          ["6", "No schema markup anywhere on site", "HIGH", "Missing all rich result opportunities"],
          ["7", "No canonical tags", "HIGH", "Duplicate content dilutes ranking signals"],
          ["8", "Products nav uses javascript:void(0)", "HIGH", "All product category pages may be de-prioritized in crawl"],
          ["9", "No structured data for Local Business", "HIGH", "Missing local SEO ranking signals"],
          ["10", "All product category pages have empty meta titles/descriptions", "HIGH", "Zero SEO optimization on category landing pages"],
          ["11", "No city-specific landing pages for Kerala cities", "HIGH", "Missing all city-level local search traffic"],
          ["12", "No contact form — only phone and email", "MEDIUM", "Significant lead generation gap"],
          ["13", "No XML sitemap submitted to GSC", "MEDIUM", "Indexing delays and gaps"],
          ["14", "Mixed HTTP/HTTPS content on product thumbnails", "MEDIUM", "Browser security warnings, potential resource blocking"],
          ["15", "Duplicate navigation HTML (4 instances)", "MEDIUM", "HTML bloat, crawl efficiency loss"],
          ["16", "viewport maximum-scale=1 accessibility violation", "MEDIUM", "WCAG non-compliance, accessibility barrier"],
          ["17", "Image filenames are Unix timestamps", "LOW", "Zero image SEO value — missed keyword opportunity"],
          ["18", "No lazy loading on below-fold images", "LOW", "Unnecessary initial page weight"],
          ["19", "No hreflang between main site and UAE subdomain", "LOW", "Geographic targeting confusion"],
          ["20", "Loading screen uses GIF file with space in filename", "LOW", "Performance and URL encoding issues"],
        ].map(([n, issue, sev, impact]) => new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 80, right: 80 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: n, font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: issue, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: sev === "CRITICAL" ? C.redBg : sev === "HIGH" ? C.orangeBg : C.greenBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: sev, font: "Arial", size: 20, bold: true, color: sev === "CRITICAL" ? C.red : sev === "HIGH" ? C.orange : C.green })] })] }),
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: impact, font: "Arial", size: 20 })] })] }),
        ]}))
      ]
    }),
    spacer()
  ];
}

// ── Section 16: Action Plan ────────────────────────────────────
function section16() {
  return [
    h1("16. Action Plan & Roadmap"),
    h2("🚨 Week 1 — Immediate Critical Fixes (Stop the Bleeding)"),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Fix ALL meta titles and descriptions — especially Blogs, Contact, and all Blog post pages. Replace immigration agency meta completely.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Remove or suppress the PHP error message from product category pages. Set display_errors = Off in production PHP config.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Replace fake team bios (Kari Bates, Bertha Day, etc.) with real Terrafine staff or remove the section.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Replace all Lorem ipsum testimonials with real customer quotes. Get minimum 3 real testimonials urgently.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Fix all broken/empty href='<>' social media links in the footer and About page.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Rewrite the 'How To Choose The Right Gypsum Plastering Company' blog post — remove all Kanish Plasters references.", font: "Arial", size: 22, bold: true, color: C.red })] }),
    new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 60, after: 80 }, children: [new TextRun({ text: "Fix HTTP product thumbnails to HTTPS to eliminate mixed content warnings.", font: "Arial", size: 22 })] }),
    h2("📅 Month 1 — Technical Foundation"),
    bullet("Create robots.txt with proper disallow rules and sitemap reference"),
    bullet("Generate and submit XML sitemap to Google Search Console and Bing Webmaster Tools"),
    bullet("Add self-referencing canonical tags to all pages"),
    bullet("Implement Organization + LocalBusiness schema on homepage"),
    bullet("Add FAQPage schema to all 3 FAQ sections (homepage, wall plastering, water proofing)"),
    bullet("Add Product schema to all product detail pages (name, price, description, brand)"),
    bullet("Add BreadcrumbList schema to all inner pages"),
    bullet("Replace javascript:void(0) on Products nav with a real products landing page URL"),
    bullet("Add explicit width and height attributes to all images"),
    bullet("Add loading='lazy' to all below-fold images"),
    bullet("Remove viewport maximum-scale=1 restriction"),
    bullet("Add Article schema to all blog posts with real author info"),
    bullet("Add a contact form to the Contact page"),
    h2("📆 Quarter 1 (3 Months) — Content & Local SEO"),
    bullet("Publish 2 new in-depth blog posts per month targeting long-tail keywords"),
    bullet("Create city-specific landing pages: Kochi, Kozhikode, Thrissur, Ernakulam, Trivandrum"),
    bullet("Expand all 6 product category pages to 500+ words of unique descriptive content each"),
    bullet("Create a comprehensive Product Comparison page (Gypsum vs Cement Plaster)"),
    bullet("Add product technical datasheets (PDF downloads) for each product with coverage rates, application method, drying time"),
    bullet("Optimize and complete Google Business Profile for both Kochi and Kozhikode locations"),
    bullet("Submit business to IndiaMART, JustDial, Sulekha, TradeIndia with consistent NAP"),
    bullet("Launch a Review Generation campaign — email/WhatsApp past customers requesting Google reviews"),
    bullet("Rename all images to descriptive filenames before uploading (e.g., terrafine-gypsum-plaster-wall-kerala.webp)"),
    bullet("Consolidate duplicate navigation HTML to 2 instances (desktop + mobile only)"),
    h2("🗓 6 Months — Authority & Conversion"),
    bullet("Publish cornerstone guide: 'Complete Guide to Gypsum Plastering in Kerala 2025'"),
    bullet("Launch WhatsApp Chat Widget for instant inquiries"),
    bullet("Implement hreflang for main site and UAE subdomain"),
    bullet("Build 20+ citations on construction industry directories"),
    bullet("Create video testimonials and project case studies — publish on YouTube and embed on website"),
    bullet("Develop dealer locator page for the 100+ claimed distributors"),
    bullet("A/B test hero CTA — 'Get Free Quote' vs 'Contact Now'"),
    bullet("Set up Google Analytics 4 with conversion tracking (phone clicks, form submissions, WhatsApp clicks)"),
    bullet("Monitor Core Web Vitals monthly and optimize until LCP < 2.5s"),
    spacer()
  ];
}

// ── Section 17: SEO Scorecard ─────────────────────────────────
function scoreRow(cat, score, max, notes) {
  const pct = score / max;
  const color = pct < 0.4 ? C.red : pct < 0.6 ? C.orange : C.green;
  const barFill = Math.round(pct * 20);
  const bar = "█".repeat(barFill) + "░".repeat(20 - barFill);
  return new TableRow({ children: [
    new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: cat, font: "Arial", size: 20, bold: true })] })] }),
    new TableCell({ borders: borders(C.midGray), shading: { fill: pct < 0.4 ? C.redBg : pct < 0.6 ? C.orangeBg : C.greenBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: `${score}/${max}`, font: "Arial", size: 22, bold: true, color })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: bar, font: "Courier New", size: 16, color })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: notes, font: "Arial", size: 18, color: C.gray })] })] }),
  ]});
}

function section17() {
  return [
    h1("17. SEO Scorecard"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2200, 1000, 2500, 3660],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Category", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Score", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Visual", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Key Reason", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        scoreRow("Technical SEO", 22, 100, "No sitemap, no robots.txt, no canonical, PHP errors live, no schema"),
        scoreRow("Content SEO", 18, 100, "Fake data, competitor brand in content, Lorem ipsum testimonials"),
        scoreRow("On-Page SEO", 25, 100, "Wrong meta on 60%+ of pages; immigration meta is critical fail"),
        scoreRow("Local SEO", 20, 100, "No city pages, no local schema, NAP inconsistency, no review strategy"),
        scoreRow("Performance", 30, 100, "Images unoptimized, GIF loader, mixed HTTP content, no lazy load"),
        scoreRow("UX", 35, 100, "Navigation works but duplicated; no form; generic CTAs; max-scale=1"),
        scoreRow("Authority", 25, 100, "Low backlink profile, no industry citations, no E-E-A-T signals"),
        scoreRow("Conversion", 20, 100, "No form, no live chat, no quote tool, Lorem ipsum social proof"),
        new TableRow({ children: [
          new TableCell({ borders: borders(C.blue), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "OVERALL SEO SCORE", font: "Arial", size: 22, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.blue), shading: { fill: C.red, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: "28/100", font: "Arial", size: 24, bold: true, color: C.white })] })] }),
          new TableCell({ colSpan: 2, borders: borders(C.blue), shading: { fill: C.redBg, type: ShadingType.CLEAR }, margins: { top: 100, bottom: 100, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "CRITICAL — Immediate intervention required. Site has multiple active ranking suppression factors including wrong meta data, fake content, live PHP errors, and zero schema markup.", font: "Arial", size: 20, bold: true, color: C.red })] })] }),
        ]}),
      ]
    }),
    spacer()
  ];
}

// ── Section 18: Priority Matrix ────────────────────────────────
function matrixRow(issue, impact, diff, pri, seoEst, trafficEst) {
  const priColor = pri === "P1" ? C.red : pri === "P2" ? C.orange : C.green;
  return new TableRow({ children: [
    new TableCell({ borders: borders(C.midGray), margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text: issue, font: "Arial", size: 18 })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: impact, font: "Arial", size: 18 })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: diff, font: "Arial", size: 18 })] })] }),
    new TableCell({ borders: borders(C.midGray), shading: { fill: pri === "P1" ? C.redBg : pri === "P2" ? C.orangeBg : C.greenBg, type: ShadingType.CLEAR }, margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: pri, font: "Arial", size: 18, bold: true, color: priColor })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: seoEst, font: "Arial", size: 18 })] })] }),
    new TableCell({ borders: borders(C.midGray), margins: { top: 60, bottom: 60, left: 100, right: 100 }, children: [new Paragraph({ alignment: AlignmentType.CENTER, children: [new TextRun({ text: trafficEst, font: "Arial", size: 18 })] })] }),
  ]});
}

function section18() {
  const hdrCell = (text) => new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 100, right: 100 }, children: [new Paragraph({ children: [new TextRun({ text, font: "Arial", size: 18, bold: true, color: C.white })] })] });
  return [
    h1("18. Priority Matrix"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2500, 900, 900, 700, 1280, 1080],
      rows: [
        new TableRow({ children: [
          hdrCell("Issue"),
          hdrCell("Impact"),
          hdrCell("Difficulty"),
          hdrCell("Priority"),
          hdrCell("SEO Gain"),
          hdrCell("Traffic +"),
        ]}),
        matrixRow("Fix immigration meta titles/descriptions", "HIGH", "Easy", "P1", "+20 pts", "+40%"),
        matrixRow("Remove fake team + Lorem ipsum", "HIGH", "Easy", "P1", "+10 pts", "+15%"),
        matrixRow("Fix PHP errors on product pages", "HIGH", "Easy", "P1", "+8 pts", "+10%"),
        matrixRow("Rewrite Kanish Plasters blog post", "HIGH", "Easy", "P1", "+8 pts", "+10%"),
        matrixRow("Create robots.txt + XML sitemap", "HIGH", "Easy", "P1", "+10 pts", "+25%"),
        matrixRow("Add canonical tags sitewide", "HIGH", "Medium", "P1", "+8 pts", "+15%"),
        matrixRow("Implement schema (Org + Local + FAQ)", "HIGH", "Medium", "P1", "+15 pts", "+20%"),
        matrixRow("Fix javascript:void(0) on nav", "HIGH", "Easy", "P1", "+6 pts", "+10%"),
        matrixRow("Add Product schema to product pages", "HIGH", "Medium", "P1", "+10 pts", "+15%"),
        matrixRow("Fix HTTP thumbnails to HTTPS", "MEDIUM", "Easy", "P1", "+4 pts", "+5%"),
        matrixRow("Create city landing pages (5 cities)", "HIGH", "Medium", "P2", "+15 pts", "+50%"),
        matrixRow("Expand product category content (500+ words each)", "HIGH", "Medium", "P2", "+12 pts", "+30%"),
        matrixRow("Add contact form", "MEDIUM", "Easy", "P2", "+3 pts", "+20% CVR"),
        matrixRow("Optimize and verify GBP for both locations", "HIGH", "Medium", "P2", "+10 pts", "+35% local"),
        matrixRow("Image optimization + lazy loading", "MEDIUM", "Medium", "P2", "+8 pts", "+12%"),
        matrixRow("2 blog posts/month (long-tail)", "HIGH", "High", "P2", "+20 pts", "+60%"),
        matrixRow("Build 20+ local citations (IndiaMART, JustDial)", "MEDIUM", "Medium", "P3", "+8 pts", "+20%"),
        matrixRow("Hreflang implementation", "LOW", "Medium", "P3", "+3 pts", "+5%"),
        matrixRow("Cornerstone guide (Kerala gypsum plastering)", "HIGH", "High", "P3", "+15 pts", "+70%"),
        matrixRow("YouTube video integration + VideoObject schema", "MEDIUM", "High", "P3", "+6 pts", "+15%"),
      ]
    }),
    spacer()
  ];
}

// ── Section 19: Executive Summary ────────────────────────────
function section19() {
  return [
    h1("19. Final Executive Summary"),
    h2("Situation Assessment"),
    p("Terrafineco.com is a construction materials and gypsum plastering website for Buildico Terrafine LLP in Kerala, India. Despite operating in a commercially viable niche with genuine market demand, the website has some of the most severe SEO failures we have identified in a technical audit. The site actively suppresses its own rankings through multiple critical errors."),
    h2("🚨 Top 20 SEO Issues"),
    ...[
      "Wrong immigration meta titles and descriptions on Blogs, Contact, and all Blog post pages",
      "Fake team member data (Kari Bates, Bertha Day) on the About page — never real staff",
      "Lorem ipsum placeholder testimonials on About page — zero social proof value",
      "Blog content promotes competitor brand 'Kanish Plasters' in multiple paragraphs",
      "Live PHP errors exposed on product category pages including full server directory paths",
      "Zero XML sitemap — pages may never be discovered by Google",
      "No robots.txt file exists",
      "Zero schema markup across the entire site (no Organization, Local Business, Product, FAQ)",
      "No canonical tags on any page — duplicate content risk",
      "Products navigation uses javascript:void(0) — blocks Googlebot from crawl path",
      "Empty meta titles and descriptions on all product category pages",
      "H1 tag misused for logo image instead of page heading on multiple pages",
      "No city-specific landing pages for Kerala's major construction markets",
      "Mixed HTTP content on product thumbnails (while site runs on HTTPS)",
      "Duplicate navigation HTML appearing 4 times per page",
      "viewport meta maximum-scale=1 blocks mobile zoom — accessibility violation",
      "No contact form — users cannot submit inquiries without calling/WhatsApp",
      "No hreflang between main Kerala site and UAE subdomain",
      "NAP inconsistency between two offices (different emails, different website domains)",
      "No E-E-A-T signals — no real author bios, no certifications, no company registration details"
    ].map((t, i) => new Paragraph({ numbering: { reference: "numbers", level: 0 }, spacing: { before: 40, after: 60 }, children: [new TextRun({ text: t, font: "Arial", size: 22, color: C.darkText })] })),
    h2("🌟 Top 20 SEO Opportunities"),
    ...[
      "City landing pages for Kochi, Kozhikode, Thrissur, Ernakulam, Trivandrum — each can rank individually",
      "FAQPage schema on 3+ existing FAQ sections — unlock Google SERP rich results immediately",
      "Google Business Profile optimization for both office locations",
      "Long-tail keyword blog strategy targeting 'gypsum plaster cost per sqft kerala 2025' type queries",
      "YouTube channel optimization — @terrafinegypsumplastering588 exists but is underutilized",
      "Product schema with pricing to appear in Google Shopping and product rich results",
      "Cornerstone guide: 'Complete Guide to Gypsum Plastering in Kerala' — AI Overview citeable content",
      "Real customer testimonials and Google Review strategy — highest-converting trust builder",
      "Dealer locator page for 100+ claimed distributors — unique content and UX advantage",
      "WhatsApp chat widget integration for instant B2B communication",
      "Technical datasheet PDFs for each product — serve information need and drive downloads",
      "Product comparison pages (Gypsum vs Cement Plaster) — captures bottom-of-funnel informational traffic",
      "IndiaMART and TradeIndia business listings for dealer inquiries",
      "CREDAI Kerala membership and directory citation for authority building",
      "Free Quote/Estimate calculator on product pages — conversion rate optimizer",
      "Before/After project gallery with verified project names and cities",
      "Blog author bios with real credentials — improves E-E-A-T for informational content",
      "Video testimonials from satisfied contractors and builders",
      "Hreflang + UAE-specific content to capture GCC market through organic search",
      "Review generation campaign via WhatsApp to existing customer base"
    ].map((t) => new Paragraph({ numbering: { reference: "bullets", level: 0 }, spacing: { before: 40, after: 60 }, children: [new TextRun({ text: t, font: "Arial", size: 22, color: C.darkText })] })),
    h2("Biggest Competitive Advantages (Untapped)"),
    bullet("Dual-location presence in Kochi AND Kozhikode — major Kerala metros, if leveraged with city pages"),
    bullet("UAE market expansion via subdomain — international reach competitors lack"),
    bullet("100+ dealer network — a dealer locator tool would be a significant content and conversion differentiator"),
    bullet("6000+ completed projects — if turned into a real portfolio with verifiable case studies, this is massive social proof"),
    bullet("Own branded product line (Terrafine) — competitors who only offer services cannot compete on product SEO"),
    h2("Biggest Risks if Unaddressed"),
    bullet("Google Manual Penalty — Lorem ipsum testimonials, fake team data, and scraped competitor content could trigger quality review"),
    bullet("Continued Zero Local Visibility — Without city landing pages, all local search traffic goes to competitors"),
    bullet("Trust Destruction — Any potential customer who sees Lorem ipsum testimonials or Kanish Plasters mentions will immediately lose confidence"),
    bullet("Indexing Gaps — Without a sitemap, new products and blog posts may take months to be indexed"),
    h2("Expected SEO Growth After Implementing All Recommendations"),
    new Table({
      width: { size: 9360, type: WidthType.DXA },
      columnWidths: [2500, 2287, 2287, 2286],
      rows: [
        new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Metric", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "Current (Est.)", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "After 3 Months", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.navy, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: "After 6 Months", font: "Arial", size: 20, bold: true, color: C.white })] })] }),
        ]}),
        ...[
          ["Organic Traffic", "Low (< 500/mo)", "+100–200%", "+400–600%"],
          ["Indexed Pages", "Partial (many blocked)", "Full indexing", "Full + sitelinks"],
          ["Local Ranking (Kochi)", "Page 2-3", "Page 1 Top 5", "Map Pack + Page 1"],
          ["SEO Score", "28/100", "55–65/100", "70–80/100"],
          ["Leads from Organic", "< 5/month", "20–40/month", "60–100/month"],
        ].map(([m, c, t3, t6]) => new TableRow({ children: [
          new TableCell({ borders: borders(C.midGray), margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: m, font: "Arial", size: 20, bold: true })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.redBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: c, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.orangeBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: t3, font: "Arial", size: 20 })] })] }),
          new TableCell({ borders: borders(C.midGray), shading: { fill: C.greenBg, type: ShadingType.CLEAR }, margins: { top: 80, bottom: 80, left: 120, right: 120 }, children: [new Paragraph({ children: [new TextRun({ text: t6, font: "Arial", size: 20, bold: true, color: C.green })] })] }),
        ]}))
      ]
    }),
    spacer(2),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
      children: [new TextRun({ text: "— END OF REPORT —", font: "Arial", size: 24, bold: true, color: C.gray })]
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: "Report generated June 26, 2026 | Professional SEO Audit | terrafineco.com", font: "Arial", size: 18, color: C.gray })]
    }),
  ];
}

// ── Assemble Document ──────────────────────────────────────────
const doc = new Document({
  numbering: {
    config: [
      {
        reference: "bullets",
        levels: [{ level: 0, format: LevelFormat.BULLET, text: "\u2022", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
      },
      {
        reference: "numbers",
        levels: [{ level: 0, format: LevelFormat.DECIMAL, text: "%1.", alignment: AlignmentType.LEFT,
          style: { paragraph: { indent: { left: 720, hanging: 360 } } } }]
      }
    ]
  },
  styles: {
    default: { document: { run: { font: "Arial", size: 22 } } },
    paragraphStyles: [
      { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 36, bold: true, font: "Arial", color: C.navy },
        paragraph: { spacing: { before: 360, after: 200 }, outlineLevel: 0 } },
      { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 28, bold: true, font: "Arial", color: C.navy },
        paragraph: { spacing: { before: 280, after: 120 }, outlineLevel: 1 } },
      { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
        run: { size: 24, bold: true, font: "Arial", color: C.gray },
        paragraph: { spacing: { before: 200, after: 80 }, outlineLevel: 2 } },
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 12240, height: 15840 },
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    headers: {
      default: new Header({
        children: [new Paragraph({
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: C.blue, space: 4 } },
          children: [
            new TextRun({ text: "Terrafineco.com — Professional SEO Audit Report", font: "Arial", size: 18, color: C.gray }),
            new TextRun({ text: "  |  June 2026", font: "Arial", size: 18, color: C.gray }),
          ]
        })]
      })
    },
    footers: {
      default: new Footer({
        children: [new Paragraph({
          border: { top: { style: BorderStyle.SINGLE, size: 4, color: C.blue, space: 4 } },
          children: [
            new TextRun({ text: "CONFIDENTIAL — For Buildico Terrafine LLP only", font: "Arial", size: 16, color: C.gray }),
            new TextRun({ text: "     Page ", font: "Arial", size: 16, color: C.gray }),
            new PageNumber(),
          ]
        })]
      })
    },
    children: [
      ...coverPage(),
      ...section1(),
      pb(),
      ...section2(),
      pb(),
      ...section3(),
      pb(),
      ...section4(),
      pb(),
      ...section5(),
      pb(),
      ...section6(),
      pb(),
      ...section7(),
      pb(),
      ...section8(),
      pb(),
      ...section9(),
      pb(),
      ...section10(),
      pb(),
      ...section11(),
      pb(),
      ...section12(),
      pb(),
      ...section13(),
      pb(),
      ...section14(),
      ...section15(),
      pb(),
      ...section16(),
      pb(),
      ...section17(),
      pb(),
      ...section18(),
      pb(),
      ...section19(),
    ]
  }]
});

Packer.toBuffer(doc).then(buf => {
  fs.writeFileSync("/mnt/user-data/outputs/Terrafineco_SEO_Audit_Report.docx", buf);
  console.log("Done!");
});