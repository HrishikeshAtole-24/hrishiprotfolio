import Head from "next/head";
import { isLegacy } from "../config/theme";
import Site from "../components/studio/Site";
import Layout from "../components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {isLegacy() ? <Layout /> : <Site />}
    </>
  );
}
