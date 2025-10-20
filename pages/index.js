import Head from "next/head";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hrishikesh - Software Engineer Portfolio</title>
        <meta name="description" content="Passionate software engineer with 5+ years of experience in full-stack development" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
      </Head>
      <Layout />
    </>
  );
}