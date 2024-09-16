import { CiDeliveryTruck, CiLock } from "react-icons/ci";
import { LiaMoneyBillSolid } from "react-icons/lia";
import { FaPhone } from "react-icons/fa6";
import { motion } from "framer-motion";
import "./home.css";

const ValuesSection = () => {
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="row">
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
      <div className="col-sm-12 col-md-12 col-lg-10">
        <motion.div
          className="value-section"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="value-item"
              variants={itemVariants}
            >
              <div className="contain">
                <div className="value-icon">{value.ValueIcon}</div>
                <div className="value-info">
                  <p>{value.ValueInfo}</p>
                </div>
                <div className="value-pin">
                  <p>{value.ValuePin}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="col-sm-12 col-md-12 col-lg-1"></div>
    </div>
  );
};

export default ValuesSection;
