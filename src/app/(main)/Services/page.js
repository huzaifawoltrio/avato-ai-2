import ServiceSection from "~/components/Section/Service/Service/Service";
import PricingSection from "~/components/Section/Common/Pricing/Pricing";
import HomeHeader from "~/components/Section/Common/Header/HomeHeader";
import FooterSectionThree from "../../../components/Section/Common/Footer-3/FooterThree";

export default function ServicePage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <ServiceSection />
      <PricingSection />
      <FooterSectionThree />
    </>
  );
}
