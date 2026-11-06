import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { BrandIntro } from "@/components/BrandIntro";
import { FeaturedProductsSection } from "@/components/FeaturedProductsSection";
import { CraftsmanshipSection } from "@/components/CraftsmanshipSection";
import { WhyChooseSection } from "@/components/WhyChooseSection";
import { WholesaleSection } from "@/components/WholesaleSection";
import { BrandStorySection } from "@/components/BrandStorySection";
import { ContactCTA } from "@/components/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* 1 & 2: Announcement Bar & Header Navigation */}
      <Header />

      <main>
        {/* 3: Hero Section */}
        <HeroSection />

        {/* 4: Brand Introduction */}
        <BrandIntro />

        {/* 5: Featured Products */}
        <FeaturedProductsSection />

        {/* 6: Craftsmanship Section */}
        {/* <CraftsmanshipSection /> */}

        {/* 7: Why Choose Makar Ji? */}
        <WhyChooseSection />

        {/* 8: Wholesale Enquiry Section */}
        <WholesaleSection />

        {/* 9: Brand Story Section */}
        <BrandStorySection />

        {/* 10: Contact CTA */}
        <ContactCTA />
      </main>

      {/* 11: Professional Footer */}
      <Footer />
    </>
  );
}
