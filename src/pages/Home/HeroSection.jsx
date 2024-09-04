import { HeroImg, HeroImgS } from "../../assets";
import "./home.css";

export default function HeroSection() {
  return (
    <section className="hero-section position-relative">
      <div className="image-container h-100">
        <picture>
          <source media="(max-width: 991px)" srcSet={HeroImgS} />
          <img src={HeroImg} alt="Hero" className="hero-img object-fit-cover" />
        </picture>
      </div>
      <div className="position-absolute w-100 h-100 top-0">
        <div className="container h-100 d-flex  flex-column justify-content-center">
          <div className="overlay-container ">
            <h1 className="hero__heading font-primary">
              <span>Get the Best</span> <br /> Vehicle Spare Parts from Us
            </h1>
            <p className="font-secondary">
              Reliable, Quality and Affordable Automotive
              <br className="breakpoint" /> Parts for Mechanics and Towing
              Companies
            </p>

            <button className="btn skyBtn">Shopping Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
