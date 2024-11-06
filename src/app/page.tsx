import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  return (
    <><NavBar /><HeroSection /><AboutSection /></>
  );
}