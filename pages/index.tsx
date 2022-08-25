import Head from "next/head"
import HeaderNoAuth from "../src/components/homeNoAut/headerNoAuth";
import  styles  from "../styles/HomeNoAuth.module.scss"



const HomeNoAuth = () =>{
  return(
    <>
    <Head>
    <title>OneBitFlix</title>
    <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
    <meta property="og:title" content="Onebitflix" key="title"/>
    <meta name="description" content="Onebitflix" key="title"/>
    </Head>
    <main>
      <HeaderNoAuth/>
    </main>
    </>
  );
};

export default HomeNoAuth;