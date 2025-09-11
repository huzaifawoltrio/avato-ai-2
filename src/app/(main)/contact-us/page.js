import FAQSection from "~/components/Section/Common/FAQ/FAQSection";
import PageHeader from "~/components/Section/Common/PageHeader";
import CallUs from "~/components/Section/ContactUs/CallUs";
import ContactSection from "~/components/Section/ContactUs/Contact/ContactSection";
import { HomeHeader } from "~/components/Section/Common/Header";
import FooterSectionThree from "~/components/Section/Common/Footer-3/FooterThree";

const ContactUsPage = () => {
  return (
    <>
      <HomeHeader roundedBtn={true} />
      <PageHeader title="Contact Us" />
      <ContactSection />
      <CallUs />
      <FAQSection />
      <FooterSectionThree />
    </>
  );
};

export default ContactUsPage;
