import LandingText from "@/components/landingPage/landing/LandingText";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import LandingImages from "@/components/landingPage/landing/LandingImages";
import ImageTracks from "@/components/landingPage/imageTracks/ImageTracks";
import Info from "@/components/landingPage/contactSection/Info";
import Footer from "@/components/landingPage/footer/Footer";
import Contact from "@/components/landingPage/contactSection/Contact";

export const dynamic = "force-static";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <section className="flex pb-[100px] ">
          <LandingText />
          <LandingImages />
        </section>
        <section className="pb-[100px]">
          <ImageTracks />
        </section>
        <section className="flex flex-col md:flex-row lg:flex-row pb-[100px]">
          <div className="ml-auto mr-auto flex gap-12 lg:flex-row md:flex-row flex-col">
            <Info />
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
