import Head from "next/head"
import { GetStaticProps } from "next/types";
import { ReactNode } from "react";
import CardsSection from "../src/components/homeNoAuth/cardsSection";
import HeaderNoAuth from "../src/components/homeNoAuth/headerNoAuth";
import PresentationSection from "../src/components/homeNoAuth/presentationSection";
import SlideSection from "../src/components/homeNoAuth/slideSection";
import courseService, { CourseType } from "../src/services/courseService";
import  styles  from "../styles/HomeNoAuth.module.scss"

interface IndexPageProps{
   chrildren?:  ReactNode;
   course: CourseType[];               //3° ?

}

const HomeNoAuth = ({course}: IndexPageProps) =>{      //4° recebendo as props
  return(
    <>
    <Head>
    <title>OneBitFlix</title>
    <link rel="shortcut icon" href="/favicon.svg" type="image/x-icon"/>
    <meta property="og:title" content="Onebitflix" key="title"/>
    <meta name="description" content="Onebitflix" key="title"/>
    </Head>
    <main>
      <div className={styles.sectionBackground}>
      <HeaderNoAuth/>
      <PresentationSection/>
      </div>
      <CardsSection/>
      <SlideSection newestCourses={course}/>                            
    </main>
    </>
  );
}; //1° Criar função a baixo ^

export const getStaticProps: GetStaticProps = async ()=>{
  const res = await courseService.getNewestCourses();               // 2° obter as informações por está função
  return{
    props:{
      course: res.data,                                                // função para retorna capas e items do back end a cada 24 horas para sites mais staticos que não tanta alteração
    },
    revalidate: 3600 * 24,
  };
};

export default HomeNoAuth;