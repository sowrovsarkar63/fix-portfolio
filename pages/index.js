import Head from "next/head";
import Contact from "../components/CTA/Contact";
import Hero from "../components/HeroArea/Hero";
import Footer from "./../components/Footer/Footer";
import Navbar from "./../components/Navbar/Navbar";
import Portfolio from "./../components/Portfolio/Portfolio";

export default function Home() {
  return (
    <>
      <Head>
        <title>Md Mahbubul Hasan Sowrov</title>
        <meta
          name="description"
          content="Md Sowrov Sarkar | Frontend developer | React Js Specialist "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Nav bar   */}
      <Navbar />

      {/* Main Content */}

      <main>
        {/* hero area  */}
        <Hero />
        <Portfolio />
        <Contact />
      </main>

      {/* Footer Section  */}
      <Footer />
    </>
  );
}
