import LandingText from "@/components/landing/LandingText";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import LandingImages from "@/components/landing/LandingImages";
import Navbar from "@/components/navbar/Navbar";
import ImageTracks from "@/components/imageTracks/ImageTracks";


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
        <section>
          
        </section>
      </main>
      <Footer />
    </>
  );
}
