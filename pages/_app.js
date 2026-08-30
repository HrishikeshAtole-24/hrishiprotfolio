import "@/styles/globals.css";
import "@/styles/portfolio.css";
import Head from 'next/head';
import { TemplateProvider, useTemplate } from '../templates/TemplateContext';
import TemplateSwitcher from '../templates/TemplateSwitcher';
import { templates, siteConfig } from '../config/site.config';

function TemplateHead() {
  const { activeKey } = useTemplate();
  const meta = templates[activeKey] || templates.classic;

  return (
    <Head>
      <title>Hrishikesh Atole — Software Engineer</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      {meta.fonts && (
        <>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link rel="stylesheet" href={meta.fonts} />
        </>
      )}
    </Head>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <TemplateProvider>
      <TemplateHead />
      <Component {...pageProps} />
      {siteConfig.showTemplateSwitcher && <TemplateSwitcher />}
    </TemplateProvider>
  );
}
