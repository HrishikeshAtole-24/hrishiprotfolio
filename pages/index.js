import Head from 'next/head';
import { useTemplate } from '../templates/TemplateContext';
import { getTemplateComponent } from '../templates/registry';

export default function Home() {
  const { activeKey } = useTemplate();
  const Template = getTemplateComponent(activeKey);

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Hrishikesh Atole - Software Engineer specialising in full-stack and fintech payment systems."
        />
      </Head>
      <Template />
    </>
  );
}
