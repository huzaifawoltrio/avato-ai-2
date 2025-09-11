import PageHeader from "~/components/Section/Common/PageHeader";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import PricingSectionTwo from "~/components/Section/Pricing/Pricing-2/Pricing";
import { HomeHeader } from "~/components/Section/Common/Header";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

export default function PricingPage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title="Our Pricing Plan" />
      <PricingSection />
      <PricingSectionTwo />
      <FooterSectionThree />
    </>
  );
}
