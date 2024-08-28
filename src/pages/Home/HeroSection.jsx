import { HeroImg, HeroImgS } from "../../assets";
import "./home.css";

export default function HeroSection() {
  return (
    <section className="hero-section">
      <div className="image-container">
        <picture>
          <source media="(max-width: 998px)" srcSet={HeroImgS} />
          <img src={HeroImg} alt="Hero" className="hero-img" />
        </picture>
      </div>
      <div className="overlay-container">
        <h1>
          <span>Get the Best</span> <br /> Vehicle Spare <br /> Parts from Us
        </h1>
        <p>
          Reliable, Quality and Affordable Automotive
          <br className="breakpoint" /> Parts for Mechanics and Towing Companies
        </p>

        <button className="btn skyBtn">Shopping Now</button>
      </div>
    </section>
  );
}
