import React from "react";
import ValuesSection from "../Home/ValuesSection";
import FeatureSection from "./FeatureSection";
import ContactSection from "./ContactSection";
import ContactHeader from "./ContactHeader";
import "./contactus.css";

export default function ContactUs() {
  return (
    <div className="contactus">
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
        <div className="col-sm-12 col-md-12 col-lg-10"></div>
        <ContactHeader />
        <FeatureSection />
        <ContactSection />
        <ValuesSection />
        <div className="col-sm-12 col-md-12 col-lg-1"></div>
      </div>
    </div>
  );
}
