import Values from "../../components/Values";
import ContactHeader from "./ContactHeader";
import ContactSection from "./ContactSection";
import FeatureSection from "./FeatureSection";
import "./contactus.css";

export default function ContactUs() {
  return (
    <article className="contactus">
      <ContactHeader />
      <FeatureSection />
      <ContactSection />

      <div className="bg-gray-light mt-5">
        <Values />
      </div>
    </article>
  );
}
