import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import dynamic from "next/dynamic"
import Head from "next/head"

const PresentationSection = dynamic(
  () => import("../components/PresentationSection")
)
const ProjectsSection = dynamic(() => import("../components/ProjectsSection"))
const TechnologiesSection = dynamic(
  () => import("../components/TechnologiesSection")
)

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
      {/* <ProjectsSection /> */}
      <Footer />
    </>
  )
}

export default Home
