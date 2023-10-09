import LandingText from "@/components/landing/LandingText";
import styles from "./page.module.css";
import Navbar from "@/components/navbar/Navbar";
import LandingImages from "@/components/landing/LandingImages";
import ImageTracks from "@/components/imageTracks/ImageTracks";
import Info from "@/components/contactSection/Info";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contactSection/Contact";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Navbar />
        <section className="flex pb-[70px] ">
          <LandingText />
          <LandingImages />
        </section>
        <section className="pb-[70px]">
          <ImageTracks />
        </section>
        <section className="flex flex-col md:flex-row lg:flex-row pb-[70px]">
          <div className="ml-auto mr-auto flex gap-12">
            <Info />
            <Contact />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
