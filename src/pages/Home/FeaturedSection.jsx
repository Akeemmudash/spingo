import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css';
import Card from "../../components/Card/Card";

export default function FeaturedSection() {
  return (
    <section className="featured-section">
      <div className="featured-heading">
        <h2>Featured Products</h2>
      </div>
      <div className="featured-carousel">
        <Carousel
          showArrows={true}
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={3000}
          stopOnHover
          showStatus={false}
          showIndicators={true}
        >
          <div>
            <img src="image1.jpg" alt="Product 1" />
            <div className="card-wrapper">
              <Card />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}
