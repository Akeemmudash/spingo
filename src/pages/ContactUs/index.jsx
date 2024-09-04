import React from "react";
import ValuesSection from "../Home/ValuesSection";
import FeatureSection from "./FeatureSection";
import ContactSection from "./ContactSection";
import ContactHeader from "./ContactHeader";
import "./contactus.css";

export default function ContactUs() {
  return (
    <div className="contactus">
        <ContactHeader />
        <FeatureSection />
        <ContactSection />
        <ValuesSection />
    </div>
  );
}
