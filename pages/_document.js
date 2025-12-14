import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="NsZFIo1-MdAn2huheto22SemoefmPiNS4M8Dd68vhHs" />
        
        {/* SEO Meta Tags */}
        <title>Hrishikesh Atole | Software Engineer & MERN Stack Developer</title>
        <meta name="description" content="Hrishikesh Atole - Software Engineer from Mira Road, Thane, Mumbai specializing in MERN & MEAN Stack Development. Graduate from RGIT, experienced developer from Vernost. View portfolio and projects." />
        <meta name="keywords" content="Hrishikesh Atole, Hrishikesh Atole Software Engineer, Hrishikesh Atole RGIT, Hrishikesh Atole Mira Road, Hrishikesh Atole Vernost, Hrishikesh Atole Thane, Hrishikesh Atole Osmanabad, Hrishikesh Atole Dharashiv, Hrishikesh Atole Mumbai, Hrishikesh Atole Marathwada, Hrishikesh Atole Munshi Compound, Hrishikesh Atole MERN, Hrishikesh Atole MEAN, Hrishikesh, Atole, Software Engineer, MERN Stack Developer, MEAN Stack Developer, Full Stack Developer, Web Developer, React Developer, Node.js Developer, MongoDB Developer, Express.js Developer" />
        <meta name="author" content="Hrishikesh Atole" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Mira Road, Thane, Mumbai, Maharashtra, India" />
        <meta name="geo.position" content="19.2952;72.8544" />
        <meta name="ICBM" content="19.2952, 72.8544" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hrishikeshatole.com/" />
        <meta property="og:title" content="Hrishikesh Atole | Software Engineer & MERN Stack Developer" />
        <meta property="og:description" content="Portfolio of Hrishikesh Atole - Software Engineer from Mumbai specializing in MERN & MEAN Stack Development. Graduate from RGIT." />
        <meta property="og:image" content="https://hrishikeshatole.com/log0_h.jpg" />
        <meta property="og:site_name" content="Hrishikesh Atole Portfolio" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hrishikeshatole.com/" />
        <meta property="twitter:title" content="Hrishikesh Atole | Software Engineer & MERN Stack Developer" />
        <meta property="twitter:description" content="Portfolio of Hrishikesh Atole - Software Engineer from Mumbai specializing in MERN & MEAN Stack Development." />
        <meta property="twitter:image" content="https://hrishikeshatole.com/log0_h.jpg" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://hrishikeshatole.com/" />
        
        {/* Standard favicon */}
        <link rel="icon" href="/favicon.ico?v=2" />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        
        {/* Additional formats */}
        <link rel="icon" type="image/png" sizes="32x32" href="/log0_h.jpg?v=2" />
        <link rel="apple-touch-icon" sizes="180x180" href="/log0_h.jpg?v=2" />
        
        <meta name="theme-color" content="#2ecc71" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Hrishikesh Atole",
              "jobTitle": "Software Engineer",
              "description": "MERN & MEAN Stack Developer",
              "url": "https://hrishikeshatole.com/",
              "sameAs": [],
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Mira Road",
                "addressRegion": "Thane",
                "addressCountry": "India"
              },
              "alumniOf": {
                "@type": "CollegeOrUniversity",
                "name": "RGIT"
              },
              "knowsAbout": ["MERN Stack", "MEAN Stack", "React", "Node.js", "MongoDB", "Express.js", "JavaScript", "Software Engineering"]
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
