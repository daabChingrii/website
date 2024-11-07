import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import Image from "next/image";
// import NavBar from "@/components/NavBar";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";

export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <GoogleGeminiEffectDemo/>
      <AboutSection />
    </>
  );
}
