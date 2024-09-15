import { useParams } from "react-router-dom";
import { ClutchKibs, OilFilters } from "../../assets";
import Breadcrumb from "../../components/Breadcrumb";

export default function BlogPost() {
  const { id } = useParams();
  const blog = {
    title: "A New Era For Automotive Repair",
    author: "Chuks John",
    date: new Date().toLocaleDateString(),
  };

  return (
    <section className="container">
      <Breadcrumb />
      <div className="blogpost-header">
        <h2 className="fs-8 text-uppercase mb-2 mt-5">Article</h2>
        <h1 className="blog-title">{blog.title}</h1>
        <div className="header-infos d-flex align-items-start my-4 text-base-gray gap-5">
          <p className="text-capitalize me-3 font-secondary d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="me-2"
              fill="none"
            >
              <path
                d="M18.5588 19.5488C17.5654 16.8918 15.0036 15 12 15C8.99638 15 6.4346 16.8918 5.44117 19.5488M18.5588 19.5488C20.6672 17.7154 22 15.0134 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 15.0134 3.33285 17.7154 5.44117 19.5488M18.5588 19.5488C16.8031 21.0756 14.5095 22 12 22C9.49052 22 7.19694 21.0756 5.44117 19.5488M15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6C13.6569 6 15 7.34315 15 9Z"
                stroke="#7C797A"
                strokeWidth="1.15"
                strokeLinejoin="round"
              />
            </svg>
            {blog.author}
          </p>
          <p className="d-flex align-items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="me-2"
            >
              <path
                d="M16 2V5"
                stroke="#7C797A"
                strokeWidth="1.15"
                strokeLinecap="round"
              />
              <path
                d="M8 2V5"
                stroke="#7C797A"
                strokeWidth="1.15"
                strokeLinecap="round"
              />
              <path
                d="M3 7.5C3 5.29086 4.79086 3.5 7 3.5H17C19.2091 3.5 21 5.29086 21 7.5V18C21 20.2091 19.2091 22 17 22H7C4.79086 22 3 20.2091 3 18V7.5Z"
                stroke="#7C797A"
                strokeWidth="1.15"
              />
              <path
                d="M3 9H21"
                stroke="#7C797A"
                strokeWidth="1.15"
                strokeLinecap="round"
              />
            </svg>
            {blog.date}
          </p>
        </div>
      </div>

      <div className="dblogPost">
        <div className="dblog-image">
          <img
            src={ClutchKibs}
            alt="Clutch Kibs Image"
            className="dblogimg object-fit-cover w-100 h-100"
          />
        </div>
        <p className="my-4">
          In a groundbreaking move set to transform the automotive repair
          industry, Vescan has launched a state-of-the-art online platform
          dedicated to providing high-quality spare parts to mechanics and
          towing companies across the nation. This innovative platform aims to
          streamline the process of sourcing and ordering essential vehicle
          components, enabling businesses to operate with greater efficiency and
          reliability.
        </p>

        <div className="">
          <div className="row display-contain mx-auto">
            <div className="display-images col-12 col-md-6 mb-3">
              <img
                src={OilFilters}
                alt="Oil Filters Image"
                className="w-100 h-100 object-fit-cover"
              />
            </div>

            <p className="mb-3 order-0 order-md-2">
              With a focus on user experience, Vescan has tailored its platform
              to meet the specific needs of its primary users: mechanics and
              towing companies. The platform offers a vast catalog of spare
              parts, including those that are often difficult to source. Whether
              it’s engine components, suspension systems, or specialized towing
              equipment, Vescan’s extensive inventory ensures that businesses
              can find exactly what they need to keep vehicles running smoothly.
            </p>

            <div className="display-images col-12 col-md-6 order-1 mb-3">
              <img
                src={OilFilters}
                alt="Oil Filters Image"
                className="w-100 h-100 object-fit-cover "
              />
            </div>
            <p className="mb-3 order-last">
              Quality assurance is a cornerstone of Vescan’s platform. All
              products listed are sourced from reputable manufacturers and
              undergo rigorous quality checks before being made available for
              purchase. This commitment to quality ensures that the parts
              ordered through Vescan are durable, reliable, and meet the highest
              industry standards.
            </p>
          </div>
        </div>
        <div className="blog__side-content row">
          <div className="display-images col-12 col-lg-6 h-100 mb-3 mb-md-0">
            <img
              src={OilFilters}
              alt="Oil Filters Image"
              className="h-100 object-fit-cover w-100"
            />
          </div>
          <div className=" col-12 col-lg-6 ">
            <p className="mb-3">
              In addition to quality, Vescan places a strong emphasis on
              customer support. A dedicated team is available to assist users
              with any queries or issues, ensuring that the platform operates
              smoothly and that users have the support they need to make
              informed purchasing decisions.
            </p>
            <p className="mb-3">
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
    </section>
  );
}
