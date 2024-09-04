import { CiDeliveryTruck, CiLock } from "react-icons/ci";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import "./values.css";

const Values = () => {
  const values = [
    {
      ValueIcon: <CiDeliveryTruck />,
      ValueInfo: "Free Delivery",
      ValuePin: "Order above $200",
    },
    {
      ValueIcon: <LiaMoneyBillSolid />,
      ValueInfo: "Money-back",
      ValuePin: "30 days guarantee",
    },
    {
      ValueIcon: <CiLock />,
      ValueInfo: "Secure Payments",
      ValuePin: "Secured by Stripe",
    },
    {
      ValueIcon: <FaPhone />,
      ValueInfo: "24/7 Support",
      ValuePin: "Phone and Email support",
    },
  ];

  return (
    <section className="value-section container section__body">
      <div className="row">
        {values.map((value, index) => (
          <div className="col-6 col-lg-3" key={`value-${index}`}>
            <div className="value-item d-flex flex-column justify-content-center align-items-start">
              <div className="value-icon">{value.ValueIcon}</div>
              <div className="value-info font-primary">
                <p className="mb-0">{value.ValueInfo}</p>
              </div>
              <div className="value-pin font-secondary">
                <p className="mb-0">{value.ValuePin}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Values;
