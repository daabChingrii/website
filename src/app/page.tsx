import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
// import Image from "next/image";
// import NavBar from "@/components/NavBar";
import { GoogleGeminiEffectDemo } from "@/components/GoogleGeminiEffectDemo";
import { FeaturesSection } from "@/components/ui/FeaturesSection"; // Import the Features Section
export default function Home() {
  return (
    <>
      {/* <NavBar /> */}
      <HeroSection />
      <GoogleGeminiEffectDemo/>
      <AboutSection />
      <FeaturesSection /> {/* Add the Features Section */}
    </>
  );
}
