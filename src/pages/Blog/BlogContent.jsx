import React from "react";
import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineDateRange } from "react-icons/md";
import { ClutchKibs, FuelPumps, OilFilters } from "../../assets";

export default function BlogPost() {
  const { id } = useParams();
  const blog = {
    author: "John Doe", // Replace with dynamic data if needed
    title: "A New Era For Automotive Repair",
    date: new Date().toLocaleDateString(), // Gets the current date
  };

  return (
    <div className="blogpost-container">
      <nav className="breadcrumb">
        <a className="breadcrumb-item" href="/">
          Home
        </a>
        <a className="breadcrumb-item" href="/blog">
          Blog
        </a>
        <span className="breadcrumb-item active" aria-current="page">
          {blog.title}
        </span>
      </nav>
      <div className="blogpost-header">
        <p>Article</p>
        <h2>{blog.title}</h2>
        <div className="header-infos">
          <div>
            <BsPersonCircle /> {blog.author}
          </div>
          <div>
            <MdOutlineDateRange /> {blog.date}
          </div>
        </div>
      </div>

      <div className="dblogPost">
        <div className="dblog-image">
          <img src={ClutchKibs} alt="Clutch Kibs Image" className="dblogimg" />
        </div>
        <p>
          In a groundbreaking move set to transform the automotive repair
          industry, Vescan has launched a state-of-the-art online platform
          dedicated to providing high-quality spare parts to mechanics and
          towing companies across the nation. This innovative platform aims to
          streamline the process of sourcing and ordering essential vehicle
          components, enabling businesses to operate with greater efficiency and
          reliability.
        </p>

        <div className="display-imags">
          <div className="d-flex display-contain">
            <div className="display-images">
              <img src={OilFilters} alt="Oil Filters Image" />
            </div>
            <div className="display-images">
              <img src={OilFilters} alt="Oil Filters Image" />
            </div>
          </div>
          <p>
            With a focus on user experience, Vescan has tailored its platform to
            meet the specific needs of its primary users: mechanics and towing
            companies. The platform offers a vast catalog of spare parts,
            including those that are often difficult to source. Whether it’s
            engine components, suspension systems, or specialized towing
            equipment, Vescan’s extensive inventory ensures that businesses can
            find exactly what they need to keep vehicles running smoothly.
          </p>
        </div>
        <div className="display-imags-small">
          <div className="display-images">
            <img src={OilFilters} alt="Oil Filters Image" />
          </div>
          <p>
            With a focus on user experience, Vescan has tailored its platform to
            meet the specific needs of its primary users: mechanics and towing
            companies. The platform offers a vast catalog of spare parts,
            including those that are often difficult to source. Whether it’s
            engine components, suspension systems, or specialized towing
            equipment, Vescan’s extensive inventory ensures that businesses can
            find exactly what they need to keep vehicles running smoothly.
          </p>
          <div className="display-images">
            <img src={OilFilters} alt="Oil Filters Image" />
          </div>
        </div>

        <div className="lastRead">
          <div className="lastRead-img">
            <img src={FuelPumps} alt="Fuel Pumps Image" />
          </div>
          <div className="lastread-p">
            <p>
              Quality assurance is a cornerstone of Vescan’s platform. All
              products listed are sourced from reputable manufacturers and
              undergo rigorous quality checks before being made available for
              purchase. This commitment to quality ensures that the parts
              ordered through Vescan are durable, reliable, and meet the highest
              industry standards.
            </p>
            <p>
              In addition to quality, Vescan places a strong emphasis on
              customer support. A dedicated team is available to assist users
              with any queries or issues, ensuring that the platform operates
              smoothly and that users have the support they need to make
              informed purchasing decisions.
            </p>
            <p>
              In a rapidly evolving industry, Vescan’s innovative platform
              stands out as a game-changer, providing mechanics and towing
              companies with the tools they need to succeed in an increasingly
              competitive market. By revolutionizing the way spare parts are
              sourced and ordered, Vescan is setting a new standard for
              efficiency, reliability, and customer satisfaction in automotive
              repair.
            </p>
          </div>
        </div>
        <div className="lastRead-small">
          <p>
            Quality assurance is a cornerstone of Vescan’s platform. All
            products listed are sourced from reputable manufacturers and undergo
            rigorous quality checks before being made available for purchase.
            This commitment to quality ensures that the parts ordered through
            Vescan are durable, reliable, and meet the highest industry
            standards.
          </p>
          <div className="lastRead-img">
            <img src={FuelPumps} alt="Fuel Pumps Image" />
          </div>
          <div className="lastread-p">
            <p>
              In addition to quality, Vescan places a strong emphasis on
              customer support. A dedicated team is available to assist users
              with any queries or issues, ensuring that the platform operates
              smoothly and that users have the support they need to make
              informed purchasing decisions.
            </p>
            <p>
              In a rapidly evolving industry, Vescan’s innovative platform
              stands out as a game-changer, providing mechanics and towing
              companies with the tools they need to succeed in an increasingly
              competitive market. By revolutionizing the way spare parts are
              sourced and ordered, Vescan is setting a new standard for
              efficiency, reliability, and customer satisfaction in automotive
              repair.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
