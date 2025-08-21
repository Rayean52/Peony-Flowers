import Image from "next/image";
import Link from "next/link";
import HeroSection from "./Components/HeroSection";
import ProductHighlights from "./Components/ProductHighlight";
import NewsletterSection from "./Components/Newsletter";

export default function Home() {
  return (
    <>
      <HeroSection></HeroSection>
      <ProductHighlights></ProductHighlights>
      <NewsletterSection></NewsletterSection>
    </>
  );
}
