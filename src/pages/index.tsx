import { Header } from "../components/Header"
import { PresentationSection } from "../components/PresentationSection"
import { TechnologiesSection } from "../components/TechnologiesSection"
import { ProjectsSection } from "../components/ProjectsSection"
import { Footer } from "../components/Footer"
import Head from "next/head"

const Home = () => {
  return (
    <>
      <Head>
        <title>Carlos Jr.</title>
        <meta
          name="description"
          content="Olá eu sou Carlos, sou desenvolvedor web full stack, veja mais sobre meu trabalho..."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.webp" />
      </Head>
      <Header />
      <PresentationSection />
      <TechnologiesSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}

export default Home
