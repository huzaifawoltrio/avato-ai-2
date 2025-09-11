import PageHeader from "~/components/Section/Common/PageHeader";
import IntegrationSection from "~/components/Section/Integrations/Integration/Integration";
import { HomeHeader } from "~/components/Section/Common/Header";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

export default function IntegrationPage() {
  return (
    <>
      <HomeHeader roundedBtn="true" />
      <PageHeader title="Integrations" />
      <IntegrationSection />
      <FooterSectionThree />
    </>
  );
}
